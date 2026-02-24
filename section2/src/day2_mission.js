// 미션1. switch case문 작성하기
// 사용자가 입력한 나이가 18세 이상이면 "성인입니다.", 그 외에는 "미성년자입니다."라고 출력하는 함수를 만들어보세요.

function checkAdult(age) {
  // 이 부분을 작성해주세요
  switch (true) {
    case age >= 18:
      console.log('성인입니다.');
      break;
    default:
      console.log('미성년자입니다.');
  }
}

//예시 실행
checkAdult(20);

// 미션2. 간단한 연산자 선택기
// 두 숫자와 연산자 기호 중 하나("+", "-", "*", "/")를 전달하면, 해당 연산의 결과를 출력하는 함수를 switch문을 사용해 만들어보세요.
function calculate(num1, num2, operation) {
  switch (operation) {
    case '+':
      console.log(num1 + num2);
      break;
    case '-':
      console.log(num1 - num2);
      break;
    case '*':
      console.log(num1 * num2);
      break;
    case '/':
      console.log(num1 / num2);
      break;
    default:
      console.log("('+', '-', '*', '/')연산자 입력해 주세요.");
  }
}

//예시 실행
calculate(10, 5, '+'); // 15
calculate(10, 5, '*'); // 50
