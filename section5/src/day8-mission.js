const obj = {
  value: 42,
  regularFunction: function () {
    console.log(this.value); // 여기서 this는 무엇을 가리키나요?
    // 정답: obj 객체
  },
  arrowFunction: () => {
    console.log(this.value); // 여기서 this는 무엇을 가리키나요?
    // 정답: window 객체
  },
};

obj.regularFunction(); // 출력: 42
obj.arrowFunction(); // 출력: undefined (이유를 설명해보세요)
/**
 * 이유 설명
 * -> 화살표 함수의 this는 화살표 함수가 포함하고 있는 상위 스코프를 가리키고 있습니다.
 * -> 이때 상위 스코프인 window 객체를 가리키고 있으며 window.value 프로퍼티 존재하지 않으므로 undefined 나오게 됩니다.
 */
