// 题目描述：删除n的数围成圆圈中第m个数，求最后一个剩下的数

function LastRemaining_Solution(n, m) {
    if (n < 1 || m < 1) {
        return -1
    } else if (n == 1) {
        return 0
    } else {
        return (LastRemaining_Solution(n - 1, m) + m) % n
    }
}
function LastRemaining_Solution2(n, m) {
    if (n < 1 || m < 1) {
        return -1
    } else if (n == 1) {
        return 0
    }
    let last = 0 
    for(let i =2;i<=n;i++){
        last = (last+m) % i
    }
    return last

}