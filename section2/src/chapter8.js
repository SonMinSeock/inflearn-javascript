// 1. 함수 선언식
// function 키워드 옆에 함수 이름 작성

// 2. 함수 표현식
// 변수에 함수를 마치 하나의 값처럼 할당한다.

const add = function (a, b) {
  return a + b;
};

console.log(add(10, 20));

const sub = (a, b) => {
  return a - b;
};

console.log(sub(10, 20));

// 3. 콜백 함수
const calculate = (a, b, callback) => {
  let result = a + b;
  callback(result);
};

const printResult = (result) => {
  console.log('결과 : ' + result);
};

const doubleResult = (result) => {
  console.log('결과에 2를 곱한 값 : ' + result * 2);
};

calculate(5, 3, printResult);
calculate(5, 3, doubleResult);

const testFunc = (callback) => {
  callback();
};

testFunc(() => {
  console.log('콜백함수 테스트');
});

testFunc(function () {
  console.log('콜백함수 테스트');
});
