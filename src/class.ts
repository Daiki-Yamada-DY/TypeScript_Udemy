class Person {
    // 初期化の処理を省略する記法
    constructor(public name: string, private age: number) {
    }
    incrementAge() {
        this.age += 1;
    }
    // greetingメソッド
    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`); // バッククォートに注意
    }
}
const quill = new Person('Quill', 38);
quill.incrementAge();
quill.greeting();