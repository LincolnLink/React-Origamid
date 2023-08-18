import React from 'react';
import ButtonModal from './ButtonModal';
import Modal from './Modal';
import AppEx from './exercicio/AppEx';

const UseStates = () => {

  const [ativo, setAtivo] = React.useState(true);
 
  const [modal, setModal] = React.useState(false);

  const [contar, setContar] = React.useState(1);
  const [items, setItems] = React.useState(['Item 1']);


  function handleClick(){
    setContar((contar)=> {
      return contar + 1;
    });
    setItems((items) => [...items, 'Item' + (contar + 1)]);
  }

  return (
    <>
      <h1>useState</h1>
      <button onClick={() => setAtivo(!ativo)}>
        {ativo ? 'Botão Ativo' : 'Botão Inativo'}
      </button>
      <br /><br />
      <h4>Props</h4>
      <br />
      <div>
        <Modal modal={modal} setModal={setModal} />
        <ButtonModal setModal={setModal} />
      </div>
      <br /><br />
      <h4>Usando o useState de forma correta para não bugar o StrictMode</h4>
      <br />
      {items.map((item)=>(
        <li key={item}>{item}</li>
      ))}
      <button onClick={handleClick}>{contar}</button>
      <br /><br />
      <h4>Exercicio</h4>
      <br />
      <AppEx></AppEx>

    </>
  );
};

export default UseStates;
