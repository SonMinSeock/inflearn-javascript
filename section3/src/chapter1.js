/**
 * 1. 동기
 */
// const workA = () => {
//   console.log('workA');
// };

// const workB = () => {
//   console.log('workB');
// };

// const workC = () => {
//   console.log('workC');
// };

// workA();
// workB();
// workC();

/**
 * 2. 비동기 예시 1.
 */
// setTimeout(() => {
//   console.log('비동기');
// }, 3000);

// console.log('종료');

/**
 * 비동기 예시 2.
 * 비동기로 '비동기' 줄력 하고 '종료' 출력 하고싶다.
 */

// const workA = (callback) => {
//   setTimeout(() => {
//     console.log('비동기');
//     callback();
//   }, 3000);
// };

// workA(() => console.log('종료'));

/**
 * 비동기 예시 3.
 */
const workA = () => {
  setTimeout(() => {
    console.log('workA');
  }, 5000);
};

const workB = () => {
  setTimeout(() => {
    console.log('workB');
  }, 3000);
};

const workC = () => {
  setTimeout(() => {
    console.log('workC');
  }, 10000);
};

const workD = () => {
  console.log('workD');
};

workA();
workB();
workC();
workD();
