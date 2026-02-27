// spread
// const toy = {
//   type: 'bear',
//   price: 15000,
// };

// const blueToy = {
//   //   type: 'bear',
//   //   price: 15000,
//   ...toy,
//   color: 'blue',
// };

// const yellowToy = {
//   ...toy,
//   color: 'yellow',
// };

// console.log(blueToy);
// console.log(yellowToy);

const color1 = ['red', 'orange', 'yellow'];
const color2 = ['blue', 'navy', 'purple'];

const rainbow = [...color1, 'green', ...color2];
console.log(rainbow);

/**
 * rest
 * -> 나머지 매개변수
 */

const blueToy = {
  type: 'bear',
  price: 15000,
  color: 'blue',
};

// const { type, price, color } = blueToy;
const { type, ...rest } = blueToy;
console.log(type);
console.log(rest); // {price: 15000, color: 'blue'}

const colors = ['red', 'orange', 'yellow', 'green'];
const [c1, c2, ...rest2] = colors;
console.log(c1, c2);
console.log(rest2); // ['yellow', 'green']

/**
 * 나머지 매개변수 함수 활용
 */

const print = (a, b, ...rest) => {
  console.log(a, b, rest); // 1 2 [3, 4, 5, 6]
};

print(1, 2, 3, 4, 5, 6);

// spread와 나머지 매개변수 활용
const numbers = [1, 2, 3, 4, 5, 6];
print(...numbers);
