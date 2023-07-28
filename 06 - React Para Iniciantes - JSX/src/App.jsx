import React from 'react';

  const Luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
  };
  
  const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
      { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
  };


const App = () => {

  const nome = 'Lincoln';
  const ativo = false;
  const random = Math.random();
  const titulo = <h1>Esse é um titulo</h1>;
  const titulo2 = <h1>Exercicio</h1>;

  function mostrarNome(param) {
    return 'Executando uma função: ' + param;
  }

  const carro = {
    marca: 'Ford',
    rodas: '4',
  };

  const estiloH1 = {
    color: 'blue',
    fontSize: '20px',
    fontFamily: 'Helvetica',
  };

  /* Exercicio */

  // const result = [];
  // listaCliente.forEach(item => {
    
  //   result.push(
  //   <div key="item.cliente">Nome: {item.cliente}</div>,
  //   <div key="item.idade">Idade: {item.idade}</div>,
  //   <div key="item.idade">Ativa: {item.ativa ? "Sim": "Não"}</div>,
  //   <ul>
  //       {item.compras.forEach((y, index )=> {
  //         <li key="{item.cliente} + {y.nome}"> Produto: {y.nome} - Preço: {y.preco}</li>
  //       })}
  //   </ul>,
  //   <br/>
  //   )
  // })

  const dados = mario;  

  const total = dados.compras
    .map((item) => Number(item.preco.replace('R$ ', '')))
    .reduce((a, b) => a + b);

  return (
    <>
      {titulo}
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" />
      <p>{nome}</p>
      <p>numero aleatorio, vezes dois, dividido por um: {(random * 2) / 1}</p>
      <div className={ativo ? 'ativo' : 'inativo'}>Exibir</div>
      <br />

      <p>{mostrarNome('Parametro')}</p>

      <p>Função Js: {new Date().getFullYear()}</p>

      <p>Objeto: {carro.marca}</p>
      <p>{carro.rodas}</p>

      <h1 style={estiloH1}>Empresa</h1>
      <p style={{ color: 'green' }}>Sempre aberta</p>

      {titulo2}
      {/* <div>
        {result}
      </div> */}

        <div>
          <p>Nome: {dados.cliente}</p>
          <p>Idade: {dados.idade}</p>
          <p>
            Situação:{' '}
            <span style={{ color: dados.ativa ? 'green' : 'red' }}>
              {dados.ativa ? 'Ativa' : 'Inativa'}
            </span>
          </p>
          <p>Total: R$ {total}</p>
          {total > 10000 && <p>Você está gastando muito</p>}
        </div>
      
    </>
  );
};

export default App;
