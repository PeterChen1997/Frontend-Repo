### 立即执行函数写法

```js
var module1 = (function(){

　　　　var _count = 0;

　　　　var m1 = function(){
　　　　　　//...
　　　　};

　　　　var m2 = function(){
　　　　　　//...
　　　　};

　　　　return {
　　　　　　m1 : m1,
　　　　　　m2 : m2
　　　　};

　　})();
```

### 放大模式
#### 如果一个模块很大，必须分成几个部分，或者一个模块需要继承另一个模块，这时就有必要采用"放大模式"（augmentation）。下面的代码为module1模块添加了一个新方法m3()，然后返回新的module1模块。

```js
var module1 = (function (mod){

　　　　mod.m3 = function () {
　　　　　　//...
　　　　};

　　　　return mod;

　　})(module1);
```
### 宽放大模式（Loose augmentation）
```js
var module1 = ( function (mod){

　　　　//...

　　　　return mod;

　　})(window.module1 || {}); /*在浏览器环境中，模块的各个部分通常都是从网上获取的，有时无法知道哪个部分会先加载。
                             如果采用上一节的写法，第一个执行的部分有可能加载一个不存在空对象，这时就要采用"宽放大模式"。
                             与"放大模式"相比，＂宽放大模式＂就是"立即执行函数"的参数可以是空对象*/
```
### 输入全局变量
#### 独立性是模块的重要特点，模块内部最好不与程序的其他部分直接交互。为了在模块内部调用全局变量，必须显式地将其他变量输入模块。

```js
　var module1 = (function ($, YAHOO) {

　　　　//...

　　})(jQuery, YAHOO);

```
