/**
 * Partial<T> 부분적인, 일부분의
 * 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */

interface Post {
    title: string;
    tags: string[];
    content: string;
    thumb?: string;
}

// Partial을 직접 만들면
type Partial<T> = {
    [key in keyof T]?: T[key];
};

// Post타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔줌
const draft: Partial<Post> = {
    title: "test",
    content: "test",
}


/**
 * Required<T> 필수적인, 필수의
 * 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */

// Required를 직접 만들면: -? 선택적 프로퍼티 삭제
type Required<T> = {
    [key in keyof T]-?: T[key];
}

const withThumbPost: Required<Post> = {
    title: "test2",
    tags: ['test'],
    content: 'tset',
    thumb: 'https://...'
}

/**
 * Readonly<T> 읽기 전용
 * 특정 객체 타입의 모든 프로퍼티를 읽기 전용 프로퍼티로 바꿔주는 타입
 */

// Readony를 직접 만들면
type Readonly<T> = {
    readonly [key in keyof T]: T[key]
}

const readonlyPost: Readonly<Post> = {
    title: 'test',
    tags: ['test'],
    content: 'test',
}