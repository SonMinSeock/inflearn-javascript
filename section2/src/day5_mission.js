/**
 * 미션1. sort 메서드 사용하기
 * 다음과 같은 문자열 배열이 있을 때, 아래의 요구사항에 맞는 코드를 작성하세요.
 * const items = ["apple", "kiwi", "banana", "fig", "watermelon"];
 * //출력 결과 : ["watermelon", "banana", "apple", "kiwi", "fig"]
 *
 * 요구사항
 * sort를 사용해 문자열을 "길이가 긴 순서(내림차순)"로 정렬한다.
 * 문자열 길이가 같은 경우, 원래 배열에서 앞에 있던 것이 먼저 오도록 정렬한다.
 * 정렬된 배열을 출력한다.
 */

const items = ['apple', 'kiwi', 'banana', 'fig', 'watermelon'];
//출력 결과 : ["watermelon", "banana", "apple", "kiwi", "fig"]

const compare = (a, b) => {
  if (typeof a === 'string' && typeof b === 'string') {
    const aLength = a.length;
    const bLength = b.length;

    // 첫 번째 방법
    if (aLength > bLength) {
      return -1;
    } else if (bLength > aLength) {
      return 1;
    } else {
      return 0;
    }

    // 두 번째 방법
    // return bLength - aLength;
  }
};

console.log(items.sort(compare));

/**
 * 미션2. 상품 목록에서 특정 정보만 구조 분해로 꺼내기
 * 아래와 같은 상품 목록이 있을 때, 아래의 요구사항에 맞는 코드를 작성하세요.

const products = [
  { id: 1, name: "모니터", price: 300000, stock: 12 },
  { id: 2, name: "키보드", price: 50000, stock: 5 },
  { id: 3, name: "노트북", price: 1200000, stock: 3 }
];

요구사항
1. 배열 구조 분해 할당을 사용해 두 번째 상품 객체를 secondProduct라는 변수로 꺼낸다.
2. secondProduct에서 name과 stock만 객체 구조 분해 할당으로 꺼낸다.
3. 다음 형식으로 출력하세요
4. 키보드의 재고는 5개입니다.
 */

const products = [
  { id: 1, name: '모니터', price: 300000, stock: 12 },
  { id: 2, name: '키보드', price: 50000, stock: 5 },
  { id: 3, name: '노트북', price: 1200000, stock: 3 },
];

const [firstProduct, secondProduct, thirdProduct] = products;
const { name: productName, stock } = secondProduct;
console.log(`${productName}의 재고는 ${stock}개입니다.`);

/**
 * 미션3. spread&rest 간단 빈칸 채우기

아래의 코드를 보고, 요구사항을 만족하도록 빈칸을 채워보세요.

const arr1 = [1, 2];
const arr2 = [3, 4];

// 1) spread 문법을 사용하여 두 배열을 합친 newArr을 만드세요.
const newArr = [ _____ , _____ ];

const user = {
  name: "효빈",
  age: 26,
  hobby: "게임"
};

// 2) rest 문법을 사용해 name만 따로 분리하고 나머지를 restUser에 담으세요.
const { name, _____ } = user;

console.log(newArr);   // [1, 2, 3, 4]
console.log(name);     // "효빈"
console.log(restUser); // { age: 26, hobby: "게임" }
 */

const arr1 = [1, 2];
const arr2 = [3, 4];

// 1) spread 문법을 사용하여 두 배열을 합친 newArr을 만드세요.
const newArr = [...arr1, ...arr2];

const user = {
  name: '효빈',
  age: 26,
  hobby: '게임',
};

// 2) rest 문법을 사용해 name만 따로 분리하고 나머지를 restUser에 담으세요.
const { name, ...restUser } = user;

console.log(newArr); // [1, 2, 3, 4]
console.log(name); // "효빈"
console.log(restUser); // { age: 26, hobby: "게임" }
