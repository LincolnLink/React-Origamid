import React from 'react';
import Header from './Header';
import Home from './Home';
import Input from './Forms/Input/input';
import Textarea from './Forms/Textarea/Textarea';
import Select from './Forms/Select/Select';
import Radio from './Forms/Radio/Radio';
import Checkbox from './Forms/Checkbox/Checkbox';
import Componentes from './Forms/Componentes/Componentes';


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
  else if(pathname === '/select'){
    Component = Select
  }
  else if(pathname ==='/radio'){
    Component = Radio
  }
  else if(pathname ==='/checkbox'){
    Component = Checkbox
  }
  else if(pathname === '/componentes '){
    Component = Componentes 
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
