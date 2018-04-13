# Topic

## new

1. 创建一个新对象
1. 绑定原型
1. 执行构造函数中的代码（为这个新对象添加属性）
1. 返回新对象

```js
function Person(name){
    this.name = name;
}
Person.prototype.sayName = function(){
    console.log('My name is :' + this.name);
}
var p = new Person("kylewh")
p.sayName();

//关系如下
console.dir( 
rel = [
    Person.prototype.constructor == Person,
    Person.prototype == p.__proto__,
    p.__proto__.constructor == Person,
    Person.prototype.__proto__ == Object.prototype,
    Object.prototype.constructor == Object,
    Object.prototype.__proto__ == null
]
); // 6个true
```
