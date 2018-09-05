# JS中的作用域

## 作用域是啥

作用域是指`程序源代码`中 **定义变量的区域**

作用域规定了如何 **查找变量**，也就是确定当前执行代码对变量的 **访问权限**。

## 动态作用域与静态作用域

在JS中，函数采用的是静态作用域，指的即是，**当函数定义时，函数的作用域就确定了**

而与之相对的是动态作用域，即函数的作用域是在调用时才决定

```js
let money = 10

function foo() {
    console.log(money)
}

function bar() {
    let money = 20
    foo()
}

bar() // 10
```

### 静态作用域 / 词法作用域

在JS内，答案是10，变量查找的方向是这样的：

- 首先查找foo()函数内部是否存在变量money
- 不存在则向代码的上次层查找money，发现全局变量money，返回10

### 动态作用域

如果采用动态作用域，变量查找的方向是这样的：

- 首先查找foo()函数内部是否存在变量money
- 不存在则向 **调用函数的作用域** 进行变量查找，返回2

如bash，采用的就是动态作用域

## DEMO

```js
// demo1
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f();
}
checkscope(); // "local scope"

// demo2
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
checkscope()(); // local scope
```

JavaScript 函数的执行用到了作用域链，这个作用域链是在函数定义的时候创建的。嵌套的函数 f() 定义在这个作用域链里，其中的变量 scope 一定是局部变量，不管何时何地执行函数 f()，这种绑定在执行 f() 时依然有效。

## 参考文章

- [JavaScript深入之词法作用域和动态作用域](https://github.com/mqyqingfeng/Blog/issues/3)
