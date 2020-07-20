// 题目描述：返回第一个不重复的字符

//Init module if you need
let result

function Init()
{
    result = {}
}
//Insert one char from stringstream
function Insert(ch)
{
    if(!result[ch]) {
      result[ch] = 1
    } else {
      result[ch]++
    }
}
//return the first appearence once char in current stringstream
function FirstAppearingOnce()
{
    for(let item in result) {
      if(result[item] == 1) {
        return item
      }
    }
    return '#'
}