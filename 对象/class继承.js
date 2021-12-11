/*
 * @Author: your name
 * @Date: 2021-12-11 17:06:34
 * @LastEditTime: 2021-12-11 17:10:49
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \JS复习\对象\class继承.js
 */
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    print () {
        console.log(this.name + this.age)
    }
}

class Student extends Person {
    constructor(name, age, professional) {
        super(name, age)
        this.professional = professional
    }

    print () {
        console.log(this.name + this.age + this.professional)
    }
}

var xiaoming = new Person("xiaoming", 20)
var xiaohong = new Student("xiaohong", 19, "软件")
xiaoming.print()
xiaohong.print()