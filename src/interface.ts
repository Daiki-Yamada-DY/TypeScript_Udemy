// typeエイリアスで関数の型を定義する場合
// type addFunc = (num1: number, num2: number) => number;

// interfaceで関数の型を定義する場合
interface addFunc {
    (num1: number, num2: number): number;
}
let addFunc: addFunc;
addFunc = (n1: number, n2: number) => {
    return n1 + n2;
}

interface Nameable {
    name: string;
    nickName?: string;
}

const nameable: Nameable = {
    name: 'Quill',
    nickName: 'Quilla'
}

interface Human extends Nameable {
    name: string;
    age: number;
    greeting(message: string): void; 
}
class Developer implements Human {
    constructor(public name: string, public age: number, public experience: number){};
    greeting(message: string) {
        console.log(message);
    }
}
const tmpDeveloper = {
    name: 'Quill',
    age: 38,
    experience: 3,
    greeting(message: string) {
        console.log(message);
    }
}
// userは少なくともHumanインターフェースに含まれるプロパティは使うことができる
const user: Human = new Developer('Quill', 38, 3);