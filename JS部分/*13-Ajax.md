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