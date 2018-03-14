# HTTP请求方法及其比较

<!-- TOC -->

- [HTTP请求方法及其比较](#http请求方法及其比较)
- [Get与Post](#get与post)
  - [get和post的区别](#get和post的区别)
  - [Post如何上传文件](#post如何上传文件)

<!-- /TOC -->
## 请求方法包括

OPTIONS, GET, POST, HEAD, DELETE, TRACE和 Connect

## Get与Post

### get和post的区别

- get请求一般用于向服务器查询某些信息, post请求通常用于向服务器发送应该被保存的数据. 即: get是从服务器上获取数据，post是向服务器传送数据
- get请求可以将查询字符串参数追加到url的末尾，有长度限制; post请求应该把数据作为请求的主体提交. 其请求主体可以包含非常多的数据, 而且格式不限
- 因为get请求提交的数据直接加载url末尾,所以其大小有限制; 理论来讲, post是没有大小限制的
- post安全性比get要高(post方法请求是封装在http消息包体中)
- 对于get方式, 服务器端用Request.QueryString获取变量的值
- 对于post方式, 服务器端用Request.Form获取提交的数据

&|get|post
---|---|----
后退/刷新|无害|请求重新提交
书签|可做书签|不可做
缓存|可被缓存|不能被缓存
历史|保留在浏览器记录里|不保留
对数据长度限制|限制（2048字符）|不限制
安全性|url中暴露数据|相对安全
可见性|url中可见|不可见

### Post如何上传文件

enctype=”multipart/form-data”