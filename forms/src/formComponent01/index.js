import React, { useState } from 'react';
import InputGenerico from './inputGenerico';

function FormComponent01() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  return (
    <>
      <h1>Exemplo de Input Generico</h1>
      <br />
      <form>
        <InputGenerico id="nome" label="Nome" value={nome} setValue={setNome} />
        <InputGenerico
          id="email"
          label="Email"
          value={email}
          setValue={setEmail}
          required
        />
        <button className="btnEnviar">Enviar</button>
      </form>
    </>
  );
}

export default FormComponent01;
