"use strict";
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
    return '';
}
