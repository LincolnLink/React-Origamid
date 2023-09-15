import React from 'react';
import useFetch from './useFetch';

const App02 = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    request('https://ranekapi.origamid.dev/json/api/produto/notebook');

    console.log("teste: ", data);

  }, [request]);

  console.log("teste: ", data);
  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando...</p>;
  if (data) return <div>{data.nome}</div>;
  else return null;
};

export default App02;
