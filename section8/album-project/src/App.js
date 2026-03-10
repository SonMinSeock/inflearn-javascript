import { request } from './components/api.js';
import Content from './components/Content.js';
import TabBar from './components/TabBar.js';

export default function App($app) {
  // 상태
  this.state = {
    currentTab: window.location.pathname.replace('/', '') || 'all',
    photos: [],
  };

  const tabBar = new TabBar({
    $app,
    initialState: '',
    onClick: async (name) => {
      history.pushState(null, `${name} 사진`, name);
      this.updateContnet(name);
    },
  });

  const content = new Content({
    $app,
    initialState: [],
  });

  // 상태 업데이트
  this.setState = (newState) => {
    this.state = newState;
    tabBar.setState(this.state.currentTab);
    content.setState(this.state.photos);
  };

  // 콘텐츠 업데이트
  this.updateContnet = async (tabName) => {
    try {
      const currentTab = tabName === 'all' ? '' : tabName;

      const photos = await request(currentTab);

      this.setState({
        ...this.state,
        currentTab: currentTab,
        photos: photos,
      });
    } catch (err) {
      console.log(err);
    }
  };

  window.addEventListener('popstate', async () => {
    this.updateContnet(window.location.pathname.replace('/', '') || 'all');
  });

  const init = async () => {
    this.updateContnet(this.state.currentTab);
  };

  init();
}
