/*
    제네릭 
*/

// 제네릭 함수: 모든 타입을 사용할 수 있는 함수 -> 타입은 함수를 호출할 때마다 변경됨
function func<T>(value: T): T {
    return value;
}

let num = func(10);
num.toFixed();

let bool = func(true);

let str = func('test');
str.toUpperCase();

let arr = func([1, 2, 'test']);

let tup = func<[string, number, string]>(['test1', 2, 'test2']);