# plugin - loader

## loader

对于loader，它就是一个转换器，将A文件进行编译形成B文件，这里操作的是文件，比如将A.scss或A.less转变为B.css，单纯的文件转换过程

![imgs](http://7xt6po.com1.z0.glb.clouddn.com/loader%E7%89%B9%E6%80%A7-1.png)

```js
module.exports = {
  module: {
    rules: [
      {test: /\.css$/, use: 'css-loader'},
      {test: /\.ts$/, use: 'ts-loader'}
    ]
  }
};
```

## plugin

对于plugin，它就是一个扩展器，它丰富了wepack本身，针对是loader结束后，webpack打包的整个过程，它并不直接操作文件，而是基于事件机制工作，会监听webpack打包过程中的某些节点，例如

- run：开始编译
- make：从entry开始递归分析依赖并对依赖进行build
- build-moodule：使用loader加载文件并build模块
- normal-module-loader：对loader加载的文件用acorn编译，生成抽象语法树AST
- program：开始对AST进行遍历，当遇到require时触发call require事件
- seal：所有依赖build完成，开始对chunk进行优化（抽取公共模块、加hash等）
- optimize-chunk-assets：压缩代码
- emit：把各个chunk输出到结果文件

通过对节点的监听，从而找到合适的节点对文件做适当的处理