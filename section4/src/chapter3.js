// const $fruitSelect = document.getElementById('fruitSelect');

// $fruitSelect.addEventListener('change', (event) => {
//   console.log(event.target.value);
// });

// $fruitSelect.remove(1); // 1이라는 인덱스 주면 두번쩨 옵션 제거된다.

const $userName = document.getElementById('user-name');
const $password = document.getElementById('password');
const $loginBtn = document.querySelector('button');

$userName.value = '아무개';

// $loginBtn.addEventListener('click', () => {
//   console.log($userName.value);
//   console.log($password.value);
// });

$password.addEventListener('input', (event) => {
  console.log(event.target.value);
});
