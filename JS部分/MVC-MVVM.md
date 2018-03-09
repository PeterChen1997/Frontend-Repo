# Topic

## MVC

- View 负责渲染用户界面，应该避免在View中涉及业务逻辑
- Controller 负责接收用户输入，根据用户输入调用Model逻辑，将产生的结果交给View部分，让View渲染出必要的输出
- Model 负责管理数据，大部分业务逻辑也应该放在Model

**缺点：** 由于在实现的过程中，往往出现View与Model不经过Controller通信的现象，造成数据流混乱，难以维护和增加功能

![imgs](https://www.peterchen.club/imgs/MVCDisadvantage.png)

## MVVM

组成部分Model、View、ViewModel

建立了数据和视图之间的绑定，简化前端代码

- View：UI界面
- ViewModel：它是View的抽象，负责View与Model之间信息转换，将View的Command传送到Model；
- Model：数据访问层

![imgs](https://images2015.cnblogs.com/blog/1131758/201703/1131758-20170323093701283-975203660.png)

？不适合SEO？