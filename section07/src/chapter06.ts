/**
 * 프로미스와 제네릭
 */
const promise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        // resolve(20);
        reject('test error');
    }, 3000);
})

promise.then((res) => {
    console.log(res * 20);
})

promise.catch((err) => {
    if (typeof err === 'string') {
        console.log(err);
    }
})


/**
 * 프로미스를 반환하는 함수 타입 정의
 */
interface Post {
    id: number;
    title: string;
    content: string;
}

function fetchPost(): Promise<Post> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                title: 'title',
                content: 'test',
            })
        }, 3000)
    })
}

const postRequest = fetchPost();
postRequest.then((res) => {
    res.id
})