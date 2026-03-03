// 1. Promise 복습
// const delay = (ms) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('3초가 지났습니다.');
//     }, ms);
//   });
// };

// const start = () => {
//   delay(3000).then((res) => {
//     console.log(res);
//   });
// };

// start();

// 2. async - await
// const delay = (ms) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('3초가 지났습니다.');
//     }, ms);
//   });
// };

// const start = async () => {
//   const result = await delay(3000);
//   console.log(result);
// };

// start();

// 3. 에러 처리
// const delay = (ms) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('3초가 지났습니다.');
//     }, ms);
//   });
// };

// const start = async () => {
//   try {
//     const result = await delay(3000);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();

// 4. 비동기 연습
// 총 18초 소요
// const workA = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('workA');
//     }, 5000);
//   });
// };

// const workB = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('workB');
//     }, 3000);
//   });
// };

// const workC = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('workC');
//     }, 10000);
//   });
// };

// const start = async () => {
//   try {
//     const resultA = await workA();
//     const resultB = await workB();
//     const resultC = await workC();
//     console.log(resultA);
//     console.log(resultB);
//     console.log(resultC);
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();

// 5. Promise All
// 총 10초 소요

const workA = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('workA');
    }, 5000);
  });
};

const workB = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('workB');
    }, 3000);
  });
};

const workC = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('workC');
    }, 10000);
  });
};

const start = async () => {
  try {
    // promise를 병렬로 실행하고 모든 프로미스 완료 될때까지 기다린다.
    // 모든 프로미스가 성공해야 되며 하나라도 실패하면 rejected 상태되어 catch문 실행한다.
    const results = await Promise.all([workA(), workB(), workC()]);
    results.forEach((result) => {
      console.log(result);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
