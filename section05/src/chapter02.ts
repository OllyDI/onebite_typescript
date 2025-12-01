// 인터페이스 확장 -> 중복 프로퍼티를 제거: extends
interface Animal {
    name: string;
    color: string;
}

interface Dog extends Animal {
    name: 'hello'   // 프로퍼티 재정의 가능 -> 부모 타입의 서브 타입으로만 재정의 가능
    isBark: boolean;
}
const dog: Dog = {
    name: 'hello',
    color: '',
    isBark: true, 
}

interface Cat extends Animal {
    isScratch: boolean;
}

interface Chicken extends Animal {
    isFly: boolean; 
}

// 다중 상속 가능
interface CatChicken extends Cat, Chicken {

}
const catChicken: CatChicken = {
    name: '',
    color: '',
    isScratch: true,
    isFly: true,
}