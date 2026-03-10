const changePage = (page) => {
  const $content = document.getElementById('content');
  $content.textContent = `현재 보고 있는 페이지는 ${page}입니다.`;
  /**
   * history API
   * -> pushState(state, title, url)
   */
  history.pushState({ page: page }, `Title ${page}`, `/${page}`);
};

const goBack = () => {
  history.back();
};

const goForward = () => {
  history.forward();
};

// popstate는 뒤로가기, 앞으로가기 이벤트 발생했을때 동작한다.
window.addEventListener('popstate', (event) => {
  if (event.state) {
    const $content = document.getElementById('content');
    $content.textContent = `현재 보고 있는 페이지는 ${event.state.page}입니다.`;
  }
});

document.getElementById('page1').addEventListener('click', () => changePage('page1'));

document.getElementById('page2').addEventListener('click', () => changePage('page2'));

document.getElementById('page3').addEventListener('click', () => changePage('page3'));

document.getElementById('goBack').addEventListener('click', goBack);

document.getElementById('goForward').addEventListener('click', goForward);
