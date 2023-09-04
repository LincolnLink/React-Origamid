import React from 'react';
import { GlobalContextExercicio } from './globalStorageExercicio';

const ProdutoGlobalExercicio = () => {
  const { produto, limparDados } = React.useContext(GlobalContextExercicio);

  if(produto === null) return null;
  return (
    <p>
      
        Produtos:{' '}
         {produto.map((p) =>(
          <li key={p.id}>{p.nome}</li>
        ))}       
        
    </p>
  );
};

export default ProdutoGlobalExercicio;
