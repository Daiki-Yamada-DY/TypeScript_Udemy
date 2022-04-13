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

// 関数のオーバーロード
function toUpperCase(x: string): string;
function toUpperCase(x: number): number;

function toUpperCase(x: string | number) {
    // xが文字列の場合の処理
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    // xが数値の場合の処理
    return x;
}
interface TmpFunc {
    // 関数型のオーバーロードはinterfaceで定義する必要がある
    (x: string): number;
    (x: number): number;
}
const upperHello: TmpFunc = function (x: string | number) { return 0 };

// 関数型のインターセクション
// interface FuncA {
//     (a: number, b: string): number;
//     (a: string, b: number): number;
// }
// interface FuncB {
//     (a: string): number;
// }
// let intersectionFunc: FuncA & FuncB;
// intersectionFunc = function(a: number | string, b?: number | string) { return 0};

// 関数型のユニオン型
interface FuncA {
    (a: number): number;
}
interface FuncB {
    (a: string): string;
}
let unionFunc: FuncA | FuncB;

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

// indexシグネチャ
interface Designer {
    name: string;
    [index: string]: string;
}
const designer: Designer = {
    name: 'Quill',
    role: 'web'
}
interface DownloadedData {
    id: number;
    user?: {
        name?: {
            first: string;
            last: string;    
        }
    }
}
const downloadedData: DownloadedData = {
    id: 1
}
// Optional Chaining
console.log(downloadedData.user?.name?.first);

// レストパラメータ
function advancedFn(...args: [number, string, boolean?, ...number[]]) {
}
advancedFn(0, 'hi', true);

// 型の中でtypeofを使用して値の型を取得する
const peter = {
    name: 'Peter',
    age: 38
}
type PeterType = typeof peter;