import React from 'react';
import { Link, NavLink, useLocation  } from 'react-router-dom';

import './Header.css'

const Header = () => {

  // não funcionou.
  // const activeStyle = {
  //   color: 'tomato',
  //   margin: '5px'
    
  // };

  //useLocation
  const location = useLocation();

  React.useEffect(() => {
    const search = new URLSearchParams(location.search);
    console.log("O que é isso: ", location);
    // Bota na URL: produto?q=verde&memoria=16
    console.log(search.get('q'));
    console.log('Toda vez que a rota mudar');
  }, [location]);// toda vez que muda de rota ele atualiza o valor.
  //useLocation

  return (
    <header>
      <h4>Link</h4>
      <nav>
        <Link to="/">Home</Link> |  
        <Link to="sobre">Sobre</Link> |          
        <Link to="contato">Contato</Link> | 
        <Link to="login">Login</Link> | 
        <Link to="Produto/11">Produto</Link> |
        <Link to="Produto2/11">Produto2 - rota dentro de rota</Link> | 
        <Link to="Produto3/11">Produto - Outlet </Link> |
      </nav>
      <br /><br /><br />
      <h4>NavLink</h4>
      <nav>
        <NavLink to="/" end >
          Home
        </NavLink> |  
        <NavLink to="sobre" >
          Sobre
        </NavLink> |  
        <NavLink to="contato" >
          Contato
        </NavLink> |  
        <NavLink to="login" >
          Login
        </NavLink> |
        <NavLink to="Produto/11">
          Produto
        </NavLink> |
        <NavLink to="Produto2/11">
          Produto2 - rota dentro de rota
        </NavLink> | 
        <NavLink to="Produto3/11">
          Produto - Outlet 
        </NavLink> |
      </nav>
      <br /><br /><br />
    </header>
  );
};

export default Header;
