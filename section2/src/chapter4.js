// 1. if 문
let num = 10;

if (num < 10) {
  console.log('num은 10보다 작습니다.');
} else {
  if (num > 10) {
    console.log('nun은 10보다 큽니다.');
  } else {
    console.log('nun은 10입니다.');
  }
}

// 2. else if 문
if (num < 10) {
  console.log('num은 10보다 작습니다.');
} else if (num > 10) {
  console.log('nun은 10보다 큽니다.');
} else {
  console.log('nun은 10입니다.');
}

// 3. switch case문
let fruit = 'apple';

switch (fruit) {
  case 'banana':
    console.log('바나나');
    break;
  case 'orange':
    console.log('오렌지');
    break;
  case 'apple':
    console.log('사과');
    break;
  case 'grape':
    console.log('포도');
    break;
  default:
    console.log('다른 과일');
}
