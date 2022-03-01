import React, { useState } from 'react';
import InputGenerico from '../formComponent01/inputGenerico';
//import './style.css';

const Validacao = ({ label, options, value, setValue, ...props }) => {
  const [cep, setCep] = useState('');
  const [error, setError] = useState(null);

  function validateCep(value) {
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError('Preencha um CEP valido');
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleBlur({ target }) {
    //\d: digitos,{5} quantidade.
    //-? : traço opcional.
    //$:terminar em 3 digitos.
    //^começar com 5 digitos.
    //const regex = /^\d{5}-?\d{3}$/;
    //const validacao = regex.teste(target.value);

    return validateCep(target.value);
  }

  function handleChange({ target }) {
    if (error) validateCep(target.value);
    setCep(target.value);
  }

  function handleSubmit(event) {
    //previnir o padrão.
    event.preventDefault();
    if (validateCep(cep)) {
      console.log('Enviou');
    } else {
      console.log('Não enviar');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Validação</h3>
      <InputGenerico
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        value={cep}
        setValue={setCep}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {error && <p>{error}</p>}
      <button>Enviar</button>
    </form>
  );
};

export default Validacao;
