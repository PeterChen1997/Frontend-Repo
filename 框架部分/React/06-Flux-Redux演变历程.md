# Flux-Redux演变历程

<!-- TOC -->

- [Flux-Redux演变历程](#flux-redux演变历程)
  - [Flux](#flux)
    - [优点](#优点)
    - [缺点](#缺点)
  - [Redux](#redux)

<!-- /TOC -->

## 解决的问题

如何更好地管理整个应用共享的数据，解决了组件层级过深时层层传递数据的尴尬局面

## Flux

![imgs](https://www.peterchen.club/imgs/flux.png)

### 优点

解决了MVC模式带来的数据流混乱问题,使用单项数据流

### 缺点

- 多个store之间的依赖问题
- 难以进行服务器渲染（多个store状态不唯一）
- store混杂了逻辑和状态

## Redux

Redux = Reducer + flux

在单项数据流的基础上强调三个原则

- 唯一数据源 （单一store）
- 保持状态只读 （通过返回新对象改变状态）
- 数据改变只能通过纯函数完成 （state, action）=> {...state, [prop]: [preValue] + 1}
