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