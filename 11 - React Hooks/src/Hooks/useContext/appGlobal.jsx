import React from 'react';
import ProdutoGlobal from './ProdutoGlobal';
import ProdutoGlobalExercicio from './exercicio/produtoGlobalExercicio';
import { GlobalStorage } from './GlobalContext';
import { GlobalStorageExercicio } from './exercicio/globalStorageExercicio';
import { LimparExercicio } from './exercicio/limpar';

const AppGlobal = () => {
  return (
    <>
      <GlobalStorage>
        <ProdutoGlobal />
      </GlobalStorage>   
      <br /> <br /> <br />
      <h2>Exercicio</h2>
      <GlobalStorageExercicio>
        <ProdutoGlobalExercicio />
        <LimparExercicio></LimparExercicio>
      </GlobalStorageExercicio>
    </>
    
  );
};

export default AppGlobal;
