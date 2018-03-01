# 浏览器小知识点

## DOM操作优化

- 减少DOM访问次数
- 多次访问同一DOM，应该用局部变量缓存该DOM
- 尽可能使用querySelector，而不是使用获取HTML集合的API
- 注意重排和重绘
- 使用事件委托，减少绑定事件的数量

---

## 重排 重绘

- 重排：重新排列DOM元素
- 重绘：重新绘制某一个DOM元素

### 影响页面重绘的操作

改变 width height、offset、visibility、outline、背景色值

重绘不一定重排

### 触发重排的操作

1. DOM元素的几何属性变化
2. DOM树结构变化
3. 获取某些属性（offsetTop...)(省略优化，直接重排）