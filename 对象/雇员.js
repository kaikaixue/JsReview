/*
 * @Author: your name
 * @Date: 2021-12-11 16:51:27
 * @LastEditTime: 2021-12-11 17:03:01
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \JS复习\对象\雇员.js
 */
function Employee (name, id, money) {
    this.name = name
    this.id = id
    this.money = money
}

Employee.prototype.printName = function () {
    console.log(this.name)
}

Employee.prototype.printMoney = function () {
    console.log(this.money)
}

var xiaoming = new Employee("小明", 1, 10000)
xiaoming.printName()
xiaoming.printMoney()

var xiaohong = new Employee("小红", 2, 8000)
xiaohong.printName()
xiaohong.printMoney()