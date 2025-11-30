// 서로소 유니온 타입 -> 교집합이 없는 타입들로만 만든 타입
type Admin = {
    tag: 'ADMIN';
    name: string;
    kick: number;
}

type Member = {
    tag: 'MEMBER';
    name: string;
    point: number;
}

type Guest = {
    tag: 'GUEST';
    name: string;
    visit: number;
}

type User = Admin | Member | Guest;

// Admin -> {name}님 현재 {kick}명
// Member -> {name}님 현재 {point}모음
// Guest -> {name}님 현재 {visit}방문
function login(user: User) {
    switch (user.tag) {
        case 'ADMIN': {
            console.log(`${user.name}님 현재 ${user.kick}명`);
            break;
        }
        case 'MEMBER': {
            console.log(`${user.name}님 현재 ${user.point}모음`);
            break;
        }
        case 'GUEST': {
            console.log(`${user.name}님 현재 ${user.visit}방문`);
            break;
        }
    }
}

// 예시 2. 비동기 작업 결과 처리 객체


// 로딩 -> 콘솔에 로딩 출력
// 실패 -> 에러 메시지 출력
// 성공 -> 데이터 출력
// AsyncTask를 타입 하나로 선언시 물음표를 지우면 에러 발생 -> AsyncTask를 세 개의 타입으로 나누어 사용
// type AsyncTask = {
//     state: 'LOADING' | 'FAILED' | 'SUCCESS';
//     error?: {
//         message: string;
//     }
//     response?: {
//         data: string;
//     }
// }

type LoadingTask = {
    state: 'LOADING';
}
type FailedTask = {
    state: 'FAILED';
    error: {
        message: string;
    }
}
type SuccessTask = {
    state: 'SUCCESS';
    response: {
        data: string
    }
}
type AsyncTask = LoadingTask | FailedTask | SuccessTask;

const loading: AsyncTask = {
    state: 'LOADING',
}
const failed: AsyncTask = {
    state: 'FAILED',
    error: {
        message: 'error'
    }
}
const success: AsyncTask = {
    state: 'SUCCESS',
    response: {
        data: 'data'
    }
}

function processResult(task: AsyncTask) {
    switch (task.state) {
        case 'LOADING': {
            console.log(task.state);
            break;
        }
        case 'FAILED': {
            console.log(task.error?.message);   // AsyncTask를 타입 하나로 선언시 물음표를 지우면 에러 발생 -> AsyncTask를 세 개의 타입으로 나누어 사용
            break;
        }
        case 'SUCCESS': {
            console.log(task.response.data);
            break;
        }
    }
}