/*
 * @Author: your name
 * @Date: 2021-12-11 16:07:33
 * @LastEditTime: 2021-12-11 16:10:06
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \JS复习\数组\移除元素不改变原数组.js
 */
var arr1 = [1, 2, 3,5,4,8, 3, 5, 6, 2, 7, 2]
var newArr = []
for (let i in arr1) {
    console.log(i)
    if (arr1[i] != 2) {
        newArr.push(arr1[i])
    }
}
console.log(newArr)
