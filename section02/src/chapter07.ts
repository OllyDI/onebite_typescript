// void 타입
function func1(): string {
    return 'hello';
}

// 아무것도 반환하지 않을 때 void 사용
function func2(): void {
    console.log('hello');
}

let a: void;
a = undefined;

// tsconfig.json에서 strictNullChecks: false 를 하면 void 타입에 null을 넣을 수 있음
// a = null;


// never 타입 -> 절대로 정상적으로 종료될 수 없을 때 사용 (ex: 무한루프, throw)
function func3(): never {
    while (true) {}
}
function func4(): never {
    throw new Error();
}

let b: never; // 아무것도 담을 수 없음