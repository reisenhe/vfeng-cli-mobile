// 数组转对象
export const turnArrtoObj = function (arr, key) {
    let obj = {}
    for (let i in arr) {
        obj[arr[i][key]] = arr[i];
    }
    return obj
}