import React from 'react';
import Header from './Header';
import Home from './Home';
import UseStates from './Hooks/useState/useState';
import UseEffect from './Hooks/useEffect/useEffect';
import UseRef from './Hooks/useRef/useRef';

const App = () => {

  //Desafio  
  const { pathname } = window.location;

  let Component;
  if (pathname === '/useStates') {
    Component = UseStates;
  }
  else if(pathname === '/useEffect'){
    Component = UseEffect;
  }
  else if(pathname === '/useRef'){
    Component = UseRef;
  }
  else {
    Component = Home;
  }
  //Desafio


  return (
    <>       
        <section>
          <Header />
          <Component />
        </section>


    </>
  );
};

export default App;
