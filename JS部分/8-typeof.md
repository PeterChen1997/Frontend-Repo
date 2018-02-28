# typeof 详解

## typeof定义

**typeof** 操作符返回一个字符串，指出未经计算的操作数的类型

| 类型 | 结果 |
| -- | -- |
| Undefined | "undefined" |
| Null | **"object"** |
| Boolean | "boolean" |
| Number | "number" |
| String | "string" |
| Symbol | "symbol" |
| 函数对象 | "function" |
| 任何其他对象 | "object" |

---

### 实例

```js
typeof NaN === "number" // true
typeof (typeof 1) === "string" // true, typeof总是返回一个字符串
// Undefined
typeof undefined === 'undefined';
typeof declaredButUndefinedVariable === 'undefined';
typeof undeclaredVariable === 'undefined';

typeof new String("abc") === 'object';

// 函数
typeof function(){} === 'function';
typeof class C{} === 'function'
typeof Math.sin === 'function';
typeof new Function() === 'function';
```

---

### null

```js
typeof null === 'object'
```

这是JS出现就有的BUG

> JS中的值是由一个表示类型的标签和实际的数据值表示的。对象的类型标签是0，由于null代表的是空指针（大多数平台下值为0x00），因此，null的类型标签也成为了0

### new 操作符号

```js
let str = new String('str')
typeof str // 'object'

let func = new Function()
typeof func // 'function'
```

### 例外

```js
typeof document.all === 'undefined'
```

### typeof 和 instanceof 的区别

> 用法：object instanceof constructor
> 解释：instanceof 运算符用来检测 constructor.prototype 是否存在于参数 object 的原型链上。，如果A是B的实例，则返回true,否则返回false。 instanceof检测的是原型,下面是模拟内部执行过程

```js
function instanceof (A,B) = {
  return Object.getPrototypeOf(A) === B.prototype}
}
```

两者都可以用来判断变量，tyoeof会返回基本类型，instanceof只会返回一个bool值

---

下面是instanceof的一个知识点

```js
// 注意
let str = "string"
console.log(str instanceof String) // false,查找不到原型
```

出现这个问题的原因是，str是String数据类型的值，但并不是String的实例对象

---

## 例题

### 如何判断这个变量是数组

因为typeof [] / {} 返回都是object，所以需要判断

```js
// 原型方法
Array.prototype.isPrototypeOf(s) // []:true, {}:false
// 构造函数
s instanceof Array // true
// 根据toString方法检查类属性名
Object.prototype.toString.call([]) // [object Array]
// Array原生方法
Array.isArray([]) // true

```

### 如何判断对象为字符串

```js
const str = 'good'

typeof str === 'string'
Object.prototype.toString.call(str)

// 注意不能使用instanceof
str instanceof string // false,因为str是string数据类型,但不是String的实例对象
```