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
- 元素坐标：element.getBoundingClientRect()

![img](https://mdn.mozillademos.org/files/15087/rect.png)

## 实现

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>图片懒加载</title>
  <style>
    img {
      height: 400px;
      width: 600px;
    }
  </style>
</head>
<body>
  <ul>
      <li><img data-src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=28885190,2415730730&fm=200&gp=0.jpg"></li>
      <li><img data-src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4107210306,3102159593&fm=200&gp=0.jpg"></li>
      <li><img data-src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=80887341,294354381&fm=200&gp=0.jpg"></li>
  </ul>

  <script>
    // 将图片src保存在data-src中
    let imgs = document.querySelectorAll('[data-src]')
    // 转换为数组，方便使用原生方法
    let imgsArr = [...imgs]

    // 设置函数节流，防止时间触发过快，影响dom渲染
    const throttle = 250
    // 设置图片开始加载时的距离
    const offset = 0
    // 计时器ID
    let timer

    // 节流函数
    const _throttle = () => {
      clearTimeout(timer)
      timer = setTimeout(_pollImg, throttle)
    }

    // 实现懒加载函数
    const _pollImg = () => {
      imgsArr.forEach((img, index) => {
        if(_inView(img)) {
          img.src = img.getAttribute('data-src')
          imgsArr.slice(index, 1)
        }
      })
    }

    // 判断是否在可加载区域
    const _inView = (img) => {
      let coords = img.getBoundingClientRect()
      // 此处只判断竖向滚动
      return (coords.top >= 0 && coords.left >= 0 && coords.top) <= window.innerHeight + parseInt(offset)
    }

    // 开始执行
    _throttle()
    // 增加触发条件
    if(document.addEventListener) {
      window.addEventListener('scroll', _throttle)
    } else {
      window.attachEvent('onscroll', _throttle)
    }

  </script>
</body>
</html>
```