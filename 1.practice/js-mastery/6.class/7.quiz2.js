//정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
//직원들의 정보:이름, 부서이름, 한달 근무 시간
//매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다.
//정직원은 시간당 10000원
//파트타임직원은 시간당 8000원

class Employee {
  constructor(name, department, hoursPerMonth, payRate) {
    this.name = name;
    this.department = department;
    this.hoursPerMonth = hoursPerMonth;
    this.payRate = payRate;
  }
  salary() {
    return this.hoursPerMonth * this.payRate;
  }
}

class PartTime extends Employee {
  static PAY_RATE = 8000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, PartTime.PAY_RATE);
  }
}

class FullTime extends Employee {
  static PAY_RATE = 10000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, FullTime.PAY_RATE);
  }
}

const boram = new FullTime("boram", "serving", 30);
const bob = new PartTime("bob", "serving", 20);
console.log(boram.salary());
console.log(bob.salary());
