// 型パラメータに制約を設ける場合
function copy<T extends { name: string }>(value: T): T {
    return value;
}
console.log(copy({ name: 'Quill' }));

