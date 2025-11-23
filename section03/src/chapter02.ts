// 객체 타입 간의 호환성

type Animal = {
    name: string;
    color: string;
}
type Dog = {
    name: string;
    color: string;
    breed: string;
}

let animal: Animal = {
    name: '기린',
    color: 'yellow'
}

let dog: Dog = {
    name: '동동이',
    color: 'brown',
    breed: '진도'
}

animal = dog;

// 오류 발생
// dog = animal;


type Book = {
    name: string;
    price: number;
}
type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
}

let book1: Book;
let programmingBook: ProgrammingBook = {
    name: 'test',
    price: 3000,
    skill: 'typescript'
}
book1 = programmingBook;


// 오류 발생 -> 타입에 정의되지 않는 프로퍼티 작성X 초과 프로퍼티 검사
let book2: Book = {
    name: 'test',
    price: 3000,
    // skill: 'typescript' <- 초과 프로퍼티 검사로 오류 발생
}

// 이런식으로 사용에는 초과 프로퍼티X
let book3: Book = programmingBook;



function func(book: Book) {}
func({
    name: 'test',
    price: 3000,
    // skill: 'typescript' <- 초과 프로퍼티 검사로 오류 발생
})

// 이런식으로 사용도 초과 프로퍼티X
func(programmingBook);