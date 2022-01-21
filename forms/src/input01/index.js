import React, { useState } from 'react';

function Input01() {
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
      <p>Input - conceitos basicos</p>
      <label htmlFor="nome">Nome</label>
      <input
        id="nome01"
        type="text"
        name="nome"
        value={form.nome}
        onChange={handleChange}
        //onChange={(event) => setNome(event.target.value)}
      />
      {form.nome}
      <br />
      <label htmlFor="email">Email</label>
      <input
        id="email01"
        type="text"
        name="email"
        value={form.email}
        onChange={handleChange}
        //onChange={(event) => setEmail(event.target.value)}
      />
      {form.email}
      <br />
      <button>Enviar</button>
      <br />
    </form>
  );
}

export default Input01;
