// 斐波那契数列变式

function jumpFloor(number)
{
    let arr = [0, 1]
    const all = number + 1
    let sum = all
    while(sum - 2 >= 0) {
      arr.push(arr[all - sum] + arr[all - sum + 1])
      sum--
      if(all - sum + 1 == number + 1)
          break
    }
    return arr[number + 1]
}