import React from "react";
import { useParams, Route, Routes, NavLink, Outlet } from 'react-router-dom';

const Produto3 = () => {
    const params = useParams();
  
    return (
      <div>
        <h1>Produto: {params.id}</h1>
        <nav>
          <NavLink to="">Descrição</NavLink>
          <NavLink to="avaliacao">Avaliação</NavLink>
          <NavLink to="customizado">Customizado</NavLink>
        </nav>
        <Outlet />
      </div>
    );
  };
  
  export default Produto3;