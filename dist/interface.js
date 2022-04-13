"use strict";
// typeエイリアスで関数の型を定義する場合
// type addFunc = (num1: number, num2: number) => number;
let addFunc;
addFunc = (n1, n2) => {
    return n1 + n2;
};
class Developer {
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    ;
    greeting(message) {
        console.log(message);
    }
}
const tmpDeveloper = {
    name: 'Quill',
    age: 38,
    experience: 3,
    greeting(message) {
        console.log(message);
    }
};
// userは少なくともHumanインターフェースに含まれるプロパティは使うことができる
const user = new Developer('Quill', 38, 3);
