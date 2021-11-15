import './App.css';
import { GlobalStorage } from './GlobalContext/index';
import Produto from './Produto/index';
import Limpar from './Limpar';

function App() {
  return (
    <div className="App">
      <GlobalStorage>
        <Produto />
        <Limpar />
      </GlobalStorage>
    </div>
  );
}

export default App;
