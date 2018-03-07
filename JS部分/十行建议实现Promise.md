```js
function Promise(){
  this.callbacks = []
}
Promise.prototype.then = function(fn){
  this.callbacks.push(fn)  //调用 then 时把函数放入数组
  return this              //返回当前对象供链式调用
}
Promise.prototype.resolve = function(data){
  var fn = this.callbacks.shift()  //当调用resolve时拿出一个函数
  fn&&fn(data)                     //执行这个函数，并且把resolve的参数做参数
}


var promise = new Promise()

promise.then(getCity)
    .then(getWeather)
    .then(getSuggestion)

promise.resolve()  //启动

function getCity(){
  setTimeout(function(){
    promise.resolve('杭州')
  }, 1000)
}
function getWeather(city){
  setTimeout(function(){
    promise.resolve(city + ' 晴天')
  }, 1000)
}
function getSuggestion(weather){
  setTimeout(function(){
    console.log(weather + ' 天气不错，可携女友与狗出行')
  }, 1000)
}
```
