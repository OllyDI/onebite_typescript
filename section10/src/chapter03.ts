/**
 * Exclude<T, U> 제외하다, 추방하다
 * T에서 U를 제거하는 타입
 */

// Exclude를 직접 만들면
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<string | boolean, boolean>;


/**
 * Extract<T, U>
 * T에서 U를 추출하는 타입
 */

// Exrtact를 직접 만들면
type Extract<T, U> = T extends U ? T : boolean;

type B = Extract<string | boolean, boolean>;



/**
 * ReturnType<T>
 * 함수의 반환 값 타입을 추출하는 타입
 */

// ReturnType을 직접 만들면
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;

function funcA() { return 'test'; }
function funcB() { return 10; }

type ReturnA = ReturnType<typeof funcA>;
type ReturnB = ReturnType<typeof funcB>;