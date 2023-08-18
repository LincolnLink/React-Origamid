import React from 'react';
import Header from './Header';
import Home from './Home';
import UseStates from './Hooks/useState/useState';
import UseEffect from './Hooks/useEffect/useEffect';

const App = () => {

  //Desafio  
  const { pathname } = window.location;

  let Component;
  if (pathname === '/useStates') {
    Component = UseStates;
  }
  if(pathname === '/useEffect'){
    Component = UseEffect;
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
