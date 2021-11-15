import React from 'react';

export const GlobalContext = React.createContext();

//Provider
export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState(null);

  //Buscando os produtos
  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  function limparDados() {
    setDados(null);
  }

  return (
    <GlobalContext.Provider value={{ dados, limparDados }}>
      {children}
    </GlobalContext.Provider>
  );
};
