# Topic

## transition

![img](http://img.blog.csdn.net/20160722210815252)

```css
transiton: 过渡属性 过渡所需要时间 过渡动画函数 过渡延迟时间；
```

### 局限性

transition的优点在于简单易用，但是它有几个很大的局限。

1. transition需要事件触发，所以没法在网页加载时自动发生。
1. transition是一次性的，不能重复发生，除非一再触发。
1. transition只能定义开始状态和结束状态，不能定义中间状态，也就是说只有两个状态。
1. 一条transition规则，只能定义一个属性的变化，不能涉及多个属性。

## animation

ainimation实现动画效果主要由两部分组成：

1. 通过类似Flash动画中的帧来声明一个动画；
1. 在animation属性中调用关键帧声明的动画。

![img](http://img.blog.csdn.net/20160722171332901)

```css
div:hover {
  -webkit-animation: 1s changeColor;
  animation: 1s changeColor;
}

@keyframes changeColor {
  0% { background: #c00; }
  50% { background: orange; }
  100% { background: yellowgreen; }
}
```

上面代码中的0% 100%的百分号都不能省略，0%可以由from代替，100%可以由to代替。要让changeColor动画有效果，就必须要通过CSS3animation属性来调用它。

## 区别

transition需要触发一个事件才会随着时间改变其CSS属性；

animation在不需要触发任何事件的情况下，也可以显式的随时间变化来改变元素CSS属性，达到一种动画的效果