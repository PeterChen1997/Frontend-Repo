# Ajax

## 原生实现

```js

function Ajax(obj){
  //根据obj对method,data,url等进行初始化
};
Ajax.prototype.send = function(){
  var xhr = new XMLHttpRequest();//新建ajax请求，不兼容IE7以下
  xhr.onreadystatechange = function(){//注册回调函数
    if(xhr.readyState === 4)
      callback(xhr.responseText);
  }
  if(method === 'get'){//如果是get方法，需要把data中的数据转化作为url传递给服务器
    xhr.open(method,url,true);
    xhr.send(null);
  }else if(method === 'post'){//如果是post，需要在头中添加content-type说明
      xhr.open(method,url,true);
      xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
      xhr.send(JSON.stringify(data));//发送的数据需要转化成JSON格式
  }else {
    console.log('不识别的方法:'+method);
    return fasle;
  }
}

```
