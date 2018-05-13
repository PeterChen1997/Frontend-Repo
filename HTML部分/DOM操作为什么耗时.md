# DOM操作为什么耗时

无论是对于刚刚开始学习，还是有所基础的前端学习者来说，都听过这么一句话，少用JS进行DOM操作，性能不好，耗时并且影响用户体验

其实，不谈量的丢下这么一句话，其实是耍流氓hh。今天我们就来看看，DOM操作为什么耗时，并且到底有有多耗时

## DOM操作原理

> DOM（Document Object Model——文档对象模型）是用来呈现以及与任意 HTML 或 XML 交互的API文档。DOM 是载入到浏览器中的文档模型，它用节点树的形式来表现文档，每个节点代表文档的构成部分（例如： element——页面元素、字符串或注释等等）。    ——MDN

DOM其实是方便HTML组织元素结点的一种抽象对象，而对DOM的操作，指的就是我们日常对页面元素进行的操作

对DOM的操作其实就跟放大象到冰箱里一样，拿出来，改改改，放回去，并且放回去的操作浏览器帮你做了。(当然也可以自己做，见后文)

其实这类简单的操作并不会给浏览器带来多大的负担，所以说，DOM操作并不耗时

那么你会问：这么说我听了这么久的耗时说法是错的了？

当然，事出有因，只是表述的时候有所省略了。真正影响我们操作体验的是，我们将变化后的DOM结点，放回去，引发的浏览器的`重排`和`重绘`

而且，这其中最为重要的，是**浏览器的渲染机制**，在渲染时，会`阻塞JS`的进程`，避免出现渲染错误，这也是为什么我们要将JS文件，放在底部执行的原因

### 重排和重绘

- 重排 reflow：部分 **渲染树需要重新分析** 并且 **节点尺寸需要重新计算**
- 重绘 repaint：由于节点的 **几何属性** 发生改变或者由于 **样式** 发生改变,屏幕上的部分内容需要更新

#### 触发重绘的操作

改变 width height、offset、visibility、outline、背景色值

重绘不一定重排

#### 触发重排的操作

1. DOM元素的几何属性变化
2. DOM树结构变化
3. 获取某些属性（offsetTop...)(省略优化，直接重排）

### 耗时情况

说了这么多，我们来看看，到底在什么情况下，我们会感受到DOM操作的缓慢

下面是一个对类为main的div进行填充的操作

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>DOM</title>
</head>
<body>
  <div class="main"></div>

  <script>
    let div = document.getElementsByClassName('main')
    let times = 10

    console.time('timer')
    for(let i = 0; i < times; i++) {
      let subDiv = document.createElement('div')
      subDiv.innerHTML = `<div>Hello ${i}</div>`

      div[0].innerHTML = div[0].innerHTML + `<div>Hello ${i}</div>`
    }
    console.timeEnd('timer')

  </script>
</body>
</html>
```

我使用了尽可能让DOM操作慢的代码编写方式，为了让效果更加明显

#### 插入10个div

让times = 10,我们可以在console里看到时间是

```
  timer: 0.39599609375ms
```

#### 插入100个div

```
  timer: 22.204833984375ms
```

#### 插入1000个div

```
  timer: 1176.9072265625ms
```

---

我们可以从上面的测试中看到，当我们只在同一时刻操作少量的DOM结点时，效果并不明显，直到1000这个数量级，我们肉眼才会有可见的延迟

**所以，当我们只是编写简单页面时，完全可以不用考虑DOM操作延时对我们的影响**

当然，也是因为我们测试使用的例子较为简单，真正在实际的HTML页面中，div元素内可能还会有较多的子DOM结点，所以延迟会更加明显

## DOM操作优化

那么在之后的学习中，随着业务的越来越复杂，我们必不可少的会学习到，如何进行DOM优化，下面是几种简单，常用的优化方法

### 事件委托

又称事件代理，详情见我的[事件委托](https://blog.peterchen.club/articlesList/article1526210867428)这篇文章

### virtual dom

请见我的这篇文章，[virtual dom有多秀](https://blog.peterchen.club/articlesList/article1526130044786)

### 对API进行优化

- 减少DOM访问次数
- 多次访问同一DOM，应该用局部变量缓存该DOM
- 尽可能使用querySelector，而不是使用获取HTML集合的API
- 注意重排和重绘
- 使用事件委托，减少绑定事件的数量

### window.requestAnimationFrame()

> window.requestAnimationFrame() 方法告诉浏览器您希望执行动画并请求浏览器在下一次重绘之前调用指定的函数来更新动画。该方法使用一个回调函数作为参数，这个回调函数会在浏览器重绘之前调用  ——MDN

```js
// Read
var h1 = element1.clientHeight;

// Write
requestAnimationFrame(function() {
  element1.style.height = (h1 * 2) + 'px';
});

// Read
var h2 = element2.clientHeight;

// Write
requestAnimationFrame(function() {
  element2.style.height = (h2 * 2) + 'px';
});
```

## 结语

好了，今天关于DOM操作的相关内容就这么多了，RNG被TL打爆，也没啥好说的了，RNG加油吧