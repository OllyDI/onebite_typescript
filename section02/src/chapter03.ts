// 객체 리터럴 타입
let user: {
    id?: number;
    name: string;
} = {
    id: 1,
    name: "test"
};

// 객체 한개 값만 입력할 때 키에 물음표만 넣으면 됨
user = {
    name: '홍길동'
}

// 값을 변경하고 싶지 않을 때 readonly
let config: {
    readonly apiKey: string;
}  = {
    apiKey: 'my key'
}