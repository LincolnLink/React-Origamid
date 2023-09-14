import React from 'react';
import Header from './Header';
import Home from './Home';
import UseStates from './Hooks/useState/useState';
import UseEffect from './Hooks/useEffect/useEffect';
import UseRef from './Hooks/useRef/useRef';
import UseMemo from './Hooks/useMemo/useMemo';
import UseCallback from './Hooks/useCallback/useCallback';
import UseContextExemplo from './Hooks/useContext/useContextExemplo';
import CustomHooks from './Hooks/customHooks/customHooks';

const App = () => {
  
  const { pathname } = window.location;

  // Sistema de paginação temporario.
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
  else if(pathname === '/useMemo'){
    Component = UseMemo;
  }
  else if(pathname === '/useCallback'){
    Component = UseCallback;
  }
  else if(pathname === '/useContext'){
    Component = UseContextExemplo;
  }
  else if(pathname === '/customHooks'){
    Component = CustomHooks;
  }
  else {
    Component = Home;
  }

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
