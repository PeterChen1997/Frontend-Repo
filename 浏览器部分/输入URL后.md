# 浏览器输入URL后

## 输入URL后

- 浏览器接收用户输入
- 本地DNS(Domain Name System)->网站授权DNS->解析URL出IP(DNS -> .com -> baidu.com -> www.baidu.com)
- 通过socket发送数据
  - HTTP(TCP协议)

- 服务器通过Web Server对请求进行处理并返回结果

- 浏览器接收数据，gzip解压(如果存在gzip压缩)
- 根据编码解析数据
