# Ajax

## 原生实现

```js
let xhr
if(window.XMLHttpRequest) {
  // code for IE7+, Firefox, Chrome, Opera, Safari
  xhr = new XMLHttpRequest()
} else {
  // code for IE6, IE5
  xhr = new ActiveXObject('Microsoft.XMLHTTP')
}
```