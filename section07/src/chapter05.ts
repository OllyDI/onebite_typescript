/*
    제네릭 클래스
*/
class List<T> {
    constructor(private list: T[]) {}

    push(data: T) {
        this.list.push(data);
    }

    pop() {
        return this.list.pop();
    }

    print() {
        console.log(this.list);
    }
}

const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(5);
numberList.print();

const stringList = new List(['test1', 'test2', 'test3']);
stringList.push('test4');
stringList.print();