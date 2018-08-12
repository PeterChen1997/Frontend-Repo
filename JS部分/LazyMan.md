实现一个LazyMan，可以按照以下方式调用：

LazyMan(“Hank”)

输出：Hi! This is Hank!

LazyMan(“Hank”).sleep(10).eat(“dinner”)

输出: Hi! This is Hank!

等待10秒..

Wake up after 10

Eat dinner~

LazyMan(“Hank”).eat(“dinner”).eat(“supper”)

输出：Hi This is Hank!

Eat dinner~

Eat supper~

LazyMan(“Hank”).sleepFirst(5).eat(“supper”)

输出：等待5秒

Wake up after 5

Hi This is Hank!

Eat supper


```js
function _LazyMan(name) {
    this.queue = []
    this.name = name
    var fn = (function (that) {
        return function () {
            console.log(`Hi! This is ${name}!`)
            that.next()
        }
    })(this)
    this.queue.push(fn)
    // 下一个事件循环执行
    setTimeout(this.next.bind(this), 0)
}
// 实现事件循环,在某个事件完成时重新调用 next 方法
_LazyMan.prototype.next = function () {
    var fn = this.queue.shift()
    fn && fn()
}
_LazyMan.prototype.sleep = function (time) {
    var fn = (function (that) {
        return function () {
            setTimeout(() => {
                console.log(`Wake up after ${time}`)
                that.next()
            }, time * 1000)
        }
    })(this)
    this.queue.push(fn)
    // 链式调用
    return this
}
_LazyMan.prototype.eat = function (food) {
    var fn = (function (that) {
        return function () {
            console.log(`Eat ${food}~`)
            that.next()
        }
    })(this)
    this.queue.push(fn)
    return this
}
_LazyMan.prototype.sleepFirst = function (time) {
    var fn = (function (that) {
        setTimeout(function () {
            console.log(`Wake up after ${time}`)
            that.next()
        }, time * 1000)
    })(this)
    this.queue.unshift(fn)
    return this
}
var LazyMan = function (name) {
    return new _LazyMan(name)
}
LazyMan('Hank1').sleep(10).eat('dinner')
```
