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
    constructor(name, age, subject) {
        super(name, age); // 継承元のconstructorに相当するsuperが必要
        this.subject = subject;
    }
    // greetingメソッド
    greeting() {
        console.log(`Hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}`); // バッククォートに注意
    }
}
const teacher = new Teacher('Quill', 38, 'Math');
teacher.greeting();
