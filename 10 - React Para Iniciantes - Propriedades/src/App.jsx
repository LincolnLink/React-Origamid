import React from 'react'
import Form from './Form/Form';

//Desafio
import Header from './desafio/Header';
import Home from './desafio/Home';
import Produtos from './desafio/Produtos';


const Titulo = (props) => {
  return <h1>{props.texto}</h1>;
};

const Titulo2 = (props) => {
  return <h1>{props.children}</h1>;
};


const App = () => {

  //Desafio  
  const { pathname } = window.location;

  let Component;
  if (pathname === '/produtos') {
    Component = Produtos;
  } else {
    Component = Home;
  }
  //Desafio


  return (
    <>
        <section>
          <Titulo texto="Meu Primeiro Título" />
          <Titulo texto="Meu Segundo Título" />
        </section>  
        <br />
        <br />
        <Titulo2>
            <p>Filho 2</p>
            <p>Filho 3</p>
        </Titulo2> 
        <br />
        <br />
        <Form /> 
        <p>---------------------------------Desafio-------------------------------------</p>
        <section>
          <Header />
          <Component />
        </section>


    </>
  );
};

export default App;
