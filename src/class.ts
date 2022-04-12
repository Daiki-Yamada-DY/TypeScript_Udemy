abstract class Person {
    static species = 'Homo sapiens';
    static isAdult(age: number) {
        if (age > 17) return true;
        return false;
    }
    // readonly修飾子を使用した場合class内外関係なくプロパティを書き換えることができない。
    constructor(public name: string, protected age: number) {
    }
    incrementAge() {
        this.age += 1;
    }
    // greetingメソッド
    greeting(this: Person) {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`); // バッククォートに注意
        this.explainJob();
    }
    abstract explainJob(): void;
}

class Teacher extends Person {
    explainJob() {
        console.log(`I am a teacher and I teach ${this.subject}`);
    }
    get subject(): string {
        if (!this._subject) {
            throw new Error('There is no subject.');
        }
        return this._subject
    }
    set subject(value) {
        if (!value) {
            throw new Error('There is no subject.');
        }
        this._subject = value;
    }
    constructor(name: string, age: number, private _subject: string) {
        super(name, age); // 継承元のconstructorに相当するsuperが必要
    }
    // greetingメソッド
    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}`); // バッククォートに注意
    }
}
const teacher = new Teacher('Quill', 38, 'Math');
teacher.greeting();