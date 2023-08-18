import React, { useState, useCallback } from 'react';

export const UseCallback = () => {
  const [contar, setContar] = useState(0);

  const handleClick = useCallback(() => {
    setContar((contar2) => contar2 + 1);
  }, []);

  return (
    <>
      <h1>useCallback</h1>
      <button onClick={handleClick}>{contar}</button>
    </>
  );
};
