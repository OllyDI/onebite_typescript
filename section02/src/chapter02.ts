// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "im", "winerlood"];
let boolArr: Array<boolean> = [true, false, true];

// 배열 요소 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열
let doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5]
];

// 튜플: 타입스크립트에서만 제공 -> 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "2", true];

// 튜플 용도
// const users: [string, number][] = [
//     ["tset1", 1],
//     ["test2", 2],
//     ["test3", 3],
//     [5, "test4"] <- 이부분
// ]