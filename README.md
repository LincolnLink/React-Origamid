# React-Origamid

# Ferramentas

- live server
- Prettier
- Origamid next
- ES7 React/Redux/GraphQL/React-Native snippets

# JavaScript

- Exemplos no codigo com comentarios.

# Iniciando React

- Para adicionar o react deve por os 3 links que faz ele funcionar.

<blockquete>

      <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin>
      </script>

      <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin>
      </script>

</blockquete>

- Para usar o JSX, deve por o link que faz ele funcionar, apenas para testar.

 <blockquete>

      <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

 </blockquete>

- ou pode instalar pelo npm.

 <blockquete>
 
    npm init -y

    npm install babel-cli@6 babel-preset-react-app@3

 </blockquete>

- Para executar o compilador.

 <blockquete>

    npx babel --watch src --out-dir . --presets react-app/prod

 </blockquete>

### Criando um component simples.

- É preciso de um elemento para o React montar o component nele.
- Um exemplo de elemento seria uma div com um id.

 <blockquete>

    <div id="app">
      App
    </div>

 </blockquete>

- Cria um script do type "text/babel".

- Dentro dele é possivel criar uma função que vai representar
  um componet do React, aonde é retornado um html.

- É usado o o método "render" do objeto "ReactDOM", para redeizar
  o component.

- o primeiro parametro é o component, que é informado em forma de div.

- E o segundo é o local que ele vai está sendo renderizado, é usado
  o "document.getElementById()", para pegar o local.

    <blockquete>

          <script type="text/babel">

            function AppComponent() {
              return <div> Meu App</div>
            }

            ReactDOM.render(<AppComponent />, document.getElementById('app'));

          </script>

    </blockquete>

# Conceitos basicos de React

- Testando a converção do babel nesse site:

  https://babeljs.io

- Criando um component

<blockquete>

        function App() {
          return <div id="container">Meu App2</div>
        }

</blockquete>

- O Babel transforma por de baixo dos panos.

<blockquete>

        function App ( ){

          return React.createElement('div', { id: 'container' }, 'Meu App2')

        }

</blockquete>

### Criando componente usando classe

- Deve primeiro usar o "extends" na classe.
- Use o método "render" para poder renderizar o DOM.

<blockquete>

          class Button extends React.Component {
            render() {
              return <button className="btn">Comprar Agora</button>
            };
          }

</blockquete>

### Colocando um component dentro do outro.

- Apenas chama a tag do componente existente.

<blockquete>

          class Button extends React.Component {
            render() {
              return <button className="btn">Comprar Agora</button>
            };
          }

          // Component Titulo
          const Titulo = () => {
            const numero = Math.random() * 1000;

            return <h1>Meu Titulo {numero}</h1>
          }

          // arrowFunction
          const App2 = () => {
            return <div>Meu App2

              <Titulo />
              <br />
              <Button />
              <br />
              <div>
                compre aqui também.(reultilizando o botão)
                <Button />
              </div>
            </div>
          }

</blockquete>

### Trabalhando com eventos.

- Cria um component, dentro dele uma função que recebe evento.
- Retorna uma div com botão que tem evento de "onClick".
- E aplica dentro do evento com chaves, o nome da função.

<blockquete>

        const Produtos = () => {
          function handleClick(event) {
            alert('Comprou: ' + event.target.innerText);
          }

          return (
            <div>
              <button onClick={handleClick}>Camisa</button>
              <button onClick={handleClick}>Bermuda</button>
            </div>
          );
        };

        const Main2 = () => {
          return <div>

            <h3>React Evento</h3>
            <Produtos />

          </div>
        }

        ReactDOM.render(<Main2 />, document.getElementById('appEvent'));

</blockquete>

### Hooks

- Sempre retorne algo, nem que seja null.
- Bota os () no returne para poder quebrar linha.
- Sempre tenha uma div pai para todos os elementos do DOM.

- Tem que por a função "setContador" dentro de outra função, se não gera um loot infinito.
- é preciso desestruturar o React.useState(0), para manipular os valores dele.

<blockquete>

      const Compras = () => {

          const [contador, setContador] = React.useState(0);
          function comprar() {
            setContador(contador + 1);
          }


          return (
            <div>
              <p>Total: {contador}</p>
              <p>Preço: R$ {contador * 250}</p>
              <button onClick={comprar}>Comprar</button>
            </div>
          )
      };


      const Main3 = () => {
        return <div>

          <h3>React Hook</h3>
          <Compras />

        </div>
      }

</blockquete>

# React vs JS puro

- JS

