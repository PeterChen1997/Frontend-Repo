# JS的链式调用

## JQuery中 return this

```js
function Item(num) {
    this.value = num || 0
    this.add = function (addNum) {
        this.value += addNum
        return this
    }
    this.sub = function (subNum) {
        this.value -= subNum
        return this
    }
    this.valueOf = function () {
        console.log('valueOf')
        return this.value
    }
    this.toString = function () {
        console.log('toString')
        return this.value + ''
    }


}

let a = new Item(123)
alert(a.add(1).sub(2))
```

## underscore 中的chain

