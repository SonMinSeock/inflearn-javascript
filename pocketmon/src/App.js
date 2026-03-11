import Header from './components/Header.js';

export default function App($app) {
  // 상태
  this.state = {};

  // 상태 수정
  this.setState = () => {};

  // 앱 초기화
  const init = () => {
    // 헤더 컴포넌트 렌더링
    new Header($app);
  };

  init();
}
