// 1. 생성자 함수 호출 했을때 this 값
function Cafe(menu) {
  console.log(`생성자 함수 호출 했을때 this 값 : ${this}`); // new 키워드로 생성자 함수를 호출하면 this는 새로 생성되는 인스턴스 객체를 가리킨다.
  this.menu = menu;
}

const myCafe = new Cafe('latte');
console.log(myCafe);

// 2. 콜백 함수 호출 했을때 this 값
const cafe = {
  brand: '이디야',
  menu: '',
  setMenu: function (menu) {
    this.menu = menu;
  },
};

function getMenu(menu, callback) {
  callback(menu); // 메서드가 아닌 일반 함수로서 호출하고 있다. setMenu의 this는 Window 객체를 가리킨다.
}

getMenu('핫 초코', cafe.setMenu);

console.log(cafe);
console.log(window.menu); // '핫 초코'
