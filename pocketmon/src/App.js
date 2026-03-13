import Header from './components/Header.js';
import PokemonList from './components/PokemonList.js';
import PokemonDetail from './components/PokemonDetail.js';
import { getPokemonList, getPokemonDetail } from './modules/api.js';

export default function App($app) {
  this.state = {
    pokemonList: [],
    pokemonDetail: null,
    type: null,
    searchWord: null,
  };

  // Header 렌더
  const renderHeader = () => {
    const { pathname } = location;
    // 상세페이지 일때 검색창 안보여주도록 해준다.
    const isDetailPage = pathname.startsWith('/detail/');

    new Header({
      $app,
      showSearch: !isDetailPage,
      handleClick: () => {
        history.pushState(null, null, '/');
        route();
      },
      handleSearch: (keyword) => {
        const { pathname } = location;

        const url = keyword ? `${pathname}?search=${keyword}` : pathname;

        history.pushState(null, null, url);
        route();
      },
    });
  };

  // 리스트 렌더
  const renderPokemonList = () => {
    new PokemonList({
      $app,
      initialState: this.state.pokemonList,

      handleItemClick: (id) => {
        history.pushState(null, null, `/detail/${id}`);
        route();
      },

      handleTypeClick: (type) => {
        history.pushState(null, null, `/${type}`);
        route();
      },
    });
  };

  // 상세 렌더
  const renderPokemonDetail = () => {
    new PokemonDetail({
      $app,
      initialState: this.state.pokemonDetail,
    });
  };

  // 라우터
  const route = async () => {
    const { pathname, search } = location;

    // 상세 페이지
    if (pathname.startsWith('/detail/')) {
      const id = pathname.split('/detail/')[1];

      const data = await getPokemonDetail(id);

      this.setState({
        ...this.state,
        pokemonDetail: data,
      });

      return;
    }

    const params = new URLSearchParams(search);
    const searchWord = params.get('search');

    const type = pathname === '/' ? null : pathname.slice(1);

    const data = await getPokemonList(type, searchWord);

    this.setState({
      ...this.state,
      pokemonList: data,
      type,
      searchWord,
      pokemonDetail: null,
    });
  };

  // 전체 렌더
  const render = () => {
    $app.innerHTML = '';

    renderHeader();

    if (this.state.pokemonDetail) {
      renderPokemonDetail();
    } else {
      renderPokemonList();
    }
  };

  this.setState = (nextState) => {
    this.state = nextState;
    render();
  };

  const init = async () => {
    window.addEventListener('popstate', route);
    await route();
  };

  init();
}
