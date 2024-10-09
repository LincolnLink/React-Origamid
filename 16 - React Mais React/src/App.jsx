import React from 'react';
import Button from './Button';
import Contato from './Contato';

const App = () => {  
  const titulo = <h1>ProtoType</h1>;
  const titulo2 = <h1>Contato</h1>;
  
  return (
    <>
      {titulo}
      <Button width={300}>Clique Aqui</Button>
      {titulo2}
      <Contato />
    </>
  );
};

export default App;
