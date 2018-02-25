# BFC 与 IFC

## BFC是什么

**块格式化上下文（Block Formatting Context，BFC）** 是Web页面的可视化CSS渲染的部分，是块级盒布局发生的区域，也是浮动元素与其他元素交互的区域。

## 如何创建BFC

- 根元素或其它包含它的元素
- 浮动元素 (元素的 float 不是 none)
- 绝对定位元素 (元素的 position 为 absolute 或 fixed)
- 内联块元素 (元素具有 display: inline-block)
- 表格单元格 (元素具有 display: table-cell，HTML表格单元格默认属性)
- 表格标题 (元素具有 display: table-caption, HTML表格标题默认属性)
- overflow 值不为 visible 的块元素(hidden、auto、scroll)
- 弹性元素 (display: flex 或 inline-flex元素的子元素)
- 网格元素 (display: grid 或 inline-grid 元素的子元素)

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
