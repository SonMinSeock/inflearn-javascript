/**
 * 1. 요소 접근
 */
// getElementById
let $color = document.getElementById('color');
console.log($color);

// querySelector
let $animalInfo = document.querySelector('div.animal-info');
let ageElement = document.querySelector('div#age');

console.log($animalInfo);
console.log(ageElement);

// querySelectorAll
let $infoItem1 = document.querySelectorAll('div.info-item');
console.log($infoItem1);

// getElementByClassName
let $infoItem2 = document.getElementsByClassName('info-item');
console.log($infoItem2);

// getElementsByTagName
let $infoItem3 = document.getElementsByTagName('div');
console.log($infoItem3);

/**
 * 2. 요소 클래스 이름 수정
 */
let $name = document.getElementById('name');
$name.className = 'dog-name';

console.log($name);
console.log($name.className);

/**
 * 3. 요소 id 수정
 */
let $animalInfo2 = document.querySelector('div.animal-info');
$animalInfo2.id = 'animal';
console.log($animalInfo2);
console.log($animalInfo2.id);

/**
 * 4. class list 이용하여 class 추가, 삭제해보기
 */
let $color2 = document.getElementById('color');
$color2.classList.add('dog-color');
$color2.classList.remove('info-item');
console.log($color2.classList);

console.log($color2);

/**
 * 5. 텍스트 콘텐츠 수정
 */

let $age2 = document.getElementById('age');
$age2.textContent = '2살';

/**
 * 6. 스타일 수정해보기
 */
let $color3 = document.getElementById('color');
$color3.style.color = 'blue';
$color3.style.fontSize = '30px';
