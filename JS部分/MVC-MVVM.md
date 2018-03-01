# Topic

## MVC

View 响应用户交互，将特定事件传给 Controller

Controller 完成业务逻辑后，要求 Model 改变状态（改变 model 状态的方法，应该是 model 模块的内容，不要写进 controller）

Model 将新的数据发送到 View(当Model变更了以后，会通过观察者模式（Observer Pattern）通知View)，用户得到反馈

## MVVM

组成部分Model、View、ViewModel

View：UI界面

ViewModel：它是View的抽象，负责View与Model之间信息转换，将View的Command传送到Model；

Model：数据访问层