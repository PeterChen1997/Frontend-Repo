# webpack

## 什么是webpack

GitHub官方的定义如下

> A bundler for javascript and friends. Packs many modules into a few bundled assets. Code Splitting allows to load parts for the application on demand. Through "loaders," modules can be CommonJs, AMD, ES6 modules, CSS, Images, JSON, Coffeescript, LESS, ... and your custom stuff.

**画个重点**：Webpack是一个JS打包工具

有如下特点：

- 打包众多组件为一些打包好的资源(js, css...)
- 使用代码拆分，提供按需加载应用程序的组件
- loaders能让你的app使用各种格式和风格的代码和文件

总结为`一句话`: The main purpose is to bundle JavaScript files for usage **in a browser**

## 为什么要使用webpack

看到这里就要问问自己，为什么我们`要用`到这个工具，这个工具的出现，为前端发展做出了什么`贡献`

### 环境所趋

随着web技术的迅猛发展，前端开发人员所要涉猎的开发领域也**越来越广**

需求也从简单的css,js,html展示页面，到功能与性能并需的大型后台管理页面。运行环境也从电脑浏览器端到移动端慢慢扩展，例如微信小程序与ReactNative等的原生应用开发

其次，由于JS语言本身标准制定太慢，原生api不足以简单的完成如此**复杂**的工作任务，所以出现了框架，对底层api进行逻辑层面的封装，如jQuery。但是,随着web发展的越来越复杂,项目对**可维护性与高性能**的需求越来越高，出现了在算法与逻辑层面对底层api进行封装的框架，如React,Vue,Angular

出于**可维护性**的考虑，对文件的组织形式也慢慢的由单文件，向模块化发展，避免了JS语言特性导致的程序过于复杂与冗余的缺点。例如React提供的JSX,Vue的模板语法等

但是框架中使用的语法并未得到JS官方标准的支持，所以我们需要使用webpack来帮忙"编译"我们的文件，来让它成功的运行在浏览器环境中

这还只是JS部分，还有CSS部分的SCSS,LESS...

### 提高生产力

有的同学就会说，那我不用这些高级抽象过的框架，老夫jQuery上去就是干...

如果这是小项目，当然是可以的，毕竟工具的出现是为了解决更加复杂的业务场景的。但是如果是于大型项目，使用框架带来的高可维护性和高性能是更加重要的。并且在开发过程中，模块化的开发逻辑能够更加合理的安排人员分配，并能够较好的进行项目所需日期的推测，对于开发组来说逻辑更加清晰，也能减少BUG的出现

那有同学又会说了，那我用框架，但是不用JSX，不就行了...

JSX是React推荐的一种语法糖，能够更加简洁的展示组件的渲染内容，带来的好处很明显的利大于弊的，下面就是个例子，很明显的

```js
// 使用jsx
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
// 不使用JSX
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

还有webpack提供的热更新等，都能很明显的提升我们的开发效率

## 如何使用webpack

那么webpack这么厉害，想不想学233

### 配置

下面以ES6转ES5为例，为大家介绍一下配置过程

#### 安装webpack v4

```bash
mkdir demo && cd demo
npm init -y

yarn add webpack webpack-cli
```

#### 配置与JS转换相关的loader

```bash
# 配置babel
yarn add babel-preset-env
# 配置babel相关loader
yarn add babel-core babel-loader
# 配置babel配置文件.babelrc
touch .babelrc
# {
#   "preset": [
#     "es2015"
#   ]
# }
```

下面来介绍下，上面安装的是什么东西

首先，**babel**是一种JS版本转换工具,babel-loader是webpack调用babel的工具，.babelrc内容为babel的配置内容，与webpack.config.js类似

**.babelrc**中的presets 属性告诉 Babel 要转换的源码使用了哪些新的语法特性，一个 Presets 对一组新语法特性提供支持，多个 Presets 可以叠加。 Presets 其实是一组 Plugins 的集合，每一个 Plugin 完成一个新语法的转换工作。Presets 是按照 ECMAScript 草案来组织的，通常可以分为以下三大类

- env(es2015 es2016 es2017)
- stage(未被写入es标准中的)
- react(特定应用场景下的语法)

#### 编辑webpack配置文件

下面是webpack.config.js的文件内容

```js
const path = require('path')

module.exports = {
  // 执行入口文件
  entry: './index',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
    ]
  },
  // 输出 source-map 方便直接调试 ES6 源码
  devtool: 'source-map'
};
```

入口文件

```js
[1,2,3].map(n => n + 1)
```

#### 运行webpack

运行webpack，即可在/dist内发现打包好的js文件，最简单的webpack的配置就完成了hhh

但是这只是开始，webpack最核心的是优秀的代码拆分和按需加载的功能，这需要我们继续学习了hhh

### 工作原理

Webpack 的构建流程可以分为以下三大阶段：

- 初始化：启动构建，读取与合并配置参数，加载 Plugin，实例化 Compiler
- 编译：从 Entry 发出，针对每个 Module 串行调用对应的 Loader 去翻译文件内容，再找到该 Module 依赖的 Module，递归地进行编译处理
- 输出：对编译后的 Module 组合成 Chunk，把 Chunk 转换成文件，输出到文件系统

如果只执行一次构建，以上阶段将会按照顺序各执行一次。但在开启监听模式下，流程将变为如下：

![imgs](https://www.peterchen.club/imgs/webpack.png)

## 附录

### 学习资料

[webpack中文网](https://www.webpackjs.com/concepts/)
[《深入浅出webpack》](http://webpack.wuhaolin.cn/)

### 常用插件

[常用loaders](http://webpack.wuhaolin.cn/%E9%99%84%E5%BD%95/%E5%B8%B8%E7%94%A8Loaders.html)

[常用plugins](http://webpack.wuhaolin.cn/%E9%99%84%E5%BD%95/%E5%B8%B8%E7%94%A8Plugins.html)

---

## 待填坑

- gulp和webpack的区别 和 fis的区别
- 他们工作原理的区别(模块与流)
- webpack实现路由懒加载
- 你还知道那些打包工具
- 前端工程化的意义
- webpack如何提取公共模块
- webpack如何处理es6语法(babel)，如何处理react
- 单页面，多页面配置
- 刷新原理
- 如何使用webpack优化前端开发 




