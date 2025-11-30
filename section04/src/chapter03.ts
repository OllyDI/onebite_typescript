/*
    함수 타입 호환성
    조건 1. 반환 값의 타입이 호환되는지
    조건 2. 매개변수의 타입이 호환되는지
*/

// 조건 1.
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;      // 호환 가능 업 캐스팅
// b = a;   // 호환 불가 다운 캐스팅


// 조건 2-1. 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

type Animal = {
    name: string;
}
type Dog = {
    name: string;
    color: string;
}

let animalFunc = (animal: Animal) => {};
let DogFunc = (dog: Dog) => {};

// animalFunc = DogFunc;
DogFunc = animalFunc;

// c = d;  // 호환 불가: 매개변수의 타입을 기준으로 호환성 판단은 업 캐스팅X, 다운 캐스팅O 위의 애니멀 도그를 보면 이해 가능
d = c;


// 조건 2-2. 매개변수의 개수가 다를 때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1;   // 호환 불가 매개 변수의 개수가 적을 때에만 호환 가능. 단 개매변수의 타입이 같아야 함