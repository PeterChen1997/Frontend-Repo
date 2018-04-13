# promise

## 什么是promise

Promise 对象用于表示一个异步操作的最终状态（完成或失败），以及其返回的值

## 为什么要使用promise

当有多个请求之间有相互依赖关系（紧接着的请求需要上一次请求的返回结果时，如果不用promise，常规做法只能callback层层嵌套，俗称callback hell

## 如何使用promise

例子

```js
var promise = new Promise(function(resolve, reject) {
    if (...) {  // succeed
        resolve(result);
    } else {   // fails
        reject(Error(errMessage));
    }
});
```

### Promise状态

![promise](https://mdn.mozillademos.org/files/8633/promises.png)

- pending: 初始状态, 非 resolved 或 rejected.
- resolved: 成功的操作.
- rejected: 失败的操作.
- settled: Promise已被fulfilled或rejected，且不是pending

### 理解Promise.all

Promise.all可以接受一个元素为Promise对象的数组作为参数，当这个数组里面所有的promise对象都变为resolve时，该方法才会返回。

```js
var promise1 = new Promise(function(resolve){
    setTimeout(function(){
        resolve(1);
    },3000);
});
var promise2 = new Promise(function(resolve){
    setTimeout(function(){
        resolve(2);
    },1000);
});
Promise.all([promise1,promise2]).then(function(value){
    console.log(value); // 打印[1,2]
});
```

## 如何实现简单的promise

```js
class Promsie {
    constructor() {
        this.callbacks = []
    }

    resolve(result) {
        this.complete('resolve', result)
    }

    reject(result){
      this.complete('reject', result)
    }

    complete(type, result) {
        if(type === 'reject' && this.oncatch) {
            this.callbacks = []
            this.oncatch(result)
        } else if(this.callbacks[0]) {
            let handleObj = this.callbacks.shift()
            if(handleObj[type]) {
                handleObj[type](result)
            }
        }
    }

    then(onsuccess, onfail) {
        this.callbacks.push({
            resolve: onsuccess,
            reject: onfail
        })
        return this
    }

    catch(onfail) {
        this.oncatch = onfail
        return this
    }
}

const promise = new Promise()
fn1().then(fn2, onfn1error)
       .then(fn3, onfn2error)
       .catch(onerror)

function fn1(){
    setTimeout(function(){
        if(Math.random() > 0.5){
            promise.resolve('杭州')
        }else{
            promise.reject('fn1 error')
        }
    })
    return promise
}
```