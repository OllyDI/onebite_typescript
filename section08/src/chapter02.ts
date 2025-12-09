/**
 * keyof 연산자
 *  - 객체의 모든 프로퍼티를 유니온 타입으로 추출
 */

interface Person {
    name: string;
    age: number;
}



function getPropertyKey(person: Person, key: keyof Person) {
    return person[key];
}

const person: Person = {
    name: 'test',
    age: 30
}

getPropertyKey(person, 'name');



type Person2 = typeof person2;   // 변수 person2 로 타입 생성 가능

function getPropertyKey2(person2: Person2, key: keyof typeof person2) {
    return person2[key];
}

const person2 = {
    name: 'test',
    age: 30
}

getPropertyKey2(person2, 'name');
