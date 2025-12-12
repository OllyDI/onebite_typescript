/**
 * Pick<T, K> 뽑다, 고르다
 * 객체 타입으로부터 특정 프로퍼티만 골라내는 타입
 */

interface Post {
    title: string;
    tags: string[];
    content: string;
    thumb?: string;
}

// Pick을 직접 만들면
type Pick<T, K extends keyof T> = {
    [key in K]: T[key]
}

const legacyPost: Pick<Post, 'title' | 'content'> = {
    title: 'test',
    content: "test"
}

/**
 * Omit<T, K> 생략하다, 빼다
 * 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */

// Omit을 직접 만들면
// type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type Omit<T, K extends keyof T> = {
    [key in Exclude<keyof T, K>]: T[key]
}
const noTitlePost: Omit<Post, 'title'> = {
    content: 'test',
    tags: [''],
    thumb: '',
}

/**
 * Record<K, V> 
 * 객체 타입을 새롭게 정의할 때 인덱스 시그니처보다는 유연하지만 제한적인 객체 타입을 정의할 때 사용
 * K 객체 프로퍼티 키
 * V 키의 값
 */

// Record를 직접 만들면
type Record<K extends keyof any, V> = {
    [key in K]: V
}

type Thumbnail = Record<
    'large' | 'medium' | 'small' | 'watch', 
    { url: string; size: number; }
>;