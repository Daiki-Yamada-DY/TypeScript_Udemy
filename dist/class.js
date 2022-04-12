"use strict";
class Person {
    // readonly修飾子を使用した場合class内外関係なくプロパティを書き換えることができない。
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    incrementAge() {
        this.age += 1;
    }
    // greetingメソッド
    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old.`); // バッククォートに注意
    }
}
class Teacher extends Person {
    constructor(name, age, _subject) {
        super(name, age); // 継承元のconstructorに相当するsuperが必要
        this._subject = _subject;
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
    // greetingメソッド
    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}`); // バッククォートに注意
    }
}
const teacher = new Teacher('Quill', 38, 'Math');
teacher.subject = 'Music';
console.log(teacher.subject);
teacher.greeting();
