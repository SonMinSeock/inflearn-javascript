// 호이스팅
// 식별자, 선언문이 스코프의 최상단 끌어올리는 현상을 말한다.
// 1. 함수 호이스팅
connectStrings('study', 'hoisting');

function connectStrings(str1, str2) {
  console.log(str1 + str2);
}

// 2. 변수 호이스팅
// console.log(num1); // ReferenceError: Cannot access 'num1' before initialization
// let num1 = 123;

/**
 * TDZ (Temporal Dead Zone)
 * 선언은 먼저 되지만 초기화 되기 전까지 접근할 수 없는 구간에 머무른다. 그 구간이 TDZ이다.
 * let, const는 변수 초기화 진행 될때까지 TDZ에 머무른다.
 * 초기화 할때 까지 메모리 공간 확보 안한다.
 * let, const 호이스팅 안하는게 아니다!
 */

console.log(num2); // undefined
var num2 = 123;

// 변수 호이스팅 아래처럼 된다.
// var num2;
// console.log(num2); // undefined
// num2 = 123;
