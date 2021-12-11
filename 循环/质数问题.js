/*
 * @Author: your name
 * @Date: 2021-12-11 15:50:26
 * @LastEditTime: 2021-12-11 15:52:46
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \JS复习\循环\质数问题.js
 */
for (let i = 2; i < 100; i++) {
    let flag = true
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = false
            break
        }
    }
    if (flag == true) {
        console.log(i + "   ")
    }
}
