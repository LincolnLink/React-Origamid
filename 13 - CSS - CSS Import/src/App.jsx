import React from 'react';
import Header from './Header';
import Home from './Home';
import CssModule from './css/cssModule';
import StyledComponents from './css/styledComponents';
import Framework from './css/framework';
import Animacao from './css/animacao';
import Imagens from './css/imagens';

const App = () => {

  const { pathname } = window.location;
  
  // Sistema de paginação temporario.
  let Component;
  if (pathname === '/cssmodule') {
    Component = CssModule;
  }
  else if(pathname === '/styledcomponent'){
    Component = StyledComponents;
  }
  else if(pathname === '/framework'){
    Component = Framework;
  }
  else if(pathname === '/animacao'){
    Component = Animacao;
  }
  else if(pathname === '/imagens'){
    Component = Imagens;
  }
  else {
    Component = Home;
  }

  return <>  
   <h1>CSS</h1>
   <section>
      <Header />
      <Component />
    </section>
  </>;
};

export default App;
