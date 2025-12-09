/**
 * 맵드 타입
 * 객체에서 특정 값만 혹은 모두 수정할 때 사용
 * 인터페이스에서 사용 불가능 -> type 별칭으로만 사용
 */

interface User {
    id: number;
    name: string;
    age: number;
}

// [key]: value;로 구성, 모두 선택적 프로퍼티로 수정됨
type PartialUser = {
    [key in 'id' | 'name' | 'age']?: User[key];
}

// user 타입을 모두 boolean으로 수정
type booleanUser = {
    [key in keyof User]: boolean;
}

// user 타입을 모두 readonly로 수정
type ReadonlyUser = {
    readonly [key in keyof User]: User[key];
}


function fetchUser(): User {
    return {
        id: 1,
        name: 'test',
        age: 30
    }
}

// age만 수정
function updateUser(user: PartialUser) {

}
updateUser({
    age: 25
})