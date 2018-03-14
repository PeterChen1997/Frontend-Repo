```js
function uploadAndSubmit() { 
var form = document.forms["demoForm"]; 
    
if (form["file"].files.length > 0) { 
// 寻找表单域中的 <input type="file" ... /> 标签
var file = form["file"].files[0]; 
// try sending 
var reader = new FileReader(); 
 
reader.onloadstart = function() { 
// 这个事件在读取开始时触发
console.log("onloadstart"); 
document.getElementById("bytesTotal").textContent = file.size; 
} 
reader.onprogress = function(p) { 
// 这个事件在读取进行中定时触发
console.log("onprogress"); 
document.getElementById("bytesRead").textContent = p.loaded; 
} 
 
reader.onload = function() { 
   // 这个事件在读取成功结束后触发
console.log("load complete"); 
} 
 
reader.onloadend = function() { 
   // 这个事件在读取结束后，无论成功或者失败都会触发
if (reader.error) { 
console.log(reader.error); 
} else { 
document.getElementById("bytesRead").textContent = file.size; 
// 构造 XMLHttpRequest 对象，发送文件 Binary 数据
var xhr = new XMLHttpRequest(); 
xhr.open(/* method */ "POST", 
/* target url */ "upload.jsp?fileName=" + file.name 
/*, async, default to true */); 
xhr.overrideMimeType("application/octet-stream"); 
xhr.sendAsBinary(reader.result); 
xhr.onreadystatechange = function() { 
if (xhr.readyState == 4) { 
if (xhr.status == 200) { 
console.log("upload complete"); 
console.log("response: " + xhr.responseText); 
```
