import React, { useState, useRef } from 'react';

export const UseRefComponent3 = () => {
  const [carrinho, setCarrinho] = useState(0);
  const [notificacao, setNotificacao] = useState(null);
  const timeoutRef = useRef();

  // setTimeout(() => {
  //   setNotificacao(null);
  // }, 2000);

  function handleClick() {
    setCarrinho(carrinho + 1);
    setNotificacao(carrinho + ' Item adicionado ao carrinho');

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 2000);
  }

  return (
    <>
      <h1>Use ref 3</h1>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Adicionar Carrinho{carrinho}</button>
    </>
  );
};
