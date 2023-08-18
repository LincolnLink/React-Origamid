import React, { useState, useCallback } from 'react';

const set1 = new Set();
const set2 = new Set();

export const Usecallbacktestefilho = () => {
  const func1 = () => {
    console.log('Teste');
  };

  const func2 = useCallback(() => {
    console.log('Teste - com useCallback');
  }, []);

  set1.add(func1);
  set2.add(func2);

  console.log('Set1:', set1);
  console.log('Set2 - useCallback:', set2);
  console.log('------');

  return (
    <div>
      <h4>Filho:</h4>
      <p onClick={func1}>Produto 1</p>
      <p onClick={func2}>Produto 2</p>
    </div>
  );
};

export const Usecallbacktestepai = () => {
  const [contar, setContar] = useState(0);

  return (
    <div>
      <h1>Teste do callback: Mostra que não muda o desenpenho</h1>
      <Usecallbacktestefilho />
      <h4>Pai</h4>
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};
