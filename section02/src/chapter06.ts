// any 타입 -> 특정 변수의 타입을 모를 때 사용
// 타입스크립트를 안쓰는 것과 같아짐 -> 런타입 오류에 조심해야 됨(최대한 사용 X)
let anyVar: any = 10;
anyVar = 'hello';
anyVar = true;
anyVar = {};
anyVar = () => {};

let num: number = 10;
num = anyVar;

// unknown -> 변수 대입 및 toUpperCase 등 불가 num = unknown
let unknownVar: unknown;

unknownVar = '';
unknownVar = 1;
unknownVar = () => {};


// 타입 정제 -> 이렇게는 변수 대입 가능
if (typeof unknownVar == 'number') {
    num = unknownVar;
}