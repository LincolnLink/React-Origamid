import React from 'react';

export const Modal = ({ modal, setModal }) => {
  if (modal)
    return (
      <div>
        Esse é um modal com CallBack.{' '}
        <button onClick={() => setModal(false)}>Fechar</button>
      </div>
    );
  else return null;
};
