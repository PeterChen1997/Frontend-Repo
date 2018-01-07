// 类二分法解决
// 判断中间元素与头尾元素，输出最小元素位置
// 三种情况：中间与两侧相等，中间大于头，中间大于尾
// 中间与两侧相等时，不能通过更改头尾来进行化简，只能通过遍历
function minNumberInRotateArray(rotateArray)
{
    let arr = rotateArray
    if(arr.length <= 1) {
        return arr.length == 0 ? 0 : arr[0]
    }else {
        let start = 0
        let end = arr.length - 1
	    let mid = parseInt((end - start) / 2)
        while (end - start > 1) {
            if(arr[end] == arr[mid] && arr[mid] == arr[start]) {
                var result = arr[start];
                for(var i = start + 1; i < end; ++i){
                    if(result > arr[i]){
                        result = arr[i];
                    }
                }
                return result;
            } else if (arr[end] > arr[mid]) {
                end = mid 
                mid = parseInt((end + start) / 2)
            } else {
                start = mid 
                mid = parseInt((end + start) / 2)
            }
        }
        return arr[end]
    }
}