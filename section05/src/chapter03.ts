// 인터페이스 선언 합치기: 인터페이스를 여러개 선언해도 에러발생X -> 알아서 합쳐짐
interface Person {
    name: string;
}

interface Person {
    // name: 'hello',   // 인터페이스 합치기는 무조건 동일한 타입으로만 선언해야 됨
    age: number;
}

const person: Person = {
    name: '',
    age: 10,
}

// 사용 용도
// 1. 모듈 보강 -> 객체를 중간에 추가해야 되는 상황일 때

interface Lib {
    a: number;
    b: number;
}

interface Lib {
    c: string;
}

const lib: Lib = {
    a: 1,
    b: 2,
    c: 'test'
}