"use strict";
let hasValue = true;
let count = 10;
let float = 3.14;
let negative = -0.12;
let single = 'hello';
let double = "hello";
const person = {
    name: 'Jack',
    age: 21
};
const fruits = ['Apple', 'Banana', 'Grape'];
const book = ['business', 1500, false];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
coffee.size = CoffeeSize.GRANDE;
let unionType = 10;
let clothSize = 'large';
// 関数に型を定義
function add(num1, num2) {
    return num1 + num2;
}
// 関数の戻り値がない場合
function sayHello() {
    console.log('Hello!');
}
// 関数に対する型注釈
const anotherAdd = add;
// callback関数
function doubleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(num * 2);
}
