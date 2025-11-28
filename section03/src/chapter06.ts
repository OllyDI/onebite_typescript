// 타입 좁히기 - 조건문 등을 통해 타입을 넓히거나 좁힘

// value -> number: toFixed
// value -> string: toUpperCase
// value -> Date: getTime
// value -> Person: name은 age살
// 조건문에 따라 value의 타입이 달라짐 -> 타입 좁히기
type Person = {
    name: string;
    age: number;
}
function func(value: number | string | Date | null| Person) {
    console.log(value);
    if (typeof value === 'number') {
        console.log(value.toFixed());
    } 
    else if (typeof value === 'string') {
        console.log(value.toUpperCase());
    }  
    // else if (typeof value === 'object') {
    //     console.log(value.getTime());   // typeof object는 null 값도 통과가 됨 -> 오류 발생 다른 타입 가드 사용 instanceof
    // }
    else if (value instanceof Date) {
        console.log(value.getTime());
    }

    // Person과 같은 타입 객체는 instanceof 가 아닌 in을 사용 
    else if (value && 'age' in value) {
        console.log(`${value.name}은 ${value.age}살`);
    }
}