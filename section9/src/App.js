import Header from './components/Header.js';
import RegionList from './components/RegionList.js';
import CityList from './components/CityList.js';
import CityDetail from './components/CityDetail.js';
import { request } from './modules/api.js';

export default function App($app) {
  // 상태
  this.state = {
    startIdx: 0,
    sortBy: '',
    searchWord: '',
    region: '',
    cities: '',
  };

  // 컴포넌트
  const header = new Header();
  const regionList = new RegionList();
  const cityList = new CityList({
    $app,
    initialState: this.state.cities,
    handleLoadMore: async () => {
      const newStartIdx = this.state.startIdx + 40;
      const newCities = await request(newStartIdx, this.state.region, this.state.sortBy, this.state.searchWord);
      this.setState({
        ...this.state,
        startIdx: newStartIdx,
        cities: {
          cities: [...this.state.cities.cities, ...newCities.cities],
          isEnd: newCities.isEnd,
        },
      });
    },
  });
  const cityDetail = new CityDetail();

  // 상태 업데이트
  this.setState = (newState) => {
    this.state = newState;
    cityList.setState(this.state.cities);
  };

  // 초기화
  const init = async () => {
    const cities = await request(this.state.startIdx, this.state.region, this.state.sortBy, this.state.searchWord);

    this.setState({
      ...this.state,
      cities: cities,
    });
  };

  init();
}
