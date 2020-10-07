# new操作符

## 实现

1. 创建一个新对象
1. 绑定原型
1. 执行构造函数中的代码（为这个新对象添加属性）
1. 返回新对象

```js
function objectFactory() {
    var obj = Object.create(null)

    Constructor = Array.prototype.shift.call(arguments);
    obj.__proto__ = Constructor.prototype;

    var ret = Constructor.apply(obj, arguments);

    return typeof ret === 'object' ? ret : obj;
};
```
