# setState

## setState的用法

```js
// 官方定义
this.setState(updater[,callback])
```

## 具体实现

![img](https://pic3.zhimg.com/80/4fd1a155faedff00910dfabe5de143fc_hd.jpg)

- 首先将newState存入pending队列
- 根据isBatchingUpdates判断是否直接更新
  - False:遍历dirtyComponents,调用updateComponent,更新pending state 和 props
  - True:保存组件到dirtyComponents

**解释：** 函数batchedUpdates,会将isbatchedUpdates设置为true,在React调用事件处理函数之前就会调用这个函数，造成的后果就是不会同步更新state

**原因：** 每次进行setState必然触发更新过程，所以一是可以通过shouldComponentUpdate进行一个筛选，二是可以将之前的setState进行一个merge统一render，保证render不是每次都执行，否则则十分消耗性能

## setState调用后，会触发哪些生命周期函数

- shouldComponentUpdate
- componentWillUpdate
- render **(在render的时候才会更新state)**
- componentDidUpdate

---

### updater

#### 传统调用

```js
// count : 0
this.setState({ count: this.state.count + 1 })
this.setState({ count: this.state.count + 1 })
```

> 在传统调用当中，执行完上面的两次setState后，count为1，不为2

##### 原因

在调用setState时，不是同步变化的，所以state并没有变化(参见上述生命周期)，所以setState只是在重复设置一个值

#### 函数式调用

```js
function updater(preState, props) {
  return { count: preState.count + 1 }
}

---
// count : 0
this.setState(updater) // count: 1
this.setState(updater) // count: 2

```

- updater可以是一个函数，函数返回setState需要更改的键值对对象
- 函数有两个形参，一个是state,一个是props
- 使用函数式调用的时候可以完成同步更新state(但是依然是在render的时候更新state)