<blockquete>

      <div id="app-javascript">
        <p>Total: <span id="total"></span></p>
        <p>Preço: R$ <span id="preco"></span></p>
        <button id="button">Comprar</button>
      </div>

      <script type="application/javascript">
        const button = document.getElementById('button');
        const total = document.getElementById('total');
        const preco = document.getElementById('preco');

        let contador = 1;

        function atualizarValores(contador) {
          total.innerText = contador;
          preco.innerText = contador * 250;
        }
        atualizarValores(contador);

        function handleClick() {
          contador = contador + 1;
          atualizarValores(contador + 1);
        }

        button.addEventListener('click', handleClick);
      </script>

</blockquete>

- React

<blockquete>

      <div id="app-react"></div>

      <script type="text/babel">
        const Comprar = () => {
          const [contador, setContador] = React.useState(1);

          return (
            <div>
              <p>Total: {contador}</p>
              <p>Preço: R$ {contador * 250}</p>
              <button onClick={() => setContador(contador + 1)}>Comprar</button>
            </div>
          );
        };

        ReactDOM.render(<Comprar />, document.getElementById('app-react'));
      </script>

</blockquete>

# 0204 Webpack e Babel

- Nunca que em uma aplicação de produção ira usar link do React nem do Babel.

### WebPack

- Agrupa(bundle) o código do seu aplicativo.
- Permite definirmos os componentes em diferentes arquivos para melhor organização.
- Facilita a importação de codigo externo instalado via NPM.
- https://webpack.js.org/

### Babel

- Transforma JSX em função de React.
- Transforma JS novo em JS angitgo.

### webpack Mínimo (instalando o basico para um projeto React)

- Iniciar um pacote npm na pasta do seu aplicativo

<blockquete>

    npm init -y

</blockquete>

- Instalar o webpack, webpack-cli e webpack-dev-server

  - webpack: o proprio.
  - webpack-cli: linhas de comandos.
  - webpack-dev-server: um miniservidor que é gerado pelo webpack.
  - --save-dev: salva como uma dependencia de desenvolvimento.

<blockquete>

        npm install webpack webpack-cli webpack-dev-server --save-dev

</blockquete>

- Criar arquivos mínimos

<blockquete>

- index.html
  -src/
  -index.js

</blockquete>

- Modifica no arquivo package.json, na parte de script, os comandos "start"
  e "build".
- start: executa em desenvolvimento, injeta o hot para fazer reload.
- build: cria arquivos finais, reune todos os arquivos juntando em um só.

<blockquete>

    "start": "webpack serve --mode development --open --hot",
    "build": "webpack --mode production"

</blockquete>

- instala o React e React-dom

<blockquete>

      npm install react react-dom

</blockquete>

- Executa usando npm start.

- Deve sempre importar as classes do React.

- Com isso é possivel isolar o codigo.
- Cria um arquivo chamado "App.js", e cria um link.

<blockquete>

      import React from 'react';

      const App = () => {
        return React.createElement(
          'a',
          { href: 'https://www.origamid.com' },
          'Origamid',
        );
      };

      export default App;

</blockquete>

- Pode chamar ele no arquivo "Index.js"

<blockquete>

      import React from 'react';
      import ReactDOM from 'react-dom';
      import App from './App';

      ReactDOM.render(App(), document.getElementById('root'));

</blockquete>

- Porem precisamos do Babel para transformar esse codigo,
  então devemos refatorar futuramente.

### Babel Minimo.

- Instala o comando o core do babel.
- Instala o bale preset- react: porq o babel não foi feito para o react, e sim para
  transformar JS novo em velho.
- Instala o babel-loader: O webpack vem leve, com quase nada, ele serve para ter acesso
  aos load e ter mais lib.

<blockquete>

          npm install @babel/core @babel/preset-react babel-loader --save-dev

</blockquete>

- Criar o webpack.config.js para configurarmos o babel no webpack

<blockquete>

      module.exports = {
        // Nos módulos
        module: {
          // Aplique as seguintes regras
          rules: [
            {
              // Nos arquivos que terminam ($) com .js
              test: /\.js$/,
              // Não procure nada em node_modules
              exclude: /node_modules/,
              // Use o seguinte:
              use: {
                // Babel
                loader: 'babel-loader',
                // Com as opções padrões para o React
                options: {
                  presets: ['@babel/preset-react'],
                },
              },
            },
          ],
        },
      };

</blockquete>

### Loaders (CSS)

- instala o load do css, tem que parar a aplicação para instalar.

<blockquete>

      npm install style-loader css-loader --save-dev

</blockquete>

- Inclui uma regra.

<blockquete>

          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },

</blockquete>

- cria um arquivo css chamado ""

<blockquete>

      a {
      font-size: 1.5rem;
      text-decoration: none;
      font-family: Arial;
      color: tomato;
      }

</blockquete>

- arquivo app.js

