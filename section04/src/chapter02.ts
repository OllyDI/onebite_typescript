// 함수 타입 표현식
type Add = (a: number, b: number) => number;
const add: Add = (a, b) => a + b;

// 호출 시그니처 또는 콜 시그니처
type Operation = {
    (a: number, b: number): number;
    name: string;
}
const add2: Operation = (a, b) => a + b;
add2.name;