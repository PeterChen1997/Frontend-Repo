# JS原型链

![imgs](https://www.peterchen.club/imgs/prototype.png)
![imgs](https://www.peterchen.club/imgs/prototype2.png)

## 定义

JS只有一种结构，对象。每个对象都有一个私有属性__proto__，它指向它的原型对象的prototype。该 prototype 对象又具有一个自己的__proto__ ，层层向上直到一个对象的原型为 null。根据定义，null 没有原型，并作为这个原型链中的最后一个环节。

### 要点

- 当 new 一个函数的时候会创建一个对象，『函数.prototype』 等于 『被创建对象.__proto__』
- 一切函数都是由 Function 这个函数创建的，所以『Function.prototype === 被创建的函数.__proto__』
- 一切函数的原型对象都是由 Object 这个函数创建的，所以『Object.prototype === 一切函数.prototype.__proto__』

### 原型链顶端

```js
let a = new Function()
a.__proto__ // function
a.__proto__.__proto__ // object
a.__proto__.__proto__.__proto__ // null
```

### 举例：object实例如何拥有toString方法

```js
let obj = {}
obj.toString()

a.__proto__.toString() === window.Object.prototype.toString() // true
```

1. obj对象内为空，没有定义toString方法
1. obj含有私有属性__proto__,在其中发现了obj.__proto__.toString方法
1. 实际上调用的是 window.Object.prototype.toString


### 举例：Array实例如何拥有push方法

- 实例化数组，数组a本身没有push方法
- 沿着原型链向上查找
- 在实例化时继承Array原型，获取Array原型方法push

```js
let a = new Array()
a.__proto__ == Array.prototype // array prototype

a.__proto__.push() === window.Array.prototype.push() // true
```