/*
    * 접근 제어자
    클래스에 접근할 때 접근 범위 설정
    public, private, protected
    생성자에 접근 제어자를 달면 필드를 자동으로 만들기 때문에 필드를 생략해야 함 -> 초기화도 자동 this.position = position 필요 없음
*/

class Employee {
  // 필드
  private name: string;
  protected age: number;
//   public position: string;

  // 생성자
  constructor(name: string, age: number, public position: string) {
    this.name = name;
    this.age = age;
    // this.position = position;
  }

  // 메서드
  work() {
    console.log("일함");
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
  
  func() {
    // this.name = 'test'; // 접근 불가
    this.age = 30;  // 접근 가능
  }
}

const employee = new Employee('test', 27, '개발자');
// employee.name = 'test2';    // 접근 불가
// employee.age = 30;          // 접근 불가
employee.position = 'test';
console.log(employee);