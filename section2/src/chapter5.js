// 1. 함수
function add(num1, num2) {
  // num1 매개변수(parameter), num2 매개변수(parameter)
  return num1 + num2;
}

const result = add(10, 15); // 10 인수(arguments), 15 인수(arguments)
console.log(`두 숫자의 더한 결과 값은 ${result}입니다.`);

// Early return 패턴
function compare(num) {
  if (num === 0) {
    return 'num의 값이 0입니다.';
  }

  if (num < 0) {
    return 'num의 값이 0보다 작습니다.';
  }

  if (num >= 10) {
    return 'num의 값이 10보다 크거나 같습니다.';
  }

  return 'num의 값이 0보다 크고 10보다 작습니다.';
}

console.log(compare(5));

function print() {
  console.log(1);
  console.log(2);
}

console.log(3);
print();
console.log(4);
