/**
 * 1. 생성자 함수 필요성
 * -> 같은 구조로 기진 객체를 여러개 만들때 생성자 함수로 하면 유용하다.
 * */

const person1 = {
  name: '홍길동',
  age: 25,
  job: '디자이너',
  sayHi: function () {
    console.log(`안녕하세요! ${this.name}입니다.`);
  },
};

const person2 = {
  name: '밥',
  age: 28,
  job: '프론트엔드 개발자',
  sayHi: function () {
    console.log(`안녕하세요! ${this.name}입니다.`);
  },
};

// 생성자 함수
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayHi = function () {
    console.log(`안녕하세요! ${this.name}입니다.`);
  };
}

const person3 = new Person('Max', 30, '백엔드 개발자');
const person4 = new Person('Lee', 29, '프론트엔드 개발자');

console.log(person3);

person3.sayHi();
person4.sayHi();
