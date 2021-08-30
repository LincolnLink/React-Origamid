import React from 'react';

export const TesteHook = () => {
  // const ativoHook = React.useState(false);
  // const ativoValor = ativoHook[0];
  // const atualizaValor = ativoHook[1];
  // console.log(ativoValor);

  // function handleClick() {
  //   atualizaValor(!ativoValor);
  // }
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({
    nome: 'Lincoln',
    idade: '30',
  });

  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: 'Possui faculdade' });
  }

  return (
    <>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <h1>Testeh</h1>
      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
    </>
  );
};
