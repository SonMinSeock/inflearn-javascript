// 1. forEach 메서드
// const arr = [1, 2, 3, 4, 5];

// arr.forEach((element, idx, array) => {
//   console.log(`${idx}번째 요소는 ${element}입니다.`);
//   console.log(array);
// });

// 2. map 메서드
// const arr = [1, 2, 3, 4, 5];

// const newArr = arr.map((element, idx, array) => {
//   console.log(`${idx}번째 요소는 ${element}입니다.`);
//   console.log(array);
//   return element * 10;
// });

// console.log(newArr);

// 3. at 메서드
// const colors = ['green', 'blue', 'purple'];
// console.log(colors.at(1)); // 'blue'
// console.log(colors.at(-1)); // 'purple'

// 4. includes 메서드
// const colors = ['green', 'blue', 'purple'];
// console.log(colors.includes('blue')); // true
// console.log(colors.includes('red')); // false
// console.log(colors.includes('blue', 2)); // 2번째 요소부터 찾기 시작
// console.log(colors.includes('blue', 1)); // 1번째 요소부터 찾기 시작

// 5. indexOf 메서드
// const colors = ['green', 'blue', 'purple'];
// console.log(colors.indexOf('blue')); // 1
// console.log(colors.indexOf('red')); // -1
// console.log(colors.indexOf('blue', 2)); // -1, 2번째 요소부터 찾기 시작

// // 6. findIndex 메서드
// const colors2 = [
//   { id: 1, color: 'green' },
//   { id: 2, color: 'blue' },
//   { id: 3, color: 'purple' },
// ];

// console.log(colors2.findIndex((element, idx, array) => element.color === 'purple')); // 2

// 7. find 메서드
// const colors = [
//   { id: 1, color: 'green' },
//   { id: 2, color: 'blue' },
//   { id: 3, color: 'purple' },
// ];
// const findColor = colors.find((element) => element.color === 'purple');
// console.log(findColor); // {id: 3, color: 'purple'}

// 8. filter 메서드
// const colors = [
//   { id: 1, color: 'green' },
//   { id: 2, color: 'blue' },
//   { id: 3, color: 'purple' },
// ];

// const filterColors = colors.filter((element, idx, array) => element.color !== 'blue');
// console.log(filterColors);

// 9. slice 메서드
// 원하는 부분만 자른 요소들로 만들수있다.
const colors = [
  { id: 1, color: 'green' },
  { id: 2, color: 'blue' },
  { id: 3, color: 'purple' },
  { id: 3, color: 'yellow' },
];

const sliceArr = colors.slice(1, 3);
console.log(sliceArr);
