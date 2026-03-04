/**
 * 1. 요소 생성
 */
let $type = document.createElement('div');
$type.className = 'info-item';
$type.id = 'type';

let $typeText = document.createTextNode('말티즈');

console.log($type);
console.log($typeText);

/**
 * 2. 생성된 요소 돔에 추가하기
 */
let $animalInfo = document.querySelector('div.animal-info');
$animalInfo.appendChild($type);
$type.appendChild($typeText);

const $button = document.createElement('button');
$button.id = 'new-button';
$button.classList.add('new-button');
$button.textContent = '버튼';

$animalInfo.appendChild($button);

/**
 * 3. 이벤트 조작
 */
$button.addEventListener('click', () => {
  window.alert('버튼 클릭');
});

/**
 * 4. innerHTML
 */
console.log($animalInfo.innerHTML);
$animalInfo.innerHTML = "<div id='name'>고양이</div>";
