# Vue中的数据劫持

## 啥是数据劫持

其实挺简单，就是监听对象属性的写入与读取动作，控制写入和读取的值，使原本的值被“劫持”，使原本动作不一定能达到未劫持前的效果

在Vue中，是通过Object.defineProperty()实现的，来看个简单的例子

```js
// 功能是劫持数据后设置给输出div

let obj = {}
Object.defineProperty(obj, 'txt', {
    get: function () {
        return obj
    },
    set: function (newValue) {
      // 将数据绑定给输出div
      document.getElementById('showText').innerText = newValue
      document.getElementById('txt').value = newValue
    }
})
// 监听输入时间
document.getElementById('txt').addEventListener('keyup', function (e) {
    obj.txt = e.target.value
})
```
