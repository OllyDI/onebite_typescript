/**
 * 조건부 타입
 * 삼항 연산자를 이용해서 A타입이 B타입의 서브타입인지 확인
 */

type A = number extends string ? string : number;

type ObjA = {
    a: number;
}

type ObjB = {
    a: number;
    b: number;
}

type B = ObjB extends ObjA ? number : string;

/**
 * 제네릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string: number;

let varA: StringNumberSwitch<number>;
let varB: StringNumberSwitch<string>;

// 오버로드 시그니처 사용
function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any) {
    if (typeof text === 'string') {
        return text.replaceAll(" ", '');
    } else {
        return undefined;
    }
}

let res = removeSpaces("test im tester");

let res2 = removeSpaces(undefined);