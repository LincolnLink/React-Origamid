import React from 'react';
import { GlobalContext } from './GlobalContext';

const ProdutoGlobal = () => {
  const global = React.useContext(GlobalContext);

  function handleClick() {
    global.setCarrinho((carrinho) => carrinho + 1);
  }

  //let valorfilho = 77;

  return (
    <p>
      Total: {global.carrinho}: <button onClick={handleClick}>Adicionar</button>
    </p>
  );
};

export default ProdutoGlobal;
