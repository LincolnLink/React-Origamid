import React from 'react';
import { GlobalContext } from '../../src/GlobalContext/index';

const Produto = () => {
  const { dados } = React.useContext(GlobalContext);
  debugger;

  if (dados === null) return null;

  return (
    <div>
      <ul>
        Produto:{''}
        {dados.map((produto) => (
          <li key={produto.id}>{produto.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default Produto;
