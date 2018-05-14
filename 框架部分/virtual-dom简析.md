# virtual-dom简析

virtual dom(后文简称v-dom)，是为了前端方面的DOM操作优化，而生的一个产物

程墨老师形容过v-dom和普通dom操作的区别，就是两个装修工人，同时进行装修工作，假如这时候，需要在这面墙上开一个洞

- dom工人选择将这面墙拆掉，再建一个有洞的墙
- v-dom工人将工程前后，墙的状态比对以后，发现只多了一个洞，所以只在墙上打一个洞，就完工了

工作量大小的差别不言而喻，当然，这只是一个形象的比喻，具体的优化原理可以看我的这篇文章——[DOM操作为什么这么耗时](https://blog.peterchen.club/articlesList/article1526130082989)

<!-- TOC -->

- [virtual-dom简析](#virtual-dom简析)
  - [v-dom的工作原理](#v-dom的工作原理)
    - [v-dom从何而来](#v-dom从何而来)
      - [jsx -> js](#jsx---js)
      - [js -> v-dom](#js---v-dom)
    - [v-dom如何进行修改操作](#v-dom如何进行修改操作)
      - [初始化v-dom](#初始化v-dom)
        - [对待组件](#对待组件)
        - [对待原生DOM](#对待原生dom)
      - [修改v-dom内的元素](#修改v-dom内的元素)
        - [render详解](#render详解)
  - [结语](#结语)
  - [参考文章](#参考文章)

<!-- /TOC -->

## v-dom的工作原理

这里用preact的v-dom原理，进行一个解释

### v-dom从何而来

我们在编写react的时候，一般都是通过JSX来编写的，这可以让我们的代码更加简洁，可读性更高

但是这不是浏览器支持的，我们需要将它翻译为浏览器能看懂的JS

所以，我们生成v-dom的第一个步骤需要做的事有下面这些

- 通过babel将JSX转换为JS
- 将JS转换为v-dom

#### jsx -> js

我们写一个简单的JSX

```js
// main component
<div>
  <input type="text" placeholder="Search" onChange = { this.filterList } />
  <List items={ this.state.items } />
</div>
// list component
<ul>
  {
    this.props.items.map(item => <li key={ item }>{ item }</li>)
  }
</ul>
```

通过babel转换为preact的[hyperscript](https://github.com/hyperhype/hyperscript)能处理的JS格式

原理就是遍历JSX结点

> "h"代表hyperscript。在React中，是将JSX转换为React.createElement

```js
// main component
h(
  "div",
  null,
  h("input", { type: "text", placeholder: "Search", onChange: this.filterList }),
  h(List, { items: this.state.items })
)

// list component
h(
  "ul",
  null,
  this.props.items.map(item => h(
    "li",
    { key: item },
    item
  ))
)

```

#### js -> v-dom

---

在接收到处理后的JS之后，hyperscript会创建一个叫`VNode`的结点，同React.createElement函数创建的ReactElement

preact实现代码：https://github.com/developit/preact/blob/master/src/h.js

主要做了几件事：

- 子组件调用函数返回VNode
- 父组件调用返回含VNode的Children数组的对象

`具体`的流程见下文的**初始化分析**

```js
// main component
{
  nodeName: "div",
  children: [
    {
      nodeName: "input",
      attributes: {
        type: "text",
        placeholder: "Search"
      },
      children: []
    },
    {
      nodeName: "List",
      attributes: {
        items: [
          "test1",
          "test2"
        ]
      },
      children: []
    }
  ]
}
```

### v-dom如何进行修改操作

#### 初始化v-dom

从顶级的v-dom对象开始，根据nodeName可分为组件与原生DOM的情况

##### 对待组件

调用如下生命周期函数

- componentWillMount
- render
- componentDidMount

在调用render函数时，如果是组件，则会发生VNode的转换

```js
// main compoennt
{
  nodeName: "Main",
  children: []
}
// 调用render(), 发生 VNode 转换
{
  nodeName: "div",
  children: [
    {
      nodeName: "input",
      attributes: {
        type: "text",
        placeholder: "Search"
      },
      children: []
    },
    {
      // 注意，此时子组件，没有调用render
      nodeName: "List",
      attributes: {
        items: [
          "test1",
          "test2"
        ]
      },
      children: []
    }
  ]
}
```

Preact实现代码：https://github.com/developit/preact/blob/master/src/vdom/component.js#L101

##### 对待原生DOM

如例子中，最外层nodeName为'div'的VNode

- document.createElement()
- 对非组件children递归调用document.createElement() （如本例子中的Input）
- 直到children无子元素，进行parent.appendChild(me)

> 在这个过程中，先处理Input，后处理组件Children List

---

完成上面的步骤后，整个组件的渲染初始化过程就完成了

> 重要提示：一旦完成了所有事情，就会将真实DOM的引用添加到每个组件实例中。该引用用于剩余的更新（创建，更新，删除）进行比较，并避免重新创建相同的DOM节点。

#### 修改v-dom内的元素

同初始化一样，也会重新创建VNodes

更新会触发的生命周期函数：

- componentWillReceiveProps
- shouldComponentUpdate
- componentWillUpdate
- render
- componentDidUpdate

> 此外，更新周期，如果这些元素已经存在，则不会重新创建DOM元素

##### render详解

每个组件都有一个对初始加载期间创建的对应真实DOM树的引用

当VNodes创建时，每个VNode的属性都会与该节点上的REAL DOM的属性进行比较。如果存在真正的DOM，则循环移至下一个节点

假如我们对List组件中的一个元素进行`删除`操作，此时的v-dom会与原来的Real DOM产生差异，此时需要移除结点

```js
// component
call componentWillUnMount
then remove all nodes
call componentDidUnMount
stop
// 非component
let p = node.parentNode
p.removeChild(node)
call componentDidUpdate
stop
```

## 结语

这是整个preact的处理逻辑

![imgs](https://www.peterchen.club/imgs/v-dom1.png)

写完整个v-dom的构造，感觉对框架的理解，又更加深入了些，之后也会对v-dom操作的精华diff算法进行一个详细的分析，今天就到这了，RNG打KZ，看香锅发挥了

## 参考文章

[深入研究Virtual DOM](https://medium.com/@rajaraodv/the-inner-workings-of-virtual-dom-666ee7ad47cf)