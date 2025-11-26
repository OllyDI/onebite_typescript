// 대수 타입 -> 여러 개의 타입을 합성해서 새로운 타입 생성

// 합집합 타입 - Union 타입 -> 타입 개수 무제한
let a: string | number | boolean;
a = 1;
a = 'hello';
a = true;

let arr: (number | string | boolean)[] = [1, 'hello', true];

// 객체 타입도 유니온 타입 생성 가능
type Dog = {
    name: string;
    color: string;
}
type Person = {
    name: string;
    language: string;
}
type Union1 = Dog | Person;

let union1: Union1 = {
    name: 'test',
    color: 'test',
}
let union2: Union1 = {
    name: 'test2',
    language: 'test2'
}
let union3: Union1 = {
    name: 'test3',
    color: 'test3',
    language: 'test3'
}

// 두 객체에서 공통으로 갖고 있는 name 프로퍼티만 넣으면 오류 발생 -> 두 객체 어디에도 포함이 되지 않기 때문
// let union4: Union1 = {
//     name: 'test4',
// }


// 교집합 타입 - Intersection 타입 -> 보통 객체 생성에 사용됨
let variable: number & string;

type Dog2 = {
    name: string;
    color: string;
}
type Person2 = {
    name: string;
    language: string;
}
type Intersection = Dog2 & Person2

// 두 객체의 프로퍼티 중 하나라도 빠지면 오류 발생
let intersection1: Intersection = {
    name: 'test',
    color: 'test',
    language: 'test'
}