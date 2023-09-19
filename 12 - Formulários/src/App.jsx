import React from 'react';
import Header from './Header';
import Home from './Home';
import Input from './Forms/Input/input';
import Textarea from './Forms/Textarea/Textarea';


const App = () => {
  
  const { pathname } = window.location;

  // Sistema de paginação temporario.
  let Component;
  if (pathname === '/input') {
    Component = Input;
  }
  else if(pathname === '/textarea'){
    Component = Textarea;
  }
  else {
    Component = Home;
  }

  return <>
   <h1>Formularios</h1>
   <section>
      <Header />
      <Component />
    </section>
  </>;
};

export default App;
