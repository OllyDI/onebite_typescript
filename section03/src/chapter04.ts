// 타입 추론

// 함수의 매개변수는 타입을 알아서 추론하지 못해서 지정해 줘야함
// function func(param) {}

/*
    --- 타입 추론이 가능한 상황 ---
    1. 변수 선언
    2. 객체 생성
    3. 객체 구조분해 할당
    4. 배열 구조분해 할당
    5. 함수 반환값
    6. 함수 매개변수 기본값
*/
let a = 10;
let b = 'hello';

let c = {
    id: 1,
    name: 'test'
}

let {id, name} = c;

let [one, two, three] = [1, 'test', true];

function func1() { return 'test' }

function func2(msg = 'test') {}


/*
    변수를 초기화 해주지 않으면 초기는 "any 타입", 이후 값을 할당할 때마다 타입이 바뀜
    any 타입 진화, 암묵적 any 타입
*/
let d;
d = 10;
d.toFixed();
d = 'hello';
d.toUpperCase();


// const로 변수 선언하면 상수라서 리터럴 타입
const num = 10;


// 아래와 같이 다양한 타입이 들어간 배열 타입은 Union 타입으로 선언됨
let arr = [1, 'test'];