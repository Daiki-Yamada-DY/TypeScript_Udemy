var hasValue = true;
var count = 10;
var float = 3.14;
var negative = -0.12;
var single = 'hello';
var double = "hello";
var person = {
    name: 'Jack',
    age: 21
};
var fruits = ['Apple', 'Banana', 'Grape'];
var book = ['business', 1500, false];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
coffee.size = CoffeeSize.GRANDE;
var unionType = 10;
var clothSize = 'large';
// 関数に型を定義
function add(num1, num2) {
    return num1 + num2;
}
// 関数の戻り値がない場合
function sayHello() {
    console.log('Hello!');
}
// 関数に対する型注釈
var anotherAdd = add;
// callback関数
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num * 2);
    console.log(num * 2);
}
