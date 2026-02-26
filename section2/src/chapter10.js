// 1. 배열 생성자
let arr1 = new Array(1, 2, 3);
let arr2 = new Array(3);
console.log(arr1);
console.log(arr2);

// 2. 배열 리터럴
let arr3 = [1, 2, 3];
let arr4 = [3];
console.log(arr3);
console.log(arr4);

let arr5 = [
  {
    name: '홍길동',
  },
  1,
  'array',
  function () {
    console.log('hello worlda');
  },
];

console.log(arr5);

let array = [1, 'hello', null];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

// 3. 배열 요소 추가
let fruits = ['apple', 'orange', 'peach'];
fruits.push('grape');
fruits.unshift('banana'); // 맨 앞에 추가

console.log(fruits);

// 4. 배열 요소 수정
let animal = ['cat', 'dog', 'hamster'];
animal[2] = 'parrot';

console.log(animal);

// 5. 배열 요소 삭제
const colors = ['purple', 'skyblue', 'green', 'yellow', 'orange'];

// colors.splice(start, deleteCount);
colors.splice(1, 3);
console.log(colors);

colors.pop(); // 맨 뒤에 제거
console.log(colors);

colors.shift();
console.log(colors); // 맨 앞에 제거

// 6. 배열 길이
console.log(colors.length);
