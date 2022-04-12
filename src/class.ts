class Person {
    name: string; // nameプロパティ
    private age: number;

    constructor(initName: string, initAge: number) {
        this.name = initName;
        this.age = initAge;
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