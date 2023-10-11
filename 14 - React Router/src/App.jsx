import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Componentes
import Contato from './Contato';
import Sobre from './Sobre';
import Home from './Home';
import Erro404 from './404';
import Header from './Header';

const App = () => {

  return <>
   <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="contato" element={<Contato />} />
          <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  </>;
};

export default App;
