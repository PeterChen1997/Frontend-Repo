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