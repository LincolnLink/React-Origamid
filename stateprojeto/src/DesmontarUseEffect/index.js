import React from 'react';
import { Produto } from './Produto';

export const DesmontarUseEffect = () => {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <div>
      <p>Meu App</p>
      <button onClick={() => setAtivo(!ativo)}>Abrir</button>
      {ativo && <Produto />}
    </div>
  );
};
