// 1. for 문
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// for (let i = 5; i > 0; i--) {
//   console.log(i);
// }

// 2. while 문
// let i = 1;

// while (i < 6) {
//   console.log(i);
//   i++;
// }

// 3. 배열 순회
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 4. 객체 순회
const person = {
  name: '홍길동',
  age: 29,
  height: 180,
};

let newArray = Object.keys(person);

for (let i = 0; i < newArray.length; i++) {
  const rowKey = newArray[i];
  console.log(`key : ${rowKey}, value : ${person[rowKey]}`);
}

let newArray2 = Object.values(person);

for (let i = 0; i < newArray2.length; i++) {
  console.log(`value : ${newArray2[i]}`);
}

let newArray3 = Object.entries(person);

for (let i = 0; i < newArray3.length; i++) {
  console.log(`key : ${newArray3[i][0]}, value : ${newArray3[i][1]}`);
}

// 5. for of
const arr2 = [1, 2, 3, 4, 5];
for (let i of arr2) {
  console.log(i);
}

// 6. for in
const person2 = {
  name: '홍길동',
  age: 29,
  height: 180,
};

for (let key in person2) {
  console.log(`key : ${key}, value : ${person2[key]}`);
}
