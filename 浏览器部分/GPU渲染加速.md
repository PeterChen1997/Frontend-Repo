# GPU渲染加速

GPU渲染加速，也称为硬件加速，通过gpu运算性能，加快dom元素的位置计算速度，旨在提升60FPS的流畅体验

在执行以下任务时，会出发GPU加速

- css3 transition
- css3 translate3D
- canvas
- webgl

在使用gpu加速时，页面会新建一个复合层用于渲染该元素，注意设置index，否则容易将同层元素放入同一个层，多次渲染