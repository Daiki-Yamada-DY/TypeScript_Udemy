"use strict";
class Person {
    // readonly修飾子を使用した場合class内外関係なくプロパティを書き換えることができない。
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static isAdult(age) {
        if (age > 17)
            return true;
        return false;
    }
    incrementAge() {
        this.age += 1;
    }
    // greetingメソッド
    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`); // バッククォートに注意
        this.explainJob();
    }
}
Person.species = 'Homo sapiens';
class Teacher extends Person {
    // constructorをprivateにすることでシングルトンパターンを実装
    constructor(name, age, _subject) {
        super(name, age); // 継承元のconstructorに相当するsuperが必要
        this._subject = _subject;
    }
    explainJob() {
        console.log(`I am a teacher and I teach ${this.subject}`);
    }
    get subject() {
        if (!this._subject) {
            throw new Error('There is no subject.');
        }
        return this._subject;
    }
    set subject(value) {
        if (!value) {
            throw new Error('There is no subject.');
        }
        this._subject = value;
    }
    static getInstance() {
        if (Teacher.instance)
            return Teacher.instance;
        Teacher.instance = new Teacher('Quill', 38, 'Math');
        return Teacher.instance;
    }
    // greetingメソッド
    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}`); // バッククォートに注意
    }
}
const teacher = Teacher.getInstance();
const teacher2 = Teacher.getInstance();
console.log(teacher, teacher2);
