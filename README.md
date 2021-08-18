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

-

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
