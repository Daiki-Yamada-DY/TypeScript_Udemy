// 型パラメータに制約を設ける場合
function copy<T extends { name: string }>(value: T): T {
    value
    return value;
}
console.log(copy({ name: 'Quill' }));

class LightDatabase<T extends string | number | boolean> {
    private data: T[] = [];
    add(item: T) {
        this.data.push(item);
    }
    remove(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    get() {
        return this.data;
    }
}
const stringLightDatabase = new LightDatabase<string>();
stringLightDatabase.add('Apple');
stringLightDatabase.add('Banana');
stringLightDatabase.add('Grape');
stringLightDatabase.remove('Banana')
console.log(stringLightDatabase.get());