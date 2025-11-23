// 기본 타입 간의 호환성

// unknown 타입 -> 전체 집합, 모든 값을 넣을 수 있음
function unknownExam() {
    let a: unknown = 1;
    let b: unknown = 'hello';
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    // 불가능
    let unknownVar: unknown;
    // let num: number = unknownVar;
    // let str: string = unknownVar;
    // let bool: boolean = unknownVar;
}


// never 타입
function neverExam() {
    function neverFunc(): never {
        while (true) {}
    }

    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    // 불가능
    // let never1: never = 10;
    // let never2: never = 'hello';
    // let never3: never = true;
}

// void 타입
function voidExam() {
    function voidFunc(): void {
        console.log('void');
    }

    let voidVar: void = undefined;
}

// any 타입 -> 치트키: never 타입을 제외한 업 캐스팅, 다운 캐스팅 모두 가능
// 타입계층도를 모두 무시하기 때문에 최대한 사용 안하는게 좋음
function anyExam() {
    let anyVar: any;

    let unknownVar: unknown;
    anyVar = unknownVar;
    
    let undefinedVar: undefined;
    undefinedVar = anyVar;

    // 불가능
    let neverVar: never;
    // neverVar = anyVar;
}