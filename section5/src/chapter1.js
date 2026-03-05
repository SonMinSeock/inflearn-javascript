/**
 * this 키워드
 * -> 자신이 속한 객체를 가리킨다.
 * -> 함수 호출 방식에 따라 this의 값이 달라진다.
 * -> 함수 호출 방식은 4가지 있다.
 * 1. 일반 함수 호출
 * 2. 메서드 호출
 * 3. 생성자 함수 호출
 * 4. 콜백 함수 호출
 */

// 1. 전역 공간 this 값
console.log(this); // Window 객체, 웹 브라우저 전역 객체, Node 환경에서 전역 객체인 Global 객체이다.

// 2. 일반 함수 호출에서의 this 값
function funcA() {
  console.log(`funcA 함수 호출 했을때 this 값 : ${this}`); // Window 객체
}

funcA();

// 3. 메서드 호출에서의 this 값
const cafe = {
  brand: '이디야',
  menu: '아메리카노',
  print: function () {
    console.log(`cafe의 print 메서드 호출 했을때 this 값 : ${this}`); // cafe 객체를 가리킨다.
  },
  newCafe: {
    brand: '이디야',
    menu: '라떼',
    print: function () {
      console.log(`cafe의 newCafe 객체의 print 메서드 호출 했을때 this 값 : ${this}`); // newCafe 객체를 가리킨다.
    },
  },
};

cafe.print();
cafe.newCafe.print();

const myCafe = cafe.print;
myCafe(); // 전역 공간에서 일반 함수로 호출한거다. 그래서 window 객체 가리킨다.

// 4. 생성자 함수 호출에서의 this 값
