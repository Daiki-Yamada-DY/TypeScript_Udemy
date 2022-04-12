let hasValue: boolean = true;
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;
let single: string = 'hello';
let double: string = "hello";

const person: {
	name: string;
	age: number;
} = {
	name: 'Jack',
	age: 21
}

const fruits: string[] = ['Apple', 'Banana', 'Grape'];

const book: [string, number, boolean] = ['business', 1500, false];


enum CoffeeSize {
    SHORT = 'SHORT',
    TALL = 'TALL',
    GRANDE = 'GRANDE',
    VENTI = 'VENTI'
}

const coffee = {
    hot: true,
    size: CoffeeSize.TALL
}

coffee.size = CoffeeSize.GRANDE;

let unionType: number | string = 10;


// タイプエイリアスを定義
type ClothSize = 'small' | 'medium' | 'large';

let clothSize: ClothSize = 'large';

// 関数に型を定義
function add(num1: number, num2: number): number {
    return num1 + num2
}

// 関数の戻り値がない場合
function sayHello(): void {
    console.log('Hello!');
}

// 関数に対する型注釈
const anotherAdd: (n1: number, n2: number) => number = add;

// callback関数
function doubleAndHandle(num: number, cb: (num: number) => number): void {
    const doubleNum = cb(num * 2);
    console.log(num * 2);
}
