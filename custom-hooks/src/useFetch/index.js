import React, { useState } from 'react';

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // criar uma função para poder usar na hora que quiser!
  // O uso perfeito do "useCallback"
  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      //TODO - explica depois como se trata um retorno errado.
      setLoading(false);
    } catch (erro) {
      json = null;
      setError('erro');
    } finally {
      setData(json);
      setLoading(false);

      //retorna para o component ter acesso
      return { response, json };
    }
  }, []);

  // Retorna como objeto para não precisar desestruturar
  // e pode pegar na orem que desejar.
  return { data, error, loading, request };
};
export default useFetch;
