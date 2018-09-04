# JS实现继承

## 原型链继承

通过将父类的实例 赋值给 **子类的prototype属性值** ，继承父类的属性和方法

缺点：

- 只复制了方法，并未复制属性，造成子类实例共享属性，造成实例间的属性会相互影响(引用类型取值)
- 在创建子类实例时，不能向超类的构造函数中传递参数

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
SubType.prototype.constructor = SubType

var instance = new SubType();
console.log(instance.getSuperValue());//false
```

## 构造函数继承

通过在子类构造函数的内部调用父类构造函数，实现继承

- 优点：能向超类构造函数中传递参数
- 缺点：
  - 没有共享同一个方法，无法进行函数复用
  - 并且instance1 instanceof SuperType为false，无法通过原型链判断对象是否属于父类

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

## 组合继承（伪经典继承）

结合 **原型继承继承方法** 与 **构造继承继承属性** ，实现继承

思路：使用原型链实现对原型属性与方法的继承，通过构造函数实现对实例属性的继承

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
  SuperType.call(this,name);//第二次调用SuperType,屏蔽了原型中的两个同名属性
  this.age = age;
}
//继承方法
SubType.prototype = new SuperType(); // 第一次调用
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

## 原型式继承

借助原型可以基于已有的对象创建新对象，同时还不必因此创建自定义类型

- 缺点：传入的引用类型值，并不属于o所有，也同时属于之后新建的实例

```js
// Object.create()的polyfill
// 实际上就相当于创建了 o 对象的两个副本
Object.create = Object.create || function (o) {
  function F() {}
  F.prototype = o
  return new F()
}

```

### Object.create()的出现

ECMAScript 5 􏳝􏳞􏵅􏷍通过新增的Object.create()􏰟􏰠􏷎􏷏􏶑􏰜􏱏􏲜􏰗􏱺􏱻规范化了原型式继承

## 寄生式继承

与原型式继承紧密相关，**思路**与寄生构造函数与工厂模式类似，即创建一个用于仅用于封装继承过程的函数,该函数在在内部以某种方式来增强对象

- 缺点：使用寄生式继承来为对象添加函数，会由于不能做到函数服用而降低效率，这一点与构造函数模式类似

```js
function createAnother(original) {
  var clone = Object.create(original)
  clone.sayHi = function() {
    alert('hi')
  }
  return clone
}
```


## 寄生组合式继承

通过借用构造函数来继承属性，通过原型链的混成形式来继承方法

子类都有各自的实例不会相互影响，且共享了父类的方法

```js
function SuperType(name) {
  this.name = name
  this.colors = ["red","blue","green"];
}
SuperType.prototype.getColors = function() {
  return this.colors
}
function SubType(name, age) {
  SuperType.call(this, name);
  this.age = age
}
SubType.prototype = Object.create(SuperType.prototype)// 不必调用超类构造函数，只需要副本即可
SubType.prototype.constructor = SubType
SubType.prototype.sayAge = function() {
  alert(this.age)
}
```

## ES6实现继承

通过extends实现，效果与寄生继承一致