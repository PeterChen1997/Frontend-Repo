# Topic

## JS API

> window.requestAnimationFrame(callback)

### callback

一个指定函数的参数，该函数在下次重新绘制动画时调用。这个回调函数只有一个传参，DOMHighResTimeStamp，指示**requestAnimationFrame()** 开始触发回调函数的当前时间（performance.now() 返回的时间）

### 调用返回值

一个 long 整数，请求 ID ，是回调列表中唯一的标识。是个非零值，没别的意义。你可以传这个值给 **window.cancelAnimationFrame()** 以取消回调函数

## 例子

```js
var start = null;
var element = document.getElementById('SomeElementYouWantToAnimate');
element.style.position = 'absolute';

function step(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;
  element.style.left = Math.min(progress / 10, 200) + 'px';
  if (progress < 2000) {
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);
```