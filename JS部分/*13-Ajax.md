# Ajax

## 原生实现

1. 创建XMLHttpRequest对象。
1. 设置响应HTTP请求状态变化的函数。
1. 创建一个新的HTTP请求,并指定该HTTP请求的方法、URL及验证信息，发送HTTP请求。
1. 在响应HTTP请求状态变化的函数里，获取异步调用返回的数据。
1. 最后，使用JavaScript 实现 DOM 局部刷新。

```js

var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4) {
        if(xmlhttp.status == 200){
            // do something
            console.log(xmlhttp.responseText);
        }
        else if(xmlhttp.status == 400) {
            alert('There was an error 400')
        }
        else {
            alert('something else other than 200 was returned')
        }
    }
}

xmlhttp.open("GET", "ajax_info.txt", true);
xmlhttp.send();

```

## readyState

- 0：未初始化。尚未调用open()方法
- 1：启动。已经调用open()方法，尚未调用send()方法
- 2：发送。已经调用send()方法，尚未接收到响应
- 3：接收。已经接收部分响应数据。
- 4：完成。已经接收到全部响应数据，而且已经可以在客户端使用了。【一般只需检查这个阶段】

## open
open()的第一个参数是HTTP请求方法

- 有GET，POST，HEAD以及服务器支持的其他方法。 保证这些方法一定要是大写字母，否则其他一些浏览器（比如FireFox）可能无法处理这个请求。
- 第二个参数是你要发送的URL。由于安全原因，默认不能调用第三方URL域名。 确保你在页面中使用的是正确的域名，否则在调用 open() 方法是会有 “权限被拒绝” 错误提示。一个容易犯的错误是你企图通过 domain.tld 访问网站， 而不是使用 www.domain.tld
- 第三个参数是可选的，用于设置请求是否是异步的。如果设为 true (默认设置)，JavaScript执行会持续，并且在服务器还没有响应的情况下与页面进行交互

## send

send() 方法的参数可以是任何你想发送给服务器的内容，如果是 POST 请求的话。发送表单数据时应该用服务器可以解析的格式，像查询语句：

```
"name=value&anothername="+encodeURIComponent(myVar)+"&so=on"
```