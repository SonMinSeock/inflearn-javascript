// 1. 배열 구조분해 할당
const [c1, c2, c3, c4 = 'yellow'] = ['green', 'blue', 'purple'];
console.log(c1, c2, c3, c4); // green blue purple yellow

let a = 10;
let b = 5;

[a, b] = [b, a];
console.log(a, b); // 5 10

// 2. 객제 구조분해 할당
const colors = {
  c1: 'green',
  c2: 'blue',
  c3: 'purple',
};

const { c1: color1, c2: color2, c3: color3, c4: color4 = 'yellow' } = colors;
console.log(color1, color2, color3, color4); // green blue purple yellow
