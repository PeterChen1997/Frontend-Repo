# Topic

## 实现代码

```js
let obj = {}
Object.defineProperty(obj, 'txt', {
  get: function() {
      return obj
  },
  set: function(newValue) {
    document.getElementById('txt').value = newValue
    document.getElementById('show-text').innerText = newValue
  }
})
document.addEventListener('keydown', function (e) {
    obj.txt = e.target.value
})

// 通过控制obj.txt实现
```