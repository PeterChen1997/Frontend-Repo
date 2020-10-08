# Vuex

## 概述

### 常见属性

> State、 Getter、Mutation 、Action、 Module

- state: state 定义了应用状态的数据结构，同样可以在这里设置默认的初始状态。代码样式
- actions: actions就是从服务器端获取数据，在数据获取完成后会调用store.commit()来调用更改 Store 中的状态
- mutations: 调用 mutations 是唯一允许更新应用状态的地方
- getters: Getters 允许组件从 Store 中获取数据，譬如我们可以从 Store 中的 projectList 中筛选出已完成的项目列表
- modules: modules允许将当个store拆分成多个store，每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块

## 常见问题

### Vuex 中 mutation 和 action 的区别

是一种默认规范

- action 可以进行异步操作
- mutation 必须是同步操作
- action支持载荷方式触发mutation
