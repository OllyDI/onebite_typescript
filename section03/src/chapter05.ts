// 타입 단언 Type assertion -> 나중에 프로퍼티의 값을 넣고 싶을 때
type Person = {
    name: string;
    age: number;
}
let person = {} as Person;
person.name = 'test';
person.age = 27;

type Dog = {
    name: string;
    color: string;
}
let dog: Dog = {
    name: 'dog',
    color: 'brown',
    breed: 'dog'
} as Dog;

/*
    타입 단언 규칙
    A as B일 때 A가 B의 슈퍼타입이거나 A가 B의 서브타입이어야 함
*/

// 10은 number, never는 모든 타입의 서브타입 -> A가 B의 슈퍼타입
let num1 = 10 as never;
// A가 B의 서브타입
let num2 = 10 as unknown;

// 불가능
// let num3 = 10 as string;
// 가능 -> 절대 좋은 방법은 아님
let num4 = 10 as unknown as string;


// const 단언 -> 보통 객체 타입과 활용, 객체 수정 불가
let num5 = 10 as const;

let cat = {
    name: 'cat',
    color: 'yellow'
} as const


// non null 단언
type Post = {
    title: string;
    author?: string;
}

let post: Post = {
    title: 'test1',
    author: 'test1'
}


// !느낌표를 붙이면 non, null이 아니라고 만드는 것
const len: number = post.author!.length;