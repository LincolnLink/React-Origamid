import React from 'react';
import { useParams, Route, Routes, NavLink } from 'react-router-dom';
import ProdutoDescricao from './ProdutoDescricao';
import ProdutoAvaliacao from './ProdutoAvaliacao';
import ProdutoCustomizado from './ProdutoCustomizado';

const Produto2 = () => {
  const params = useParams();

  return (
    <div>
      <h1>Rota filha</h1>
      <nav>
        <NavLink to="">Descrição</NavLink> | 
        <NavLink to="avaliacao">Avaliação</NavLink> | 
        <NavLink to="customizado">Customizado</NavLink> | 
      </nav>
      <Routes>
        <Route path="/" element={<ProdutoDescricao />} />
        <Route path="avaliacao" element={<ProdutoAvaliacao />} />
        <Route path="customizado" element={<ProdutoCustomizado />} />
      </Routes>
    </div>
  );
};

export default Produto2;
