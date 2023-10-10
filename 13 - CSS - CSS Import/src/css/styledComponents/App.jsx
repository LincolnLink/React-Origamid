import React from "react";
import styled from 'styled-components';

const ProdutosContainer = styled.div`
  display: flex;
`;

const Produto = styled.div`
  flex: 1;
`;

const Titulo = styled.h1`
  font-size: 2em;
`;

const Comprar = styled.button`
  font-size: 1.5em;
  background: transparent;
  padding: 0.5rem;
  border-radius: 4px;
  border: 2px solid;
  cursor: pointer;
`;

const Preco = styled.span`
  background: #53d956;
  color: white;
  display: inline-block;
  border-radius: 5px;
  padding: 0.5rem;
`;

//props
const Preco2 = styled.p`
  background: ${(props) => props.cor};
  color: white;
  display: inline-block;
  border-radius: 5px;
  padding: 0.5rem;
`;

//Estado
const Button2 = styled.button`
  background: ${({ ativo }) => (ativo ? '#53d956' : '#000')};
  border: 1px solid black;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  color: white;
  cursor: pointer;
`;

//Pseudo
const Comprar2 = styled.button`
  font-size: 1.5em;
  background: transparent;
  padding: 0.5rem;
  border-radius: 4px;
  border: 2px solid black;
  cursor: pointer;
  position: relative;
  &:hover {
    background: black;
    color: white;
  }
  &::before {
    display: block;
    content: '';
    width: 16px;
    height: 16px;
    border-radius: 50%;
    position: absolute;
    background: #53d956;
    top: -8px;
    right: -8px;
  }
`;


const App = () => {

  function template(value, total) {
    console.log(value);
    console.log(total);
  }


  const total = 10;
  template`São ${total} no total`;

  //estado (VER DEPOIS PORQUE NAO FUNCIONA)
  const [ativo, setAtivo] = React.useState(false);

  function handleClick(){
    console.log("clicado", ativo);
    setAtivo(!ativo);
  }

  return (
    <>
     <ProdutosContainer>
      <Produto>
        <Titulo>
          Notebook <Preco>R$ 1999</Preco>
        </Titulo>
        <Comprar>Comprar</Comprar>
      </Produto>
      <Produto>
        <Titulo>
          Smartphone <Preco>R$ 2999</Preco>
        </Titulo>
        <Comprar>Comprar</Comprar>
      </Produto>
    </ProdutosContainer>
    <br />
    <h3>Props</h3>
    <div>
      <Preco2 cor="#53d956">R$ 2999</Preco2>
      <Preco2 cor="#84e">R$ 1999</Preco2>
    </div>
    <br />
    <h3>Estado</h3>
    <Button2 
    $ativo={ativo} 
    onClick={handleClick}>
      Clique Aqui
    </Button2>
    <br />
    <h3>Pseudo</h3>
    <Comprar2>XXXXXX</Comprar2>
    </>   
  );
};

export default App;
