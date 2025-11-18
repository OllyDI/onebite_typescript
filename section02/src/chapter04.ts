// 타입 별칭
type User = {
    id?: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
}

function func() { type User = {} }

let user: User = {
    id: 1,
    name: "test",
    nickname: "test",
    birth: "123123",
    bio: "hello",
    location: "test"
};

// 인덱스 시그니처
type CountryCodes = {
    [key: string]: string;
    Japan: string;
}

let countryCodes = {
    Korea: 'ko',
    UnitedState: 'us',
    UnitedKingdom: 'uk',
    Japan: 'jp'
}