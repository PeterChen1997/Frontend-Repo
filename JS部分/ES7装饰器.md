# ES7装饰器

## 什么是装饰器

装饰器模式（Decorator Pattern）允许向一个现有的对象添加新的功能，同时又不改变其结构。这种类型的设计模式属于结构型模式，它是作为现有的类的一个包装。

很多面向对象的语言都实现了这个用法，如Java,Python。

光看概念可能理解的比较慢，来看看玩家类的这个例子：

```js
/* 
  @powerUp  这个装饰器的作用是提升玩家每局战斗之前的 初始 能量值

  可以理解为：你充钱，就能得到这个装饰器，没开局就能比别人强
*/
@powerUp 
class Player {
  // ...
}

function powerUp(target) {
  target.power += 20
}

Player.power // Initial value + 20
```

等同于

```js
class Player {
  // ...
}

Player = powerUp(Player) || Player
```

其实装饰器就是起到了对玩家**类**进行处理的功能

### 装饰器的参数

在装饰器函数当中，第一个参数`target`代表的是被修饰的类

在这个过程中可以对函数进行封装来扩展更多的参数

#### 添加静态属性

如果我们想自定义增加的能量值，就可以这么搞

```js
// value是自定义的能量值
function powerUp(value) {
  return function(target) {
    target.power += value || 20
  }
}

// 我氪3个亿，加30
@powerUp(30)
class Player {}
Player.power // Initial value + 30

// 我氪1个亿，加10
@powerUp(10)
class Player {}
Player.power // Initial value + 10
```

> 注意，修饰器对类的行为的改变，是**代码编译时**发生的，而不是在运行时。这意味着，修饰器能在编译阶段运行代码。也就是说，修饰器本质就是编译时执行的函数

#### 添加实例属性

那我们新建了一个小号，却发现没法加成了咋整

```js
@powerUp()
class Player {
  // ...
}

console.log(Player.power) // Initial value + 20

console.log(new Player().power) // Initial value
```

这时候老马说，再冲一个亿就行，给你一个新装饰器@allPowerUp


```js
// 需要添加实例属性才有用
@allPowerUp()
class Player {
  // ...
}

function allPowerUp(target) {
  target.prototype.power += 20
}

console.log(new Player().power) // Initial value + 20, 解决
```

### 装饰器的使用对象

在上面的使用过程中，我们发现了，装饰器可以作用在类上

其实，还可以作用在类的属性上

```js
@powerUp()
class Player {
  // ...
  @readonly()
  userName() { return '爷傲、奈我何' }
}

/*
  @readonly 实现方法
  #target 指的不再是类本身 (因为方法在实例对象上才能调用，但此时没有实例对象，若要修改只能修改原型)
  #name 是所要修饰的属性名
  #descriptor 是该属性的描述对象
*/
function readonly(target, name, descriptor){
  // descriptor对象原来的值如下
  // {
  //   value: specifiedFunction,
  //   enumerable: false,
  //   configurable: true,
  //   writable: true
  // };
  descriptor.writable = false
  return descriptor
}

readonly(Person.prototype, 'userName', descriptor);
// 类似于
Object.defineProperty(Person.prototype, 'userName', descriptor);
```
> 如果同一个方法有多个修饰器，会像剥洋葱一样，先从外到内进入，然后由内向外执行

## 为啥要使用装饰器呢

简化代码，提高代码可读性

## 装饰模式 与 适配器模式

装饰模式和适配器模式都是 包装模式 (Wrapper Pattern)

- **适配器模式**你需要包装现有的模块接口，从而使之适配
- **装饰模式**不一样，仅仅包装现有的模块，并不会影响原有接口的功能

## 感谢提供知识的文章

[ES7 Decorator 装饰器 | 淘宝前端团队](https://segmentfault.com/p/1210000009968000/read)

[ECMAScript 6 入门 | 修饰器](http://es6.ruanyifeng.com/?search=%E8%A3%85%E9%A5%B0%E5%99%A8&x=0&y=0#docs/decorator)
