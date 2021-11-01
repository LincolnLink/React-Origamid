import React from 'react';

export const Produto = () => {
  // Utilizamos o useEffect para adicionarmos eventos direto ao DOM
  React.useEffect(() => {
    // Define a função para por no addEventListener
    function handleScroll(event) {
      console.log(event);
    }
    // Passa a função definida
    window.addEventListener('scroll', handleScroll);
    // Limpa o evento quando o elemento é removido do DOM.
    // O retorno  é executada quando termina de executar tudo a cima.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <p style={{ height: '200vh' }}>Produto</p>;
};
