import React, { useState } from 'react';
import InputGenerico from '../formComponent01/inputGenerico';
//import './style.css';
import useForm from '../Hooks/useForm';

const Validacao2 = () => {
  const cep = useForm('cep');
  const email = useForm('email');
  const nome = useForm();

  function handleSubmit(event) {
    //previnir o padrão.
    event.preventDefault();
    if (cep.validate() && email.validate() && nome.validate()) {
      console.log('Enviou');
    } else {
      console.log('Não enviar');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Validação</h3>
      <InputGenerico label="Nome" id="nome" type="text" {...nome} />

      <InputGenerico
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        {...cep}
      />

      <InputGenerico label="E-mail" id="email" type="email" {...email} />

      <button>Enviar</button>
    </form>
  );
};

export default Validacao2;
