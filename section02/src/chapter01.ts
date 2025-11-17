/* 
    타입스크립트 원시타입
*/
// Number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = Infinity;
let num5: number = NaN;

// String
let str1: string = "hello";
let str2: string = 'hello';
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

// Boolean
let boo1: boolean = true;
let boo2: boolean = false;

// Null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

// number 타입에 임시로 null 값을 넣을 때는 tsconfig.json 수정 -> "strickNullChecks": false
// let numA: number = null;


/* 
    타입스크립트 리터럴타입
*/
let num: 10 = 10;
let str: "hello" = "hello";
let bool: true = true;