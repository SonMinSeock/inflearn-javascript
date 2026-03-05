// 1. 콜백 함수 호출에서의 this 값
function CounterA() {
  this.count = 0;
  setInterval(function () {
    this.count++; // 콜백 함수에서 this는 Window 객체를 가리킨다.
    console.log(`counterA count : ${this.count}`); // NaN
  }, 2000); // 2초마다 count 값이 1씩 증가
}

// 2. 화살표 함수 호출에서의 this 값
// 함수가 어디에서 선언되었는가
function CounterB() {
  this.count = 0;
  setInterval(() => {
    this.count++; // 화살표 함수에서 this는 상위 스코프를 가리킨다.
    console.log(`counterB count : ${this.count}`);
  }, 2000); // 2초마다 count 값이 1씩 증가
}

const counterA = new CounterA();
const counterB = new CounterB();

// 3. 객체의 화살표 함수 this
const cafe = {
  brand: '이디야',
  menu: '아메리카노',
  print: () => {
    console.log(this); // Window 객체를 가리킨다.
  },
};

cafe.print();
