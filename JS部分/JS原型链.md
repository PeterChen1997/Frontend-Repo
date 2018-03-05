# JS原型链

## 定义

### 原型链顶端

```js
let a = new Function()
a.__proto__ // function
a.__proto__.__proto__ // object
a.__proto__.__proto__.__proto__ // null
```