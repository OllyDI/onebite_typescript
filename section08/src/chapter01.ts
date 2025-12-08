/**
 * 인덱스드 엑세서 타입
 *  - 인덱스를 이용하여 특정 타입 접근
 *  - 객체, 배열, 튜플
 */

// 객체
interface Post {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
    }
}

// Post[] 배열 안에는 값이 아닌 타입만 들어갈 수 있음 -> 변수 사용X
function printAuthorInfo(author: Post['author']) {
    console.log(`${author.name}-${author.id}`);
}

const post: Post = {
    title: 'test',
    content: 'content',
    author: {
        id: 1,
        name: 'test'
    }
}

printAuthorInfo(post.author);


// 배열
type PostList = {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
}
}[];

function printAuthorInfo2(author: PostList[number]['author']) {
    console.log(`${author.name}-${author.id}`);
}

// PostList[] 배열 안에도 마찬가지로 값이 아니라 타입을 넣어야 함 -> 변수 사용X
const postList: PostList[number] = {
    title: 'test',
    content: 'content',
    author: {
        id: 1,
        name: 'test'
    }
}

printAuthorInfo(postList.author);


// 튜플
type Tup = [number, string, boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
type Tup3 = Tup[number];    // number를 넣으면 최적의 공통 타입을 뽑아옴