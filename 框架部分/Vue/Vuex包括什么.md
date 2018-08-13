# Vuex

## vuex是什么

vue框架中状态管理工具

![imgs](https://upload-images.jianshu.io/upload_images/6271831-2aa1adfb7c94b555.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/700)

## vuex有哪几种属性

State、 Getter、Mutation 、Action、 Module

- state：state 定义了应用状态的数据结构，同样可以在这里设置默认的初始状态。代码样式
- actions：Actions就是从服务器端获取数据，在数据获取完成后会调用store.commit()来调用更改 Store 中的状态
- mutations: 调用 mutations 是唯一允许更新应用状态的地方，代码如下：
- getters: Getters 允许组件从 Store 中获取数据，譬如我们可以从 Store 中的 projectList 中筛选出已完成的项目列表
- modules: modules允许将当个store拆分成多个store，每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块