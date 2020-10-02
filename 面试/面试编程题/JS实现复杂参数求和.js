function sum(...arr) {
  // 过滤参数
  arr = arr.map(item => {
    if(!isNaN(Number(item)) && item !== true) {
      return Number(item)
    } else {
      return 0
    }
  })
  // 累加 可与上一步合并
  let sum = 0
  arr.forEach(item => {
    sum += item
  })
  // 判断输出结果是否位小数
  console.log( sum !== parseInt(sum) ? sum.toFixed(1) : sum)
}

sum(1,2,3,4,5) // 15

sum(5, null, -5) // 0

sum('1.0', false, 1, true, 1, 'A',1,'B', 1,'C',1,'D',1,'E', 1,'F',1,'G',1) // 10

sum(0.1, 0.2) // 0.3 not 0.3000000000004