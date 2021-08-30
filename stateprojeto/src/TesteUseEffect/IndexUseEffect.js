import React, { useState, useEffect } from 'react';

export const IndexUseEffect = () => {
  const [contar, setContar] = useState(0);

  console.log('Executou Fora!');

  // Caso o "contar esteja no array de dependencia, e o estado dele mudar, o
  // useEffect será executado novamente."
  useEffect(
    () => {
      console.log('Executou');
    },
    [
      // contar
    ],
  );

  useEffect(() => {
    document.title = 'Total ' + contar;
  }, [contar]);

  return (
    <>
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </>
  );
};
