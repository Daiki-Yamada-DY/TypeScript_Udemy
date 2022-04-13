"use strict";
var _a, _b;
const quill = {
    name: 'Quill',
    role: 'front-end',
    follower: 1000
};
function toUpperCase(x) {
    // xが文字列の場合の処理
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    // xが数値の場合の処理
    return x;
}
const upperHello = function (x) { return 0; };
let intersectionFunc;
intersectionFunc = function (a, b) { return 0; };
function describeProfile(nomadWorker) {
    console.log(nomadWorker.name);
    if ('role' in nomadWorker) {
        console.log(nomadWorker.role);
    }
    if ('follower' in nomadWorker) {
        console.log(nomadWorker.follower);
    }
}
class Dog {
    constructor() {
        // タグ付きUnion
        this.kind = 'dog';
    }
    speak() {
        console.log('bow-wow');
    }
}
class Bird {
    constructor() {
        this.kind = 'bird';
    }
    speak() {
        console.log('tweet-tweet');
    }
    fly() {
        console.log('flutter');
    }
}
function havePet(pet) {
    pet.speak();
    switch (pet.kind) {
        case 'bird':
            pet.fly();
    }
    if (pet instanceof Bird) {
        pet.fly();
    }
}
havePet(new Bird());
// 型アサーション
const input = document.getElementById('input');
input.value = 'initial input value';
const designer = {
    name: 'Quill',
    role: 'web'
};
const downloadedData = {
    id: 1
};
// Optional Chaining
console.log((_b = (_a = downloadedData.user) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.first);
