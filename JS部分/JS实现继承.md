# JS实现继承

## 原型继承

通过将父类的实例 赋值给 **子类的prototype属性值** ，继承父类的属性和方法

缺点：只复制了方法，并未复制属性，造成子类实例共享属性，造成实例间的属性会相互影响

![img](http://files.jb51.net/file_images/article/201606/2016062216225510.png)

```js
function SuperType() {
  this.property = true;
}
SuperType.prototype.getSuperValue = function() {
  return this.property;
}
function SubType() {
  this.property = false;
}
//继承了SuperType
SubType.prototype = new SuperType();

var instance = new SubType();
console.log(instance.getSuperValue());//false
```

## 构造函数继承

通过在子类构造函数的内部调用父类构造函数，实现继承

缺点：没有共享同一个方法，并且instance1 instanceof SuperType为false，无法通过原型链判断对象是否属于父类

```js
function SuperType() {
  this.colors = ["red","blue","green"];
}
function SubType() {
  SuperType.call(this);//继承了SuperType
}
var instance1 = new SubType();
instance1.colors.push("black");
console.log(instance1.colors);//"red","blue","green","black"
var instance2 = new SubType();
console.log(instance2.colors);//"red","blue","green"
```

## 组合继承

结合 **原型继承继承方法** 与 **构造继承继承属性** ，实现继承

缺点：父类构造函数被调用两次,子类实例的属性存在两份

```js
function SuperType(name) {
  this.name = name;
  this.colors = ["red","blue","green"];
}
SuperType.prototype.sayName = function() {
  console.log(this.name);
}
function SubType(name, age) {
  SuperType.call(this,name);//继承属性
  this.age = age;
}
//继承方法
SubType.prototype = new SuperType();
Subtype.prototype.constructor = Subtype;
Subtype.prototype.sayAge = function() {
  console.log(this.age);
}
var instance1 = new SubType("EvanChen",18);
instance1.colors.push("black");
consol.log(instance1.colors);//"red","blue","green","black"
instance1.sayName();//"EvanChen"
instance1.sayAge();//18
var instance2 = new SubType("EvanChen666",20);
console.log(instance2.colors);//"red","blue","green"
instance2.sayName();//"EvanChen666"
instance2.sayAge();//20
```

## 寄生继承（完美）

子类都有各自的实例不会相互影响，且共享了父类的方法

```js
function SuperType() {
  this.colors = ["red","blue","green"];
}
SuperType.prototype.getColors = function() {
  return this.colors
}
function SubType() {
  SuperType.call(this);//继承了SuperType
}
SubType.prototype = Object.create(SuperType.prototype)
const instance1 = new SubType()
instance1.colors.push('black')
console.log(instance1.getColors());//"red","blue","green","black"
var instance2 = new SubType();
console.log(instance2.getColors());//"red","blue","green"
```

## ES6实现继承

通过extends实现，效果与寄生继承一致