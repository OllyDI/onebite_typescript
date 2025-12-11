/**
 * infer (inference)
 * 조건부 타입에서 특정 타입만 추론
 */

type FuncA = () => string;
type FuncB = () => number;

// infer R: T의 조건식을 참으로 만드는 타입으로 추론함 -> R: string | number
type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>;
type B = ReturnType<FuncB>;

// 어떠한 값을 넣어도 () => infer R은 number와 같은 타입으로 추론 불가 -> never 타입으로 됨
type C = ReturnType<number>;


/**
 * 예제
 */

// 예제 1. 프로미스의 결과값 타입만 추출
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

type PromiseA = PromiseUnpack<Promise<number>>; // number
type PromiseB = PromiseUnpack<Promise<string>>; // string