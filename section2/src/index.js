/**
 * 변수 let 키워드
 */
let name = 'Son'; // 값을 할당하다 혹은 값을 대입하다
name = '민석'; // 재할당
console.log(name);

/**
 * $, _ 제외한 기호 문자 사용 못함
 */
let $user;
let user_name;
// let my*name; //Uncaught SyntaxError: Unexpected token '*'

/**
 * 카멜케이스 표기법
 */
let isDogOrCat;
let isTrueOrFalse;

/**
 * 상수 const 키워드
 * 기억하기 어려운 값을 보통 키 값이나 이런거를 상수로 활용하며, 대문자로 작성한다.
 */

const dogName = '뚜비';
console.log(dogName);
// dogName = '콩'; // index.js:27 Uncaught TypeError: Assignment to constant variable.

const EMAIL_ADDRESS = '123@gmail.com';
