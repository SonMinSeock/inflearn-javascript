/**
 * 원시 타입 (Primitive Type)
 * 프로그램 실행되는 도중에 하나의 값을 가지고 있는 타입을 원시타입 부른다.
 */

// typeof 연산자
let num = 10;
console.log(typeof num); // number

/**
 * 원시 타입 - 1. 숫자형 (number type)
 */
let num1 = 125;
let num2 = 12.5;
let num3 = Infinity; // 무한대
console.log(typeof num3); // number
console.log(100 / 0); // Infinity

let num4 = NaN;
let num5 = 'javascript' / 10; // 에러 발생 안하고 NaN 값으로 준다.
console.log(typeof num5); // number
console.log(num5); // NaN

/**
 * 원시 타입 - 2. BigInt 타입
 * 숫자형으로 표현하지 못하는 범위, 2^53-1 보다 크거나, –(2^53-1)보다 작은 정수를 나타내야 할 때 사용하는 자료형이다.
 */
let bigNum1 = 9007199254740991n;
let bigNum2 = BigInt('9007199254740991');

console.log(typeof bigNum1); //bigint
console.log(typeof bigNum2); //bigint

/**
 * 원시 타입 - 3. 문자형 (string type)
 */
let name = 'Son';
console.log(typeof name1); // string

let intro = `제 이름은 ${name} 입니다.`; // 템플릿 리터럴
console.log(intro);

/**
 * 원시 타입 - 4. boolean type
 */
let isClicked = false;

if (isClicked) {
  console.log('클릭 O');
} else {
  console.log('클릭 X');
}

/**
 * 원시 타입 - 5. Null Type
 * 존재하지 않거나, 알 수 없는 값
 */

let num6 = null;
console.log(typeof null); // object, 이게 JS의 잠재적 오류이다.
console.log(num6 === null); // 비교연산자 이용해야 null인지 아닌지 확인 가능, true

/**
 * 원시 타입 - 6. undefined Type
 * 값이 할당 되지 않는 상태일때 자동으로 undefined으로 할당 해준다.
 */
let num7;
console.log(typeof num7); // undefined

/**
 * 비원시 타입 (Non Primitive Type 또는 Reference Type)
 * 프로그램 실행되는 도중에 여러개의 값을 가지고 있는 타입을 비원시 타입 부른다.
 * 예시 : 배열, 객체
 */

/**
 * 형 변환 - 1. 묵시적 형 변환
 * 의도한게 아닌 자동으로 형 변환 하는 것을 말한다.
 */

let num8 = '15';
let num9 = 5;
console.log(num8 / num9); // 3, num8이 number형으로 변환 했다.

/**
 * 형 변환 - 2. 명시적 형 변환
 * 의도적으로 형변환 하는것을 말한다.
 */

let num10 = '15';
let num11 = 5;

console.log(num10 + num11); // '155'
/**
 * parseInt는 JS가 제공하는 메서드이다.
 * number형으로 변환해주는 메서드이다.
 */
console.log(parseInt(num10) + num11); // 20
