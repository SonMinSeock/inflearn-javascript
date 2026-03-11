import Header from './components/Header.js';
import PocketmonList from './components/PocketmonList.js';
import { getPokemonList } from './modules/api.js';

export default function App($app) {
  // 상태
  this.state = {
    pokemonList: [],
  };

  // 포켓몬리스트 컴포넌트
  let pokemonListComponent = null;

  // 초기화
  const init = async () => {
    new Header({
      $app,
      onSearch: async (searchWord) => {
        const data = await getPokemonList(null, searchWord);
        pokemonListComponent.setState(data);
      },
    });

    pokemonListComponent = new PocketmonList({
      $app,
      initialState: [],
      handleItemClick: (id) => {
        console.log('detail', id);
      },
      handleTypeClick: (type) => {
        console.log('type', type);
      },
    });

    const data = await getPokemonList();
    pokemonListComponent.setState(data);
  };

  init();
}
