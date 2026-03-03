// 1. Promise
// 실행 함수
// const executor = (resolve, reject) => {
//   setTimeout(() => {
//     resolve('성공');
//     reject('실패');
//   }, 3000);
// };

// const promise = new Promise(executor);

// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// 2. 콜백 지옥 예시
// 비동기로 workA, workB, workC 순서대로 호출 하고 싶을 경우
// const workA = (value, callback) => {
//   setTimeout(() => {
//     callback(value);
//   }, value);
// };

// const workB = (value, callback) => {
//   setTimeout(() => {
//     callback(value - 3);
//   }, value);
// };

// const workC = (value, callback) => {
//   setTimeout(() => {
//     callback(value + 10);
//   }, value);
// };

// workA(10, (resA) => {
//   console.log(`workA : ${resA}`);
//   workB(resA, (resB) => {
//     console.log(`workB : ${resB}`);
//     workC(resB, (resC) => {
//       console.log(`workC : ${resC}`);
//     });
//   });
// });

// 3. 콜백 지옥 예시를 Promise로 변경해보자.
const workA = (value) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(value + 5);
    }, 5000);
  });

  return promise;
};

const workB = (value) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(value - 3);
    }, 3000);
  });

  return promise;
};

const workC = (value) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(value + 10);
    }, 10000);
  });

  return promise;
};

// workA(10).then((resA) => {
//   console.log(`workA : ${resA}`);
//   workB(resA).then((resB) => {
//     console.log(`workB : ${resB}`);
//     workC(resB).then((resC) => {
//       console.log(`workC : ${resC}`);
//     });
//   });
// });

// 프로미스 체이닝 기법
workA(10)
  .then((resA) => {
    console.log(`workA : ${resA}`);
    return workB(resA);
  })
  .then((resB) => {
    console.log(`workB : ${resB}`);
    return workC(resB);
  })
  .then((resC) => {
    console.log(`workC : ${resC}`);
  });
