import React from 'react';
const Header = () => {
    console.log('Renderizou')
  return (
    <>
    <h1>Header aqui</h1>
    </>
  );
};

//export default Header;

export default React.memo(Header);
