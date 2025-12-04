/*
    제네릭 응용
*/

// 응용 1. 여러개 선언
function swap<T, U>(a: T, b: U) {
    return [b, a]
}

// <T>로만 하면 string, number를 넣으면 오류 발생 -> <T, U> 와 같이 여러개 선언하면 해결
const [a, b] = swap('test', 2);


// 응용 2. 첫 번째 요소만 반환할 때
function returnValue<T>(data: [T, ...unknown[]]) {
    return data[0];
}

let str = returnValue(['test1', 2, 3]);

let num = returnValue([1, 'test1', 'test2']);


// 응용 3. length가 있는 타입만으로 제한
function getLength<T extends { length: number }>(data: T) {
    return data.length;
}

// 위와 아래가 같은 상황 -> InterfaceB에 포함되는 객체들은 무조건 length: number를 가지고 있어야 함 그래서 leng4 에러 발생
interface InterfaceA {
    length: number;
}
interface InterfaceB extends InterfaceA {}


let leng1 = getLength([1, 2, 3]);

let leng2 = getLength("12345");

let leng3 = getLength({ length: 10 });

// let leng4 = getLength(10);   // 에러 발생