<blockquete>

    import './App.css';

</blockquete>

# npx create-react-app (A forma simples e rapida de criar um projeto)

- Executa o comado mais um nome do projeto "appauto"

- cria um projeto direto da nuvem.

<blockquete>

      npx create-react-app meuApp02

</blockquete>

# Ambiente Curso

- Cria um projeto de forma rapida usando o comando do npx.

- remove os arquivos que não for usar, deixa apenas o index.js e App.js

- na pasta public, no arquivo index.html, bota um css.

<blockquete>

    <link rel="stylesheet" href="%PUBLIC_URL%/style.css" />

</blockquete>

- o codigo "%PUBLIC_URL%" antes do cominho é um comando webpack que ajuda a localizar o arquivo.

- cria o arquivo css chamado "style".

# JSX 1

- No HTML usado no React, o nome "class" é trocado para "className".
- E o nome "for" foi trocado para "htmlFor".
- Podemos envolver o nosso DOM no <React.Fragment>, ao inves de por em uma div.
- ou está usando o "<></>", também é aceito para envolver o DOM.
- camelCase nos atributos do HTML do React.

### Funções no JS no HTML.

- Exemplos:

<blockquete>

        import React from 'react';

        const App = () => {
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
            </>
          );
        };

        export default App;

</blockquete>

# JSX 2

- O JSX irá listar cada um dos itens da array. Ele não irá separar ou colocar vírgula, é você que deve modificar a array para o resultado desejado.

- Cada item do array precisa de uma key.

- o Map ajuda muito a trabalhar com array no JSX

- exemplo:

<blockquete>

      const JsxArray = () => {
        const produtos = ['Notebook', 'Smartphone', 'Tablet'];

        const livros = [
          { nome: 'A Game of Thrones', ano: 1996 },
          { nome: 'A Clash of Kings', ano: 1998 },
          { nome: 'A Storm of Swords', ano: 2000 },
        ];

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
            <h4>Exercicio2</h4>
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

</blockquete>

# JSX Arrays 1

- exemplos no codigo.

# Eventos

- Guardar o estado do DOM não é o mais indicado, veremos mais tarde como fazer isso com Hooks.

- Eventos no window/document ou qualquer elemento fora do React, devem ser adicionados com JavaScript normalmente, usando o addEventListener.

- Esse tipo de evento será adicionado com o hook useEffect.]

- Lista de eventos: https://reactjs.org/docs/events.html

# Component

- O ideal é dividir o aplicativo em pequenos componentes para facilitar a manutenção do mesmo. Iremos trabalhar durante o curso com os chamos componentes funcionais.

-Não existe limite para a composição de componentes, eles podem ser desde componentes gerais como Header e Footer, até micro componentes como Input e Button.

-Um componente deve sempre retornar algo. O retorno pode ser qualquer tipo de dado aceitado pelo JSX (string, array, um elemento JSX, null e etc).

-Um componente deve sempre retornar um elemento único no return. Caso você deseje retornar mais de um elemento, envolva os mesmos em uma div ou dentro do <React.Fragment></React.Fragment> ou <></>

<blockquete>

</blockquete>

# Propriedade

- É comum desestruturarmos as propriedades.

<blockquete>

      const Titulo = ({ cor, texto }) => {
        return <h1 style={{ color: cor }}>{texto}</h1>;
      };

      const App = () => {
        return (
          <section>
            <Titulo texto="Meu Primeiro Título" cor="blue" />
            <Titulo texto="Meu Segundo Título" cor="red" />
          </section>
        );
      };

</blockquete>

- Se utilizarmos o componente abrindo e fechando o mesmo, o conteúdo interno deste será acessado através da propriedade children.

<blockquete>

    const Titulo = (props) => {
      return <h1>{props.children}</h1>;
    };

    const App = () => {
      return (
        <section>
          <Titulo>Meu Primeiro Título</Titulo>
          <Titulo>
            <p>Título 2</p>
            <p>Título 3</p>
          </Titulo>
        </section>
      );
    };

</blockquete>

-Usamos o rest e spread quando não sabemos todas as propriedades que um componente pode receber.

- oque não foi difinido ele joga a propriedade naturalmente.

<blockquete>

    import React from 'react';

    const Input = ({ label, id, ...props }) => {
      return (
        <div>
          <label htmlFor={id}>{label}</label>
          <input id={id} type="text" {...props} />
        </div>
      );
    };

    export default Input;

</blockquete>

<blockquete>

</blockquete>

<blockquete>

</blockquete>

<blockquete>

</blockquete>

<blockquete>

</blockquete>

<blockquete>

</blockquete>

<blockquete>

</blockquete>

<blockquete>

</blockquete>

<blockquete>

</blockquete>
