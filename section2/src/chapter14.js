const arr1 = ['green', 'blue'];
const arr2 = ['purple', 'yellow'];

const colors = arr1.concat(arr2);
console.log(colors);

console.log(colors.join()); // green,blue,purple,yellow
console.log(colors.join(' ')); // green blue purple yellow

// 정렬
// colors.sort();
// console.log(colors);

const compare = (a, b) => {
  if (a > b) {
    return -1;
  } else if (b > a) {
    return 1;
  } else {
    return 0;
  }
};

const numbers = [1, 100, 25, 50, 120, 3];

numbers.sort(compare);
console.log(numbers);

const sum = numbers.reduce((acc, cur, idx) => {
  console.log(acc, cur, idx);
  return acc + cur;
});

console.log(sum);

const a = Array.isArray([1, 10, 20]);
const b = Array.isArray({ id: 1, color: 'green' });
const c = Array.isArray(undefined);
console.log(a, b, c);
