export default function Header({ $app, onSearch }) {
  const $header = document.createElement('div');
  $header.className = 'header';

  // 렌더링
  this.render = () => {
    $header.innerHTML = `<div class="header-content">
        <img src="/src/img/ball.webp" width="32" height="32" />
        <div>포켓몬 도감</div>
      </div>

      <div class="search">
        <input type="text" placeholder="포켓몬을 검색하세요!" />
        <button>
          <img src="/src/img/search.png" />
        </button>
      </div>`;

    const $logo = $header.querySelector('.header-content');
    const $input = $header.querySelector('input');
    const $button = $header.querySelector('button');

    const search = () => {
      const keyword = $input.value.trim();

      // URL 변경
      const url = keyword ? `/?search=${keyword}` : '/';
      history.pushState(null, null, url);

      onSearch(keyword);
    };

    // 검색 버튼 이벤트
    $button.addEventListener('click', search);

    // 입력창에 엔터키 누르면 검색
    $input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        search();
      }
    });

    // 로고 클릭시 메인 이동
    $logo.addEventListener('click', () => {
      history.pushState(null, null, '/');
      $input.value = '';
      onSearch();
    });
  };

  this.render();

  $app.appendChild($header);
}
