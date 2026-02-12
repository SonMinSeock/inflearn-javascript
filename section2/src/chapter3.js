/**
 * 연산자
 * -> 사칙연산
 * -> 비교연산
 * -> 문자형 데이터 연결 연산
 */

/**
 * 1. 산술 연산자
 */
let num1 = 10;
let num2 = 5;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2); // 몫 연산

/**
 * 1-2. 나머지 연산
 */
console.log(num1 % num2);

/**
 * 1-3. 증감 연산
 * -> 후위 증감 연산
 * -> 전위 증감 연산
 */

// 후위 증가 연산
console.log(num1++); // 10
console.log(num1); // 11
// 전위 증가 연산
console.log(++num1); // 12

// 후위 감소 연산
console.log(num1--); // 12
console.log(num1); // 11
// 전위 감소 연산
console.log(--num1); // 10

/**
 * 2. 대입 연산자
 */

let num3 = 10;
num3 = num3 + 5;
console.log(num3); // 15

/**
 * 2-1. 복합 대입 연산자
 * -> +=. -=, *=, /=, %=
 */

num3 += 5;
console.log(num3); // 20

num3 -= 5;
console.log(num3); // 15

num3 *= 5;
console.log(num3); // 75

num3 /= 5;
console.log(num3); // 15

num3 %= 5;
console.log(num3); // 0

/**
 * 3. 비교 연산자
 */

/**
 * 3-1 일치
 * -> ===
 * -> ==
 */

let num4 = 10;
let num5 = '10';
let num6 = 10;

console.log(num4 === num5); // 타입이 같은지 판단 -> number === string -> false
console.log(num4 === num6); // 타입이 같은지 판단 ->  number === number -> 값을 비교 -> 10 === 10 -> true
console.log(num4 == num5); // 값으로 판단 -> 10 == 10 -> true

/**
 * 3-2 불일치
 * -> !=
 * -> !==
 */

console.log(num4 !== num5); // true
console.log(num4 !== num6); // falde
console.log(num4 != num5); // false

/**
 * 4. 대소 비교 연산자
 * -> <, >, <=, >=
 */

let a = 10;
let b = 20;
let c = 10;

console.log(a < b); // true
console.log(a > b); // false
console.log(b >= c); // true
console.log(a > c); // false

/**
 * 5. 연결 연산자
 * -> 문자열 연결 할때, + 연산자 이용한다.
 */

let price = 10000;
console.log('가격: ' + price + '원');

/**
 * 6. 논리 연산자
 * -> AND 연산자를 && 연산자 이용
 * -> OR 연산자를 || 연산자 이용
 * -> NOT 연산자, ! 연산자 이용
 * -> 조건식에서 많이 활용됨
 */

/**
 * 6-1. NOT 연산자
 * -> 값 반전해준다. 0이면 1로 1이면 0으로
 * -> false 반전하면 true, true 하면 false
 * -> !
 */

let isClicked = true;
let isOpened = false;

console.log(!isClicked); // false
console.log(!isOpened); // true

/**
 * 6-2. OR 연산자
 * -> 하나라도 true이면 true값 반환
 * -> ||
 */

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

/**
 * 6-3. AND 연산자
 * -> 둘다 true이면 true값 반환
 * -> &&
 */

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

/**
 * 7. null 병합 연산자
 * -> A ?? B
 * -> A가 null이나 undefined 이면 B를 반환
 * -> A가 null이나 undefined 아니면 A를 반환
 * -> 해당 값이 null이나 undefined이면 기본값으로 할당하고 싶을때 많이 사용한다.
 */

let num7;
let num8 = 10;

console.log(num7 ?? 20); // undefined ?? 20 -> 20
console.log(num8 ?? 20); // 10 ?? 20 -> 10

/**
 * 8. 삼항 연산자
 * -> A ? B : C
 * -> A 조건이 true이면 B 반환
 * -> A 조건이 false이면 C 반환
 */

// 홀짝 판단 예시
let num9 = 100;
let result = num9 % 2 === 0 ? '짝수' : '홀수';
console.log(result); // '짝수'
