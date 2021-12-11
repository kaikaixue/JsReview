/*
 * @Author: your name
 * @Date: 2021-12-11 16:44:29
 * @LastEditTime: 2021-12-11 16:49:02
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \JS复习\函数\递归求阶乘.js
 */

console.log(fn(5))

function fn (x) {
    if (x == 1) {
        return 1
    } else {
        return x * fn(x - 1)
    }
}