// 1. 전역, 지역 스코프
let globalNum = 100;

function testFunc() {
  let innerNum = 50;
  console.log(globalNum);
  console.log(innerNum);
}

testFunc();
console.log(globalNum);
// console.log(innerNum); // Uncaught ReferenceError: innerNum is not defined

let global = '나는 전역 변수입니다.';

function outerFunction() {
  let outer = '나는 외부 함수의 변수입니다.';

  function innerFunction() {
    let inner = '나는 내부 함수의 변수입니다.';
    console.log(global);
    console.log(outer);
    console.log(inner);
  }

  innerFunction();
  console.log(global);
  console.log(outer);
  // console.log(inner); // Reference Error
}

outerFunction();

// 2. 함수 스코프, 블록 스코프
// 2-1. 블록 스코프
function print1() {
  for (let i = 0; i < 10; i++) {
    console.log(i); // i 변수 블록 스코프
  }
  // console.log(i); // ReferenceError: i is not defined
}

print1();

// 2-2. 함수 스코프
function print2() {
  for (var i = 0; i < 10; i++) {
    console.log(i); // i 변수 함수 스코프
  }
  console.log(i);
}

print2();

// 3. let vs var
// var 키워드는 함수 스코프, let, const 키워드는 블록 스코프
let num = 10;
// let num = 100; // Cannot redeclare block-scoped variable

var num2 = 20;
var num2 = 30;
console.log(num2);
