// 함수 타입 정의

// 기본적인 방법 -> 매겨변수 타입 정의 + 반환값 타입 정의
function func(a: number, b: number) {
    return a + b;
}

// 화살표 함수 타입 정의 -> 당연히 반환값 타입 스킵 가능
const add = (a: number, b: number): number => a + b;

// 함수의 매개변수

// 기본 값을 기준으로 타입 추론
// 선택적 매개변수는 무조건 맨 끝에 배치해야 함
function introduce(name = 'test', tall?: number) {
    console.log(`name: ${name}`)
    if (typeof tall === 'number') {
        console.log(`tall: ${tall + 10}`)
    }
}

introduce('test', 172);
introduce('test');  // 매개변수 값 생략하고 싶으면 함수 매개변수에 ?물음표 넣으면 됨 -> 선택적 매개변수

// Rest Parameter 정의
function getSum(...rest: number[]) {
    let sum = 0;
    rest.forEach((num) => sum += num);
    console.log(sum);
    return sum
}

getSum(1, 2, 3);
getSum(1, 2, 3, 4, 5);