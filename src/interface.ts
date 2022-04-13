interface Human  {
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