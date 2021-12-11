/*
 * @Author: your name
 * @Date: 2021-12-11 17:11:38
 * @LastEditTime: 2021-12-11 17:24:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \JS复习\对象\重写toString.js
 */
Date.prototype.toString = function () {
    var date = new Date()
    var century = date.getFullYear() > 2000 ? 21 : 20
    var year = date.getFullYear()
    var month = date.getMonth()
    var day = date.getDay()
    return `今天是第${century}世纪${year}年${month}月${day}日`
}

console.log(new Date().toString())