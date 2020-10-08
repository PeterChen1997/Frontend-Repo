# form

## form表单参数

- accept-charset:一个空格分隔或逗号分隔的列表，这个列表包括了服务器支持的字符编码
- action:一个处理这个form信息的程序所在的URL
- autocomplete:用于指示 input 元素是否能够拥有一个默认值，这个默认值是由浏览器自动补全的

### enctype

当 method 属性值为 post 时, enctype 是提交form给服务器的内容的 MIME 类型.

可能的取值有:

- application/x-www-form-urlencoded: 如果属性未指定时的默认值。
- multipart/form-data: 这个值用于一个 type 属性设置为 "file" 的 \<input> 元素。
- text/plain (HTML5)
- name:这个form的名字。在HTML4中，这个用法不被推荐(作为替代，应该使用id). HTML5中，一个文档中的多个form当中，name必须唯一而不仅仅是一个空字符串

## method

浏览器使用这种 HTTP 方式来提交 form. 可能的值有:

- post: 指的是 HTTP POST 方法 ; 表单数据会包含在表单体内然后发送给服务器.
- get: 指的是 HTTP GET 方法; 表单数据会附加在 action 属性的URI中，并以 '?' 作为分隔符, 然后这样得到的 URI 再发送给服务器. 当这样做（数据暴露在URI里面）没什么副作用，或者表单仅包含ASCII字符时，再使用这种方法吧

## target

一个名字或者说关键字，用来指示在提交表单之后，在哪里显示收到的回复.

- _self: 在当前HTML4或HTML5文档页面重新加载返回值。这个是默认值。译注：也就是说如果这个文档在一个frame中的话，self是在当前frame（document）中重新加载的，而不是整个页面（window）。
- _blank: 以新的HTML4或HTML5文档窗口加载返回值。
- _parent: 在父级的frame中以HTML4或HTML5文档形式加载返回值，如果没有父级的frame，行为和_self一致。
- _top: 如果是HTML 4文档: 清空当前文档，加载返回内容；HTML5: 在当前文档的最高级内加载返回值，如果没有父级，和_self的行为一致。
- iframename: 返回值在指定frame中加载
