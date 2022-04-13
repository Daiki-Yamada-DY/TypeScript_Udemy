type Engineer = {
    name: string;
    role: string;
}
type Blogger = {
    name: string;
    follower: number;
}
// タイプエイリアスでインターセクション型を定義してEngineerBloggerの型を定義
// type EngineerBlogger = Engineer & Blogger;

// interfaceでインターセクション型を定義してEngineerBloggerの型を定義
interface EngineerBlogger extends Engineer, Blogger {}

const quill: EngineerBlogger = {
    name: 'Quill',
    role: 'front-end',
    follower: 1000
}

function toUpperCase(x: string | number) {
    // xが文字列の場合の処理
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return '';
}

type NomadWorker = Engineer | Blogger;
function describeProfile(nomadWorker: NomadWorker) {
    console.log(nomadWorker.name)
    if ('role' in nomadWorker) {
        console.log(nomadWorker.role);
    }
    if ('follower' in nomadWorker) {
        console.log(nomadWorker.follower);
    }
}
class Dog {
    // タグ付きUnion
    kind: 'dog' = 'dog';
    speak() {
        console.log('bow-wow');
    }
}
class Bird {
    kind: 'bird' = 'bird';
    speak() {
        console.log('tweet-tweet');
    }
    fly() {
        console.log('flutter');
    }
}
type Pet = Dog | Bird;
function havePet(pet: Pet) {
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
const input = document.getElementById('input') as HTMLInputElement;
input.value = 'initial input value';