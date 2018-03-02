# JS深浅拷贝

**深拷贝：** 是JS中相对于Array, Object这类复杂对象，浅复制在这类复杂对象中只会赋值一层对象的属性，深拷贝则会递归的复制所有层级

## 深拷贝的两种实现

### 循环递归实现

```js
var a = {
    name:"mary",
    age:20,
    friend:{
        name:"哈哈",
        age:19,
        hobby:"eat"
    }
}
function deep(obj){
    var newobj = {};
    for(var key in obj){
        // 此处遍历的key包括了实例对象和它原型的属性，所以要用hasOwnProperty进行筛选(node环境不会，浏览器环境会列举原型属性)
        if(obj.hasOwnProperty(key)){
            // 如果是基本类型则进行复制
            if(typeof obj[key] === "number" || typeof obj[key] === "string" || typeof obj[key] === "boolean" || obj[key] === undefined || obj[key] === null){
                newobj[key] = obj[key];
            // 如果不是则为array或者object,仍然需要深层次的递归复制
            }else{
                newobj[key] = deep(obj[key]);
            }
        }
    }
    return newobj;
}
```

### JSON转化实现

```js
var obj = {
    name : "haha",
    age :"16",
    hobby : "football"
}
var text = JSON.stringify(obj);            //得到一个字符串
JSON.parse(text);                   //重新将字符串生成一个对象，和原来的没有任何关系
```

---

## 浅拷贝

### 对象字面量扩展实现

```js
const deepClone = (obj) => ({
    __proto__:Object.getPrototypeOf(obj),
    ...obj
})
```

### 最简单的实现

```js
function shallowClone(copyObj) {
  var obj = {};
  for ( var i in copyObj) {
    obj[i] = copyObj[i];
  }
  return obj;
}
var x = {
  a: 1,
  b: { f: { g: 1 } },
  c: [ 1, 2, 3 ]
};
var y = shallowClone(x);
console.log(y.b.f === x.b.f);     // true
```

```js

var x = {
  a: 1,
  b: { f: { g: 1 } },
  c: [ 1, 2, 3 ]
};
var y = Object.assign({}, x);
console.log(y.b.f === x.b.f);     // true

```

## 在框架中的深浅复制

### underscore

```js
_.clone = function(obj) {
    if(!_.isObject(obj)) return obj;
    return _.isArray ? obj.slice() : _.extend({}, obj)
}
```

我们可以看出，在判断完obj不为复杂对象后，我们直接返回值即可，不需要深复制

如果不为简单对象，这个时候我们将判断其是否为数组，然后返回数组的slice结果，否则返回Object.assign({}, obj)

我们可以看出，在underscore中，clone不是深复制

### jQery

```js
$.extend({}, x)  // shallow copy
$.extend(true, {}, x) // deep copy

```