import React, { useState } from 'react';

function App() {
  // const [nome, setNome] = useState('');
  const [form, setForm] = useState({
    nome: '',
    email: '',
  });

  //
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  // Desestrutura os valores anteriores e passa os valores novos.
  // Precisa informar o id alem do value.
  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        id="nome"
        type="text"
        name="nome"
        value={form.nome}
        onChange={handleChange}
        //onChange={(event) => setNome(event.target.value)}
      />
      {form.nome}
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        name="email"
        value={form.email}
        onChange={handleChange}
        //onChange={(event) => setEmail(event.target.value)}
      />
      {form.email}
      <button>Enviar</button>
    </form>
  );
}

export default App;
