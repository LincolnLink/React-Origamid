import React from 'react';

export const ButtonModal = ({ setModal }) => {
  function handleClick() {
    // usando um callback, não precisa passar a propriedade.
    // pode salvar no localStorage
    setModal((ativo) => !ativo);
  }
  return <button onClick={handleClick}>Abrir</button>;
};
