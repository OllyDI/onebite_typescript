/*
    인터페이스와 클래스
    인터페이스로 구현된 필드는 무조건 public임 -> private, protected 불가능
*/

interface CharaterInterface {
    name: string;
    speed: number;
    move(): void;
}

class Charater implements CharaterInterface {
    // name: string;
    // speed: number;

    constructor(public name: string, public speed: number) {}

    move(): void {
        console.log(`${this.speed} 속도로 이동`);
    }
}