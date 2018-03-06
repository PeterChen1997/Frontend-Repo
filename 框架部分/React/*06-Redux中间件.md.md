### 为什么要使用中间件

Redux 的基本做法：用户发出 Action，Reducer 函数算出新的 State，View 重新渲染。那异步操作怎么办？Action 发出以后，Reducer 立即算出 State，这叫做同步；Action 发出以后，过一段时间再执行 Reducer，这就是异步。
怎么才能 Reducer 在异步操作结束后自动执行呢？这就要用到新的工具：中间件（middleware）.中间件处理的是 `action` 对象

### 中间件特点

* 中间件是个独立的函数
* 中间件可以独立使用
* 中间件有一个统一的接口


一个什么都不做的中间件代码如下
```js
const loggerMiddleware = store => next => action => {
  console.log('dispatching: ', action);
  next(action);
}

```
