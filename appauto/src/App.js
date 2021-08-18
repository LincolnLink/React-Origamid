import { render } from '@testing-library/react';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form/Form';
import FormEspalhado from './Form2/FormEspalhado';

const ComponentReact = () => {
  return (
    <>
      <h2>Estudo de component</h2>
    </>
  );
};

const Eventos = () => {
  function handleScroll(event) {
    console.log(event);
  }
  //window.addEventListener('scroll', handleScroll);

  return (
    <>
      <h1>Eventos</h1>
      <button onClick={({ target }) => target.classList.toggle('ativa')}>
        Ativar
      </button>
      <br />
      <br />
      <button onClick={(event) => alert(event.target.innerText)}>
        Compre agora!
      </button>
      <p>
        Guardar o estado do DOM não é o mais indicado, veremos mais tarde como
        fazer isso com Hooks.
      </p>
      <p>Adicionando evento</p>
      {/* <div style={{ height: '200vw' }}>Div</div> */}
    </>
  );
};

const JsxArray = () => {
  const produtosEX = [
    {
      id: 1,
      nome: 'Smartphone',
      preco: 'R$ 2000',
      cores: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
      id: 2,
      nome: 'Notebook',
      preco: 'R$ 3000',
      cores: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
      id: 3,
      nome: 'Tablet',
      preco: 'R$ 1500',
      cores: ['#365069', '#47c1c8', '#f95786'],
    },
  ];

  const livros = [
    { nome: 'A Game of Thrones', ano: 1996 },
    { nome: 'A Clash of Kings', ano: 1998 },
    { nome: 'A Storm of Swords', ano: 2000 },
  ];

  return (
    <>
      <h1>Exercicio de array</h1>
      <ul>
        {produtosEX
          .filter((p) => Number(p.preco.replace('R$ ', '')) > 1500)
          .map((p) => (
            <div key={p.id}>
              <h3>Item:{p.nome}</h3>
              <p>Preço:{p.preco}</p>
              <ul>
                {p.cores.map((cor) => (
                  <li
                    key={cor}
                    style={{ backgroundColor: cor, color: 'white' }}
                  >
                    {cor}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </ul>
      <br />
      <h3>desestruturando objeto</h3>
      <ul>
        {livros
          .filter((livro) => livro.ano >= 1998)
          .map((livro) => (
            <li key={livro.nome}>
              {livro.nome}, {livro.ano}
            </li>
          ))}
      </ul>
    </>
  );
};

const JsxExpressoes = () => {
  const produtos = ['Notebook', 'Smartphone', 'Tablet'];

  const livros = [
    { nome: 'A Game of Thrones', ano: 1996 },
    { nome: 'A Clash of Kings', ano: 1998 },
    { nome: 'A Storm of Swords', ano: 2000 },
  ];

  const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'smarthphone', preco: 'R$ 1500' },
      { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
  };
  const karina = {
    cliente: 'Karina',
    idade: 22,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
    ],
    ativa: true,
  };

  const dados = mario;
  const total = dados.compras
    .map((item) => Number(item.preco.replace('R$ ', '')))
    .reduce((a, b) => a + b);

  return (
    <>
      <h1> Estudo dos Array no JSX </h1>
      <p>{produtos}</p>

      <h4>Tratando o array com .map()</h4>
      <ul>
        {produtos.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <br />
      <h4>Tratando array de objetos</h4>
      <ul>
        {livros
          .filter((livro) => livro.ano >= 1998)
          .map((livro) => (
            <li key={livro.nome}>
              {livro.nome}, {livro.ano}
            </li>
          ))}
      </ul>
      <br />

      <h4>Exercicio</h4>
      <div>
        <p>Nome: {dados.cliente}</p>
        <p>Idade: {dados.idade}</p>
        <p>
          Sitação:{' '}
          <span style={{ color: dados.ativa ? 'green' : 'red' }}>
            {dados.ativa ? 'Ativa' : 'Inativa'}
          </span>
        </p>
        <p>Total: R$ {total}</p>
        {total > 10000 && <p>'Você está gastando muito'</p>}
      </div>
    </>
  );
};

const Inicio = () => {
  const nome = 'Lincoln';
  const ativo = false;
  const random = Math.random();
  const titulo = <h1>Esse é um titulo</h1>;

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
      <br />
      <br />
    </>
  );
};

const Titulo = (props) => {
  return <h1 style={{ color: props.cor }}>{props.texto}</h1>;
};

const App = () => {
  return (
    <>
      <Header />
      <p>Esse é o meu aplicativo</p>
      <section>
        <h3>Form espalhado teste</h3>
        <FormEspalhado />
      </section>
      <section>
        <Titulo texto="Meu Primeiro Título" cor="blue" />
        <Titulo texto="Meu Segundo Título" cor="red" />
      </section>
      <Form />
      <Footer />

      {/* <Inicio />
      <JsxExpressoes />
      <JsxArray />
      <Eventos />
      <ComponentReact /> */}
    </>
  );
};
export default App;
