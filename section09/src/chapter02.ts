/**
 * 분산적인 조건부 타입
 * 유니온과 함께 사용할 때 조건부 타입이 분산적으로 동작
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

// 이렇게 생성
// let c: StringNumberSwitch<string>;
// let c: StringNumberSwitch<number>;
let c: StringNumberSwitch<number | string>;

let d: StringNumberSwitch<boolean | number | string>;


/**
 * 실용적인 예제
 * 분산적인 조건부 타입을 이용하여 유니온에서 특정 타입만 제거 
 */

// 예제 1.
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 결과: <number | never | boolean> never는 없어짐 -> <number | boolean>


// 예제 2.
type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
// 결과: <never | string | never> -> <string>


// 분산 방지
type StringNumberSwitch2<T> = [T] extends [number] ? string : number;
let e: StringNumberSwitch2<boolean | number | string>;