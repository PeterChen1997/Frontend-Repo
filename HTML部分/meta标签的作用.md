# meta标签的作用

meta里的数据是供机器解读的，告诉机器该如何解析这个页面

还有一个用途是可以添加服务器发送到浏览器的http头部内容

## 实际用法

```html
<meta http-equiv="charset" content="iso-8859-1">
<meta http-equiv="expires" content="31 Dec 2008">
```

将会在浏览器头部添加这些

```
charset:iso-8859-1
expires:31 Dec 2008
```

## 常用meta

- charset: 声明文档使用的编码，通常为utf-8

### viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

可选参数：

- width viewport 宽度(数值/device-width)
- height viewport 高度(数值/device-height)
- initial-scale 初始缩放比例
- maximum-scale 最大缩放比例
- minimum-scale 最小缩放比例
- user-scalable 是否允许用户缩放(yes/no)