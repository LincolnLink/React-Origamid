import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Componentes
import Contato from './Contato';
import Sobre from './Sobre';
import Home from './Home';
import Erro404 from './404';
import Header from './Header';
import Login from './Login';
import Produto from './Produto';
import Produto2 from './Produto2/Produto2';
import Produto3 from './Produto3/Produto3';
import ProdutoDescricao from './Produto2/ProdutoDescricao';
import ProdutoAvaliacao from './Produto2/ProdutoAvaliacao';
import ProdutoCustomizado from './Produto2/ProdutoCustomizado';

const App = () => {

  return <>
   <BrowserRouter>
      <Header />
      <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="contato" element={<Contato />} />
          <Route path="login" element={<Login />} />
          <Route path="produto/:id" element={<Produto />} /> 
          {/* Nested Routes */}
          <Route path="produto2/:id/*" element={<Produto2 />} />

          {/* Outlet */}
          <Route path="produto3/:id/*" element={<Produto3/>}>
            <Route path="" element={<ProdutoDescricao />} />
            <Route path="avaliacao" element={<ProdutoAvaliacao />} />
            <Route path="customizado" element={<ProdutoCustomizado />} />
            <Route path="*" element={<Erro404 />} />
          </Route>

          <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  </>;
};

export default App;
