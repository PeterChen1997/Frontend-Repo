# BFC 与 IFC

## BFC是什么

**块格式化上下文（Block Formatting Context，BFC）** 是Web页面的可视化CSS渲染的部分，是块级盒布局发生的区域，也是浮动元素与其他元素交互的区域。

## 如何创建BFC

- float 的值不为 none。
- overflow 的值不为 visible。
- position 的值不为 relative 和 static。
- display 的值为 table-cell, table-caption, inline-block中的任何一个。

## BFC的特性

### 1.同一个 BFC 下外边距会发生折叠

可以理解为一种规范，如果想要避免外边距的重叠，可以将其放在不同的 BFC 容器中。

### 2.BFC 可以包含浮动的元素（清除浮动）

```html
<!-- 这时，浮动DIV脱离了父DIV -->
<div style="border: 1px;">
  <div style="float: left; width: 100px; height: 100px;"></div>
</div>
<!-- 触发BFC，让父元素包含浮动元素 -->
<div style="border: 1px;overflow: hidden;">
  <div style="float: left; width: 100px; height: 100px;"></div>
</div>
```

### 3.BFC 可以阻止元素被浮动元素覆盖

原理同上，被覆盖的元素会成为新的BFC，不会被浮动元素覆盖，可用来实现两列布局

```html
<div class="gege" style="width: 100px;
  min-height: 600px;
  background:red;
  float: left;
  margin-right: 20px;">gege
</div>
<div class="didi" style="margin:20px;
  min-height: 600px;
  background: green;
  display: flow-root;">didi
</div>
```

## IFC

inline formatting context
