# Topic

<!-- TOC -->

- [Topic](#topic)
  - [transition](#transition)
    - [transition-property](#transition-property)
    - [transition-duration](#transition-duration)
    - [transition-timing-function](#transition-timing-function)
    - [transition-delay](#transition-delay)
    - [局限性](#局限性)
  - [animation](#animation)
  - [区别](#区别)

<!-- /TOC -->

## transition

![img](http://img.blog.csdn.net/20160722210815252)

```css
transiton: transition-property(过渡属性) transition-duration(过渡所需要时间) transition-timing-function(过渡动画函数) transition-delay(过渡延迟时间)；
```

### transition-property

| 值| 描述 |
|--|--|
|none|没有属性会获得过渡效果。|
|all|所有属性都将获得过渡效果。|
|property|定义应用过渡效果的 CSS 属性名称列表，列表以逗号分隔。|

### transition-duration

transition-duration: time (单位为s或者ms)

### transition-timing-function

| 值 |描述|
|--|--|
| linear |  规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）。|
| ease | 规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)）。|
| ease-in | 规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）。|
| ease-out | 规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）。|
| ease-in-out | 规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）。|
| cubic-bezier(n,n,n,n) | 在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值。|

### transition-delay

transition-delay: time (单位为s或者ms)

---

### 局限性

transition的优点在于简单易用，但是它有几个很大的局限。

1. transition需要事件触发，所以没法在网页加载时自动发生。
1. transition是一次性的，不能重复发生，除非一再触发。
1. transition只能定义开始状态和结束状态， **不能定义中间状态** ，也就是说只有两个状态。
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