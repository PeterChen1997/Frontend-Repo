# 03 - loaders

## 简介

webpack 只支持 js 和 json 两种文件类型，但是可以通过 loaders 去支持其他类型的文件，并转换为有效的模块，添加到依赖图中

本身是一个函数，接受文件作为参数，返回转后的结果

## 常见loaders

- babel-loader 支持语法转换
- css-loader 支持 css 文件解析
- less-loader 支持 less 文件解析
- ts-loader 支持 js 解析
- file-loader 进行图片、字体等文件的打包
- raw-loader 将文件以字符串形式导入
- thread-loader 多进程打包 js 和 css

## 用法

```js
module: {
    rules: [
        // test 指定匹配规则
        // use 指定使用的loader名称
        { test: /\.txt$/, use: 'raw-loader' }
    ]
}
```

