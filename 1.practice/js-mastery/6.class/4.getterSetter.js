// 접근자 프로퍼티 (Accessor Property)
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  //접근할때
  //이름이라는 상태를 반환하는거는 행동이 아닌디..?
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  //할당할때
  set fullName(value) {
    console.log(value);
  }
}

const student = new Student("수지", "김");
student.firstName = "안나";
console.log(student.fullName);
student.fullName = "김 철수";
