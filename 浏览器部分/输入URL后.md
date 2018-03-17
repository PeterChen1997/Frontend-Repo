# 浏览器输入URL后

## 输入URL后

- 浏览器接收用户输入
- 本地DNS(Domain Name System)->网站授权DNS->解析URL出IP(DNS -> .com -> baidu.com -> www.baidu.com)
- 浏览器与服务器建立TCP连接（默认端口80）(详细点可以说下三次握手的过程)
- 服务器通过Web Server对请求进行处理并返回结果
- 浏览器接收数据，gzip解压(如果存在gzip压缩)
- tcp连接释放
- 根据编码解析数据

![](http://onb5ufwvw.bkt.clouddn.com/18-3-14/74320453.jpg)
