# React-Router

在react-router 4.0版本中，API与先前版本相比有了很大的修改，在2.0、3.0中常用的<Router>组件作为路由底层配置组件不再常用，取而代之的是四个各有不同的路由组件：

> BrowserRouter>, HashRouter>, MemoryRouter>, StaticRouter>

## MemoryRouter>

组件在内存中保存“URL”信息，不会修改浏览器的地址栏，往往用于React Native或测试环境等非浏览器环境

## StaticRouter>

组件从名字能看出它从不修改路由，这在服务器端渲染时很有用

## BrowserRouter> 与 HashRouter>

前者：http://127.0.0.1:3000/article/num1

后者：http://127.0.0.1:3000/#/article/num1 （不一定是这样，但#是少不了的）

这样的区别带来的直接问题就是，如果我们处于二级或者多级路由状态时，刷新页面，BrowserRouer会将当前路由发送到服务器，而HashRouter不会（#hash段）