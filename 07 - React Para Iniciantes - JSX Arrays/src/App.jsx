import React from 'react';

const produtosEx = [
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

const App = () => {

  const produtos = [' Notebook ', 'Smartphone', ' Tablet '];
  const empresas = [<li key="e1">Apple</li>, <li key="e2">Google</li>]
  const filmes = ['Before Sunrise', 'Before Sunset', 'Before Midnight'];
  const livros = [
    { nome: 'A Game of Thrones', ano: 1996 },
    { nome: 'A Clash of Kings', ano: 1998 },
    { nome: 'A Storm of Swords', ano: 2000 },
  ];

  return (
    <>
      <p>{produtos}</p>
      <br />
      <ul>{empresas}</ul>
      <br />
      <ul>
          {filmes.map((filme) => (
            <li key={filme}>{filme}</li>
          ))}
      </ul>
      <br />
      <ul>
          {livros
            .filter((livro) => livro.ano >= 1998)
            .map(({nome, ano}) => (
            <li key={nome}>
              {nome}, {ano}
            </li>
          ))}
      </ul>
      <br />

      <h1>Exercicio</h1>

      <section>
        {produtosEx
          .filter((produto) => Number(produto.preco.replace('R$ ', '')) > 1500)
          .map((produto) => (
            <div key={produto.id}>
              <h1>{produto.nome}</h1>
              <p>Preço: {produto.preco}</p>
              <ul>
                {produto.cores.map((cor) => (
                  <li key={cor} style={{ backgroundColor: cor, color: 'white' }}>
                    {cor}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </section>


    </>
  );
};

export default App;
