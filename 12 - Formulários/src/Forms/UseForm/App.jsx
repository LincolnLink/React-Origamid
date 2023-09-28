import React from 'react';
import Input from './Input';
import useForm from './customHook';

const App = () => {
  const cep = useForm('cep');
  const nome = useForm();

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate() && nome.validate()) {
      console.log('Enviar');
    } else {
      console.log('Não enviar');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        {...cep}
      />
      <Input label="Nome" id="nome" type="text" {...nome} />
      <button>Enviar</button>
    </form>
  );
};

export default App;
