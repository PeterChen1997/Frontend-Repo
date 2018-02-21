
const year = 2018

const date = new Date(`${year}-01-01`)
console.log(date)
const weekDay=new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六")
console.log(weekDay[date.getDay()])