import React, { useEffect } from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [carrinho, setCarrinho] = React.useState(0);


  useEffect(()=>{
    console.log("foi atualizado o carrinho: ", carrinho);
    //console.log("teste filho: ", children.valorfilho);
  }, [carrinho]);

  

  return (
    <GlobalContext.Provider value={{ carrinho, setCarrinho }}>
      {children}
    </GlobalContext.Provider>
  );
};
