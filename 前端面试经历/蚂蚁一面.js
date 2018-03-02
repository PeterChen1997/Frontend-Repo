// 1.Please write a function to reverse a string by word, DO NOT reverse method of Array!!

const reverseSingleWord = (array) => {
  let length = array.length
  let newArr = new Array()
  for(let i = length - 1; i >= 0; i--) {
    newArr.push(array[i])
  }
  return newArr
}

const reverseByWord = (str) => {
  return reverseSingleWord(str.split(' ')).join(' ')
}

console.log(reverseByWord('Hello my world'))

// 2.Please write a add fucntion

function add(n) {
  // m代表接收的下一个参数
  let fn = function(m) {
    return add(n + m)
  }
  // valueOf 在 算术运算时生效如 +add(2)(3)
  fn.valueOf = function() {
    return n
  }
  // toString 在 转换为字符串时调用 add(2)(3)
  fn.toString = function() {
    return '' + n
  }
  return fn
}

let result = '' + add(2)(3)
console.log(result) // print 5
console.log(add(2)(3)(7)) // print 12