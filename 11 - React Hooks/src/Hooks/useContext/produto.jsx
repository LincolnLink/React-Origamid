import React from 'react';
import UserContext from './UserContext';

const Produto = () => {
  const user = React.useContext(UserContext);

  return <p>Produto de: {user.nome}</p>;
};

export default Produto;
