# 图片懒加载

懒加载的出现是为了加快页面渲染速度，减少带宽的浪费，也就是常说的首屏加载

## 思路

当图片到达可视区域时在开始加载

## 知识点

- 内容可视区域clientHeight=padding+height-横向滚动轴高度
- 内容可视总高度offsetHeight=padding+height+border+横向滚动轴高度
- 内容总高度scrollHeight(将滚动框拉直，到不再滚动的高度)
- 屏幕分辨率的高： window.screen.height
- 屏幕分辨率的宽： window.screen.width
- 浏览器左上角与屏幕左上角y坐标：window.screenTop
- 浏览器左上角与屏幕左上角x坐标：window.screenLeft

