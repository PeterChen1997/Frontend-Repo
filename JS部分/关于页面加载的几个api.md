# 关于页面加载的几个api

- DOMContentLoaded
- readystatechange
- load
- beforeunload
- unload

## DOMContentLoaded

在HTML文档被完全加载与解析后触发，不需要等待css，图片和subframe的完全加载，和只应用在检测页面是否完全加载的load事件不同

## load

当一个资源及其依赖资源已完成加载时，将触发load事件

## readystatechange

当页面的readystate属性发生变化，readystatechange事件会被触发

readystate可以是

- loading：仍在加载
- interactive：文档已经加载完毕，文档已被解析，但是诸如图像，样式表和框架之类的子资源仍在加载
- complete：文档和所有子资源已完成加载。状态表示 load 事件即将被触发

## beforeunload

当浏览器窗口关闭或者刷新时，会触发beforeunload事件。当前页面不会直接关闭，可以点击确定按钮关闭或刷新，也可以取消关闭或刷新。

如果处理函数为Event对象的returnValue属性赋值非空字符串，浏览器会弹出一个对话框，来询问用户是否确定要离开当前页面（如下示例）。有些浏览器会将返回的字符串展示在弹框里，但有些其他浏览器只展示它们自定义的信息。没有赋值时，该事件不做任何响应

## unload

当文档或一个子资源正在被卸载时, 触发 unload事件。

它在下面两个事件后被触发:

- beforeunload (可取消默认行为的事件)
- pagehide

文档会处于一个特定状态：

- 所有资源仍存在 (图片, iframe 等.)
- 对于终端用户所有资源均不可见
- 界面交互无效 (window.open, alert, confirm 等.)
- 错误不会停止卸载文档的过程
- 请注意unload事件也遵循文档树:父iframe会在子iframe卸载前卸载