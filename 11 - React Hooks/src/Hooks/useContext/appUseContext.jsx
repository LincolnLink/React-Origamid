import React from 'react';
import Produto from './produto';
import UserContext from './UserContext';

const AppUseConext = () => {
  return (
    <UserContext.Provider value={{ nome: 'André' }}>
      <Produto />
    </UserContext.Provider>
  );
};

export default AppUseConext;
