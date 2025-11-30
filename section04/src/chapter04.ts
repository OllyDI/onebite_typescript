// 함수 오버로딩

// 오버로드 시그니처: 함수 구현 없이 선언만 함
function func(a: number): void;
function func(a: number, b: number): void;

// 구현 시그니처: 실제 구현부
function func(a: number, b?: number) {
    if (typeof b === 'number') {
        console.log(a + b);
    } else {
        console.log(a * 20);
    }
}

// 오버로드 시그니처가 있으면 실제 구현부 매개변수를 따라가지 않고 오버로드 시그니처를 따라감
// func();
func(1);
func(1, 2);
// func(1, 2, 3);