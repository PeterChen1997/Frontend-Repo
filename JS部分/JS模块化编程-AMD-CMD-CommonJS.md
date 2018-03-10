# JS模块化编程

模块就是实现特定功能的一组方法。模块化就是讲js文件按照功能分离，根据需求引入不同的文件中。源于服务器端。

<!-- TOC -->

- [JS模块化编程](#js模块化编程)
  - [实现方法](#实现方法)
    - [对象写法](#对象写法)
    - [自执行函数写法(闭包)](#自执行函数写法闭包)
  - [模块的规范](#模块的规范)
    - [CommonJS](#commonjs)
      - [CommonJS循环依赖](#commonjs循环依赖)
    - [AMD](#amd)
    - [AMD框架require.js](#amd框架requirejs)
      - [AMD模块的编写](#amd模块的编写)
    - [CMD](#cmd)

<!-- /TOC -->

## 实现方法

### 对象写法

将相关方法写成一个对象，防止污染全局作用域

```js
var module1 = new Object({
  _count : 0,
  m1 : function (){
  　　//...
  },
  m2 : function (){
  　　//...
  }
});
```

但是上面的方法有个问题，内部私有成员变量_count会被直接操作

### 自执行函数写法(闭包)

使用自执行方法可以避免这个问题

```js
var module1 = (function(){
  var _count = 0;
  var m1 = function(){　　};
  var m2 = function(){　　};
  return {　　m1 : m1,　　m2 : m2};
})();
```

## 模块的规范

### CommonJS

node的模块系统就是参照CommonJS实现的，用require()进行模块的加载

```js
　　var math = require('math')
```

#### CommonJS循环依赖

require.js只会执行到相互引用的部分，下面的代码不再过问。

这样做会导致出现not defined错误

可以通过不使用前置加载，在使用的地方require即可

ES6中不会出现循环依赖，因为ES6中声明的只是引用，并没有引入

### AMD

浏览器端不同于服务器端，资源需要进行异步加载，否则会造成浏览器的“假死”，AMD的出现解决了这个问题

> AMD: Asynchronous Module Definition

```js
require([module], callback); // module为要加载的模块，callback是加载成功之后的回调函数
```

### AMD框架require.js

```html
<script src="1.js"></script>
<script src="2.js"></script>
```

加载JS的时候，浏览器会停止网页渲染，加载文件越多，网页失去响应的时间就会越长；其次，由于js文件之间存在依赖关系，因此必须严格保证加载顺序（比如上例的1.js要在2.js的前面），依赖性最大的模块一定要放到最后加载，当依赖关系很复杂的时候，代码的编写和维护都会变得困难。

require.js的出现解决这两个问题

1. 实现js文件的异步加载，避免网页失去响应；
1. 管理模块之间的依赖性，便于代码的编写和维护。

####　AMD模块的编写

```js
// 定义模块 math.js,假设依赖mylib
const math = define(['mylib'], function() {
  let add = (x, y) => {
    return x + y
  }
  return {
    add
  }
})

// 调用模块
require(['math'], (math) => {
  alert(math.add(1, 1))
})
```

### CMD

来自玉伯的sea.js(Common Module Definition)