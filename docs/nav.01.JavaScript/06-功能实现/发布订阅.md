# 发布订阅

## 实现

```js
class Event {
  constructor() {
    // 存储事件的数据结构
    this._cache = {};
  }
  // 绑定
  on(type, callback) {
    // 为了按类查找方便和节省空间，
    // 将同一类型事件放到一个数组中
    // 这里的数组是队列，遵循先进先出
    // 即先绑定的事件先触发
    if(!this._cache.hasOwnProperty(type)) {
        this._cache[type] = []
    }
    this._cache[type].push(callback)
    return this
  }
  // 触发
  trigger(type, data) {
    let fns = this._cache[type];
    if (Array.isArray(fns)) {
      fns.forEach((fn) => {
        fn(data);
      });
    }
    return this;
  }
  // 解绑
  off(type, callback) {
    let fns = this._cache[type];
    if (Array.isArray(fns)) {
      if (callback) {
        let index = fns.indexOf(callback);
        if (index !== -1) {
          fns.splice(index, 1);
        }
      } else {
        //全部清空
        fns.length = 0;
      }
    }

  }
}

// 测试用例
const event = new Event();
event.on('test', (a) => {
  console.log(a);
});
event.trigger('test', 'hello world');

event.off('test');
event.trigger('test', 'hello world')
```
