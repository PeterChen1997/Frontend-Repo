# vue-router

## 前端路由原理

前端路由实现起来其实很简单，本质就是监听 URL 的变化，然后匹配路由规则，显示相应的页面，并且无须刷新。目前单页面使用的路由就只有两种实现方式

- hash模式 - hashchange
- history模式 - popstate

### Hash模式

触发方式：

- 点击跳转 / 浏览器历史跳转
    - 触发hashchange事件 
    - 匹配路由规则进行跳转
- 手动刷新url 
    - 发送服务器请求， 但是也不会触发hashchange事件，可通过load事件
    - 匹配路由规则进行跳转

### History模式

- 浏览器动作
    - 触发popstate
    - 包括调用history.back()
- 浏览器跳转
    - 调用pushState
- 手动刷新url
    - 需要后端配合重定向

## 路由注册

对于路由注册来说，核心就是调用 Vue.use(VueRouter)使得 VueRouter 可以使用 Vue。

然后通过 Vue 来调用 VueRouter 的 install 函数。

在该函数中，核心就是给组件 **混入钩子函数**和 **全局注册两个路由组件**
