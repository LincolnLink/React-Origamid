import React from 'react';

export const GlobalContextExercicio = React.createContext();

export const GlobalStorageExercicio = ({ children }) => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((response) => response.json())
      .then((json) => setProduto(json));      
  }, []);

  console.log("teste: ", produto);
  
  function limparDados() {
    setProduto(null);
  }

  return (
    <GlobalContextExercicio.Provider value={{ produto, setProduto, limparDados }}>
      {children}
    </GlobalContextExercicio.Provider>
  );
};
