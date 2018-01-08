function Fibonacci(n)
{
    let arr = [0, 1]
    const all = 39
    let sum = all
    while(sum - 2 >= 0) {
      arr.push(arr[all - sum] + arr[all - sum + 1])
      sum--
      if(all - sum + 1 == n)
          break
    }
    return arr[n]
}