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
