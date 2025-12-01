// 인터페이스
interface Person {
    name: string;
    age?: number;
    sayHi(): void;  // 함수 호출 시그니처: 실체 함수 타입을 정의, 오버로딩시 사용 -> 함수 타입으로 사용시 중복 에러 발생
    sayHi(a: number, b: number): void;
}


// 헷갈릴 수 있는 것
// 인터페이스에서 프로퍼티 정의할 때 이름을 붙여줘야 됨: sayHi(): void; 처럼
type Func = {
    (): void; 
}
const func: Func = () => {};


const person: Person = {
    name: 'test',
    sayHi: function() {
        console.log("Hi");
    }
}

person.sayHi();
person.sayHi(1, 2);

// 타입 별칭과 차이점: 유니온, 인터섹션 타입을 인터페이스에서는 구현 불가능
type Type1 = number | string;
type Type2 = number & string;