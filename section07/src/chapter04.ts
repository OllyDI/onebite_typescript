/*
    제네릭 인터페이스
*/
interface KeyPair<K, V> {
    key: K;
    value: V;
}

let keyPair: KeyPair<string, number> = {
    key: 'test',
    value: 0
}

let keyPair2: KeyPair<boolean, string[]> = {
    key: true,
    value: ['test']
}

/*
    인덱스 시그니처와 제네릭 인터페이스
*/

interface NumberMap {
    [key: string]: number;
}
let numberMap1: NumberMap = {
    key: 123,
    key2: 123123,
}

interface Map<V> {
    [key: string]: V;
}
let stringMap: Map<string> = {
    key: 'test1',
    key2: 'test2'
}

/*
    제네릭 타입 별칭: 제네릭 인터페이스와 문법만 다르고 거의 동일함
*/
type Map2<V> = {
    [key: string]: V;
}

let stringMap2: Map2<string> = {
    key: 'hello',
}

/*
    제네릭 인터페이스 활용 예시
    유저 관리 프로그램
*/
interface Student {
    type: 'student';
    school: string;
}
interface Developer {
    type: 'developer';
    skill: string;
}
interface User<T> {
    name: string;
    profile: T;
}

function goToSchool(user: User<Student>) {
    const school = user.profile.school;
    console.log(`${school} 등교 완료`);
}

const developerUser: User<Developer> = {
    name: 'test',
    profile: {
        type: 'developer',
        skill: 'typescript'
    }
}
// goToSchool(developerUser);  // 에러 발생 함수에서 타입 좁히기를 할 필요 없어짐

const studentUser: User<Student> = {
    name: 'test',
    profile: {
        type: 'student',
        school: 'test대학'
    }
}
goToSchool(studentUser);