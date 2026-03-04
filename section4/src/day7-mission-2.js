/**
 * 미션2. DOM API & Select Tag

id가 app인 div요소의 내부에 아래의 코드를을 넣어주세요. (단, createElement, appendChild를 사용해서 생성해주세요, select 태그의 값을 변경할 때 마다 변경된 값을 출력하는 기능도 작성해주세요)
 */

const skills = [
  { type: 'Javascript', value: 'javascript' },
  { type: 'Next.js', value: 'next' },
  { type: 'React.js', value: 'react' },
  { type: 'TypeScript', value: 'typescript' },
];

const $app = document.getElementById('app');
const $select = document.createElement('select');

$select.id = 'skills';

skills.forEach((skill) => {
  const $option = document.createElement('option');
  $option.textContent = skill.type;
  $option.value = skill.value;
  $select.appendChild($option);
});

$app.appendChild($select);

$app.addEventListener('change', (event) => {
  console.log(event.target.value);
});
