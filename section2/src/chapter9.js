// 객체 Object, 비원시 타입

/**
 * 1. 객체 생성 방법
 * 생성자 함수, 리터럴 등 객체 생성 가능하다.
 */

// 1-1. 생성자 함수
let object = new Object();
console.log(object); // {}

// 1-2. 리터럴
const obj = {};
console.log(obj); // {}

/**
 * 2. key value
 */

/**
 * 2-1. 객체 프로퍼티 조회
 */
let book = {
  title: '자바스크립트 첫 걸음',
  author: 'Son',
  category: '자바스크립트',
  year: undefined,
  color: function () {
    console.log('orange');
  },
};

let car = {
  name: '붕붕',
  model: 'morning',
  color: 'black',
};

console.log(car.name);
console.log(car.model);
console.log(car.color);

console.log(car['name']);
console.log(car['model']);
console.log(car['color']);

const getValue = (key) => {
  console.log(car[key]);
};

getValue('color');

/**
 * 2-2 객체 프로퍼티 추가, 수정, 삭제
 */

const cat = {
  age: 2,
};

cat.name = '야옹이';
cat['color'] = 'white';

console.log(cat);

cat.name = '옹이';
cat['color'] = 'yellow';
console.log(cat);

// cat = {
//   age: 3,
// };

// console.log(cat); // TypeError: Assignment to constant variable.

delete cat.color;
delete cat['age'];

console.log(cat);

/**
 * 3. 객체 메서드 호출
 */

const person = {
  name: '홍길동',
  age: 23,
  print: function () {
    console.log('Hello World!');
  },
  greet() {
    console.log(`안녕하세요 제 이름은 ${this.name}입니다.`);
  },
};

person.print();
person['print']();
person.greet();
