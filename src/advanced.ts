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