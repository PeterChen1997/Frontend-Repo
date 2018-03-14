# JS原型链

## 定义

JS只有一种结构，对象。每个对象都有一个私有属性（称之为 [[Prototype]]），它指向它的原型对象（prototype）。该 prototype 对象又具有一个自己的 prototype ，层层向上直到一个对象的原型为 null。根据定义，null 没有原型，并作为这个原型链中的最后一个环节。

### 原型链顶端

```js
let a = new Function()
a.__proto__ // function
a.__proto__.__proto__ // object
a.__proto__.__proto__.__proto__ // null
```

### 举例：Array实例如何拥有push方法

- 实例化数组，数组a本身没有push方法
- 沿着原型链向上查找
- 在实例化时继承Array原型，获取Array原型方法push

```js
let a = new Array()
a.__proto__ == Array.prototype // array prototype
```