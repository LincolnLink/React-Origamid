# React-Origamid

# Ferramentas

- live server
- Prettier
- Origamid next
- ES7 React/Redux/GraphQL/React-Native snippets

# JavaScript

- Exemplos no codigo com comentarios.

# JS para praticar

- Set : Como se fosse um array, mas ele não guarda itens repetidos.

- exemplo:

<blockquete>

    const set1 = new Set();

    set1.add(func1);

</blockquete>

# Comandos basicos

- Criando um projeto do zero

 <blockquote>

npx create-react-app my-app

 </blockquote>

# Estudo dos principais arquivos

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

# useState

- Estado: O estado de uma aplicação representa as características dela naquele momento. Por exemplo: os dados do usuário foram carregados, o botão está ativo, o usuário está na página de contato e etc.

- Hooks: Os Hooks são funções especiais do React que permitem controlarmos o estado e o ciclo de vida de componentes funcionais. Isso antes só era possível com classes.

- React.useState: O useState é uma função que retorna uma Array com 2 valores. O primeiro valor guarda o dado do estado atual, pode ser qualquer tipo de dado como strings, arrays, números, boolean, null, undefined e objetos. O segundo valor é uma função que pode ser utilizada para modificarmos o estado do primeiro valor.

Quando a função de modificação do estado é ativada, todos os componentes que dependerem do estado, serão renderizados novamente e os seus filhos também. É isso que garante a reatividade de componentes funcionais no React.

- Múltiplos Estados: Não existem limites para o uso do useState, podemos definir diversos no mesmo componente.

- Props: Podemos passar o estado e a função de modificação como propriedades para outros elementos.

<blockquete>

    const App = () => {
      const [modal, setModal] = React.useState(false);

      return (
        <div>
          <Modal modal={modal} setModal={setModal} />
          <ButtonModal setModal={setModal} />
        </div>
      );
    };

    export default App;

</blockquete>

<blockquete>

    const ButtonModal = ({ setModal }) => {
      return <button onClick={() => setModal(true)}>Abrir Modal</button>;
    };

    export default ButtonModal;

</blockquete>

<blockquete>

    const Modal = ({ modal, setModal }) => {
      if (modal === true)
        return (
          <div>
            Esse é um modal. <button onClick={() => setModal(false)}>Fechar</button>
          </div>
        );
      return null;
    };

    export default Modal;

</blockquete>

- Reatividade: Não modifique o estado diretamente. Utilize sempre a função de atualização do estado, pois ela que garante a reatividade dos componentes.

<blockquete>

      const App = () => {
        const [items, setItems] = React.useState(['Item 1', 'Item 2']);

        function handleClick() {
          // Errado. Modifique o estado apenas com a função de atualização (setItems)
          items.push('Novo Item');
        }

        function handleClickReativo() {
          // Correto. Eu desestruturo a array atual, criando uma nova e adiciono um novo elemento
          setItems([...items, 'Novo Item']);
        }

        return (
          <>
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
            <button onClick={handleClick}>Adicionar Item</button>
            <button onClick={handleClickReativo}>Adicionar Reativo</button>
          </>
        );
      };

</blockquete>

- Callback: Podemos passar uma função de callback para atualizar o estado. A função de callback recebe um parâmetro que representa o valor anterior e irá modificar o estado para o valor que for retonado na função.

Passa o método setModal como parametro para outro component, esse component atualiza o status usando
o método.

<blockquete>

    const App = () => {
      const [ativo, setAtivo] = React.useState(true);

      function handleClick() {
        // usando um callback
        setAtivo((anterior) => !anterior);
      }

      return (
        <button onClick={handleClick}>
          {ativo ? 'Está Ativo' : 'Está Inativo'}
        </button>
      );
    };

</blockquete>

- React.StrictMode : O modo estrito invoca duas vezes a renderização do componente, quando o estado é atualizado. Assim é possível identificarmos funções com efeitos coláterais (side effects) e eliminarmos as mesmas.

Funções com efeitos coláterais são aquelas que modificam estados que estão fora das mesmas.

# Teste de Hook

- O "StrictMode" duplica as chamada, para evitar que aconteça um efeito colateral.

- O que causa efeito colateral é por uma chamada de uma função, dentro de outra função.

- É sempre bom por os métodos set um abaixo do outro.

# useEffect

- O callback do useEffect é executado depois da renderização inicial.

- Ciclo de vida do component:

  - Momento que ele é renderizado na tela primeiramente.

  - Momento que ele é atualizado, por exemplo usando "set" função
    atualizadora.

  - Momento que o component some da tela, caso tenha um botão
    que ativa e desative.

- O useEffect: é usando para ativar codigos dependendo do ciclo
  de vida do component.

  - É bom por um array como segundo parametro.

  - Essa array é um "array de dependencia".

  - Se o estado do item colocado no array mudar, o useEffect irar executar novamente.
  - Se não mudar, não executa novamente.

  - Pode ter mais de um useEffect.
  - Caso não bote o estado no array de dependencia, e tenha algum
    codigo dentro do useEffect, ele irar informar, que ele não será
    executado.

    - Ou informe o estado para o array de dependencia, ou remove o array de dependencia.

    - useEffect sabe diferenciar uma constante estatica de um valor de estado.

- OBS: O component é uma função em JS, que executa o tempo todo, com useEffect() você pode ter o controle usando [] (o array de dependencia) , que no caso é o segundo parametro, só é executado oque está no useEffect() se o estado que está dentro do array de dependencia mudar, se estiver vazio só vai executar uma unica vez.

- Comandos:

  - Para executar uma unica vez: Deve por a função em uma useEffect(), e depois por um array vazio, como segundo parametro.

  - Para executar quando um useState mudar: Deve por a função em um useEffect(), com array vazio, e ir mudando pelo "set".

  - Para ter varios efeitos independente: duplica o useEffect, e bota o valor do useStatus no array de dependecia.

  - Exemplo: mudar titulo e resetar o contar:

  </blockquete>

        const [contar, setContar] = useStatus(0);
        const [modal, setModal] = useStatus(false);

        useEffect(()=>{
          documento.title = 'Total' + contar;
        }. [contar]);

        useEffect(()=>{
        setContar(0);
        }. [modal]);

  <blockquete>

- Efeito antes de desmontar: caos um elemento que sai da tela, Antes de Desmontar
  As vezes precisamos executar um efeito sempre que um componente for desmontado. Para isso utilizamos um callback no retorno do callback do efeito.

  </blockquete>

        const Produto = () => {
        // Utilizamos o useEffect para adicionarmos eventos direto ao DOM
        React.useEffect(() => {
          function handleScroll(event) {
            console.log(event);
          }
          window.addEventListener('scroll', handleScroll);
          // Limpa o evento quando o elemento é removido do DOM.
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);

        return <p style={{ height: '200vh' }}>Produto</p>;
      };

  <blockquete>
  <blockquete>

        const DesmontarUseEffect = () => {
        const [ativo, setAtivo] = React.useState(false);

        return (
          <div>
            <p>Meu App</p>
            <button onClick={() => setAtivo(!ativo)}>Abrir</button>
            {ativo && <Produto />}
          </div>
          );
        };

  </blockquete>

### OBS: sempre use um ternario para exibir dados!

<blockquete>

    <div>
        {dados && (
          <div>
            <h1>{dados.nome}</h1>
          </div>
        )}

    </div>

</blockquete>

# useRef

- Retorna um objeto com a propriedade current. Esse objeto pode ser utilizado para guardarmos valores que irão persistir durante todo o ciclo de vida do elemento. Geralmente usamos o mesmo para nos referirmos a um elemento do DOM, sem precisarmos utilizar o querySelector ou similar.

-OBS:

1° Deve declarar uma const recebendo o "React.useRef()".
2° Essa consta faz referencia a algum DOM.
3° Pode usar a propriedade current para recuperar a referencia do DOM.

<blockquete>

    const video = React.useRef();

    React.useEffect(() => {
      console.log(video.current);
    }, []);

    return <video ref={video}></video>;

</blockquete>

<blockquete>

    export const UseRefComponent2 = () => {
      const [comentarios, setComentarios] = useState([]);
      const [input, setInput] = useState('');
      const inputElement = React.useRef();

      React.useEffect(() => {}, []);

      // Pega o novo comentario e adiciona na lista de comentario.
      function handleClick() {
        //Uma forma diferente de adicionar item no array!
        setComentarios([...comentarios, input]);
        setInput('');
        inputElement.current.focus();
      }

      return (
        <>
          <ul>
            {comentarios.map((com) => (
              <li key={com}>{com}</li>
            ))}
          </ul>

          <input
            type="text"
            ref={inputElement}
            value={input}
            onChange={({ target }) => setInput(target.value)}
          />
          <br />
          <button onClick={handleClick}>Enviar</button>
        </>
      );
    };

</blockquete>

OBS: map também tem index, é o segundo parametro do callback do map,
o index serve como key.

- UseRef, pode ser usado para ser referencia de valores, sem ser reativo, e sim valores que pode ser usado mais tarde, não confunda com variavel, porq variavel perde o valor quando é renderizado novamente quando atualiza a tela, já o ref não perde o valor.

#useMemo

- performance.now(): informa o tempo que foi usado em milesegundos.

- useMemo: Guarda um valor ou calculo e executa apenas uma vez,
  é bom usar em calculos do JS pesados.

<blockquete>

      import React, { useState } from 'react';

      function operacaoLenta() {
      let c;
      for (let i = 0; i < 100000000; i++) {
      c = i + i / 10;
      }
      return c;
      }

      export const UseMemoTeste = () => {
      const [contar, setContar] = useState(0);

      const t1 = performance.now();
      const valor = operacaoLenta();
      console.log(performance.now() - t1);

      return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
      };

</blockquete>

- Usando o useMemo, para deixar mais rapido.

<blockquete>

    import React, { useState, useMemo } from 'react';

    function operacaoLenta() {
    let c;
    for (let i = 0; i < 100000000; i++) {
    c = i + i / 10;
    }
    return c;
    }

    export const UseMemoTeste = () => {
    const [contar, setContar] = useState(0);

    const t1 = performance.now();
    const valor = useMemo(() => operacaoLenta(), []);
    //console.log(valor);
    console.log(performance.now() - t1);

    return <button onClick={() => setContar(contar + 1)}>{contar}</button>;

};

</blockquete>

#useCallback

- Permite definirmos um callback e uma lista de dependências do callback.
  Esse callback só será recriado se essa lista de dependências for modificada,
  caso contrário ele não irá recriar o callback.

- Diferente da função que cria no botão, o useCallback constroi apenas uma vez a função
  na hora.

<blockquete>

      import React, { useState } from 'react';

      export const UseCallback = () => {
        const [contar, setContar] = useState(0);

        const handleClick = () => {
        setContar(contar + 1);
        };

        return (
        <>
        <button onClick={handleClick}>{contar}</button>
        </>
        );
      };

</blockquete>

- Como fica usando useCallback.

<blockquete>

      import React, { useState, useCallback } from 'react';

      export const UseCallback = () => {
        const [contar, setContar] = useState(0);

        const handleClick = useCallback(() => {
          setContar((contar2) => contar2 + 1);
        }, []);

        return (
          <>
            <h1>useCallback</h1>
            <button onClick={handleClick}>{contar}</button>
          </>
        );
      };

</blockquete>

- Teste do useCallback

<blockquete>

      import React, { useState, useCallback } from 'react';

      const set1 = new Set();
      const set2 = new Set();

      export const Usecallbacktestefilho = () => {
      const func1 = () => {
      console.log('Teste');
      };

      const func2 = useCallback(() => {
      console.log('Teste - com useCallback');
      }, []);

      set1.add(func1);
      set2.add(func2);

      console.log('Set1:', set1);
      console.log('Set2 - useCallback:', set2);
      console.log('------');

      return (
      <div>
      <h4>Filho:</h4>
      <p onClick={func1}>Produto 1</p>
      <p onClick={func2}>Produto 2</p>
      </div>
      );
      };

      export const Usecallbacktestepai = () => {
      const [contar, setContar] = useState(0);

      return (
      <div>
      <h1>Teste do callback: Mostra que não muda o desenpenho</h1>
      <Usecallbacktestefilho />
      <h4>Pai</h4>
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
      </div>
      );
      };

</blockquete>

#UseContext

- Uma forma de passar dados de um component para o outro, de forma mais dinamica,
  sem usar o props.

- Primeiro deve criar um component ~GlobalContext~ que vai ter o createContex() !

- Nele vai ter toda a regra dos dados que vai ser passado.

<blockquete>

    import React from 'react';

    export const GlobalContext = React.createContext();

    //Provider
    export const GlobalStorage = ({ children }) => {
      const [dados, setDados] = React.useState(null);

      //Buscando os produtos
      React.useEffect(() => {
        fetch('https://ranekapi.origamid.dev/json/api/produto/')
          .then((response) => response.json())
          .then((json) => setDados(json));
      }, []);

      function limparDados() {
        setDados(null);
      }

      return (
        <GlobalContext.Provider value={{ dados, limparDados }}>
          {children}
        </GlobalContext.Provider>
      );
    };

</blockquete>
 
- Depois cria o component filho, que vai receber os dados, nesse caso foi criado o component produto e limpar.

- produto recebe os dados e limpar recebe um botao que limpa os dados.

<blockquete>

    import React from 'react';
    import { GlobalContext } from '../../src/GlobalContext/index';

    const Produto = () => {
      const { dados } = React.useContext(GlobalContext);
      //debugger;

      if (dados === null) return null;

      return (
        <div>
          <ul>
            Produto:{''}
            {dados.map((produto) => (
              <li key={produto.id}>{produto.nome}</li>
            ))}
          </ul>
        </div>
      );
    };

    export default Produto;

</blockquete>

- component limpar

<blockquete>

    import React from 'react';
    import { GlobalContext } from '../GlobalContext';

    const Limpar = () => {
      const { limparDados } = React.useContext(GlobalContext);
      return <button onClick={limparDados}>Limpar</button>;
    };

    export default Limpar;

</blockquete>

- No component APP, deve ser chamado os component, botando o filho dentro do pai.

<blockquete>

    import './App.css';
    import { GlobalStorage } from './GlobalContext/index';
    import Produto from './Produto/index';
    import Limpar from './Limpar';

    function App() {
      return (
        <div className="App">
          <GlobalStorage>
            <Produto />
            <Limpar />
          </GlobalStorage>
        </div>
      );
    }

    export default App;

</blockquete>

# Custom Hooks

- Como criar um hook personalizado, ele retorna um array de valores, e não retorna elementos.

- [cuidado] No localStorage so se salva string!

- Vai ser criado um hook personalizado para guardar valores no localStorage!.

- O valor iniciar, é definido com uma verificação, se existe o valor no localStorage ou não.

- Cria um efeito para quando valor for modificado, trocar o valor no useState.

<blockquete>

    import React, { useState } from 'react';

    const useLocalStorage = (key, inicial) => {
      const [state, setState] = useState(() => {
        const local = window.localStorage.getItem(key);

        return local ? local : inicial;
      });


      useEffect(() => {
        window.localStorage.setItem(key, state);
      }, [state, key]);

      return [state, setState];
    };
    export default useLocalStorage;

</blockquete>

- Usando o "useLocalStorage"!

<blockquete>

    import './App.css';
    import React from 'react';
    import useLocalStorage from './useLocalStorage';

    function App() {
      const [produto, setProduto] = useLocalStorage('produto', '');

      function handleClick({ target }) {
        setProduto(target.innerText);
      }

      return (
        <div>
          <p>Produto preferido: {produto}</p>
          <button onClick={handleClick}>notebook</button>
          <button onClick={handleClick}>smartphone</button>
        </div>
      );
    }

    export default App;

</blockquete>

- OBS: Para tratar erro de funções asyncornas, se usa TRY E CATCH.

- É possivel descontruir request asyncrinas, porem antes deve ser definido.

# Custom Hooks 2

- Criando um hook personalizado que faz request no banco.

<blockquete>

      import React, { useState } from 'react';

      const useFetch = () => {
        const [data, setData] = useState(null);
        const [error, setError] = useState(null);
        const [loading, setLoading] = useState(null);

        // criar uma função para poder usar na hora que quiser!
        // O uso perfeito do "useCallback"
        const request = React.useCallback(async (url, options) => {
          let response;
          let json;
          try {
            setError(null);
            setLoading(true);
            response = await fetch(url, options);
            json = await response.json();
            //TODO - explica depois como se trata um retorno errado.
            setLoading(false);
          } catch (erro) {
            json = null;
            setError('erro');
          } finally {
            setData(json);
            setLoading(false);

            //retorna para o component ter acesso
            return { response, json };
          }
        }, []);

        // Retorna como objeto para não precisar desestruturar
        // e pode pegar na orem que desejar.
        return { data, error, loading, request };
      };
      export default useFetch;

</blockquete>

- Como o hook personalizado que faz request é chamado.

<blockquete>

    import './App.css';
    import React, { useEffect } from 'react';
    import useLocalStorage from './useLocalStorage';
    import useFetch from './useFetch';

    function App() {
      const [produto, setProduto] = useLocalStorage('produto', '');
      const { request, data, loading, error } = useFetch();

      useEffect(() => {
        async function fetchData() {
          const { response, json } = await request(
            'https://ranekapi.origamid.dev/json/api/produto',
          );
          console.log(response, json);
        }
        fetchData();
      }, [request]);

      function handleClick({ target }) {
        setProduto(target.innerText);
      }
      if (error) return <p>{error}</p>;
      if (loading) return <p>Carregando...</p>;
      if (data)
        return (
          <div>
            <p>Produto preferido: {produto}</p>
            <button onClick={handleClick}>notebook</button>
            <button onClick={handleClick}>smartphone</button>
            <br />

            {data.map((produto) => (
              <div key={produto.id}>
                <h1>{produto.nome}</h1>
              </div>
            ))}
          </div>
        );
      else return null;
    }

    export default App;

</blockquete>

# Regras - codigo que retorna erros.

- useEffect não pode ser usado dentro de uma confição.

- Não pode usar o useEffect dentro de uma função.

- Não pode usar useEffect dentro de um For ou algum loop.

- Só pode usar hook dentro de component ou customHook.

- Pode transformar uma função em customHook apenas botando
  o termo "use" na frente do nome da funcao!

# Form

### Input

- preventDefault() irá prevenir o comportamento padrão, que seria de atualizar a página, enviando uma requisição para o que estiver em

- Não precisa por o evento de submit dentro do botão, ele pode ficar no formulario.

- Para multiplos campos, existe 2 formas.

  - 1: Criando varios "useState" para cada campo.
  - 2: Criando um objeto com varias propriedades,
    representando cada campos..

- Desestrutura os valores anteriores e passa os valores novos.
- Precisa informar o id alem do value.

-Exemplo:

<blockquete>

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

</blockquete>

- Uma forma de deixar o formulario generico.

- Cria um array de objetos, botando o id, label e type.

- Use reduce quando for declarar o useState.

<blockquete>

            const [form, setForm] = React.useState(
              formFields.reduce((acc, field) => {
                return { ...acc, [field.id]: '' };
              }, {}),
            );

</blockquete>

- Use um map no array, para gerar varios input de forma dinamica.

<blockquete>

            <form onSubmit={handleSubmit}>
                {formFields.map(({ id, label, type }) => (
                  <div key={id}>
                    <label htmlFor={id}>{label}</label>
                    <input
                      type={type}
                      id={id}
                      value={form[id]}
                      onChange={handleChange}
                    />
                  </div>
                ))}
                <button>Enviar</button>
                {response && response.ok && <p>Usuário Criado</p>}
            </form>

</blockquete>

<blockquete>

            import React, { useState } from 'react';

            const formFields = [
              {
                id: 'nome',
                label: 'Nome',
                type: 'text',
              },
              {
                id: 'email',
                label: 'Email',
                type: 'email',
              },
              {
                id: 'senha',
                label: 'Senha',
                type: 'password',
              },
              {
                id: 'cep',
                label: 'Cep',
                type: 'text',
              },
              {
                id: 'rua',
                label: 'Rua',
                type: 'text',
              },
              {
                id: 'numero',
                label: 'Numero',
                type: 'text',
              },
              {
                id: 'bairro',
                label: 'Bairro',
                type: 'text',
              },
              {
                id: 'cidade',
                label: 'Cidade',
                type: 'text',
              },
              {
                id: 'estado',
                label: 'Estado',
                type: 'text',
              },
            ];

            function Input02() {
              const [form, setForm] = React.useState(
                formFields.reduce((acc, field) => {
                  return { ...acc, [field.id]: '' };
                }, {}),
              );

              const [response, setResponse] = useState(null);

              function handleSubmit(event) {
                //??
                event.preventDefault();
                fetch('https://ranekapi.origamid.dev/json/api/usuario', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  //converte para JSON
                  body: JSON.stringify(form),
                }).then((response) => {
                  setResponse(response);
                });
              }

              function handleChange({ target }) {
                const { id, value } = target;
                setForm({ ...form, [id]: value });
              }
              return (
                <>
                  <p>Input - conceitos basicos - parte 2</p>
                  <form onSubmit={handleSubmit}>
                    {formFields.map(({ id, label, type }) => (
                      <div key={id}>
                        <label htmlFor={id}>{label}</label>
                        <input
                          type={type}
                          id={id}
                          value={form[id]}
                          onChange={handleChange}
                        />
                      </div>
                    ))}
                    <button>Enviar</button>
                    {response && response.ok && <p>Usuário Criado</p>}
                  </form>
                </>
              );
            }

            export default Input02;

</blockquete>

### TextArea

- Não precisa fechar

<blockquete>

            <textarea value={textarea}> onChange={({tareget})=>setTextearea(target.value)}
            rowns="5" />

</blockquete>

### Select

- Uma forma de criar um select, com a primeira opção vazia

<blockquete>

      <select value={select} onChange={({ target }) => setSelect(target.value)}>
              <option value="" disabled>
                Selecione
              </option>
              <option value="notebook">Notebook</option>
              <option value="smartphone">Smartphone</option>
              <option value="tablet">Tablet</option>
            </select>
            <p>{select}</p>

</blockquete>

### RaioButtom

- Pode ser usado o checked ou o name para verificar.
- https://www.origamid.com/slide/react-completo/#/0404-radio/3

<blockquete>

        <h2>Cor</h2>
              <label>
                <input
                  type="radio"
                  value="azul"
                  checked={cor === 'azul'}
                  onChange={({ target }) => setCor(target.value)}
                />
                Azul
              </label>
              <label>
                <input
                  type="radio"
                  value="vermelho"
                  checked={cor === 'vermelho'}
                  onChange={({ target }) => setCor(target.value)}
                />
                Vermelho
              </label>

</blockquete>

### Checkbox

- exemplo de apenas um selecionado e de multiplos

- https://www.origamid.com/slide/react-completo/#/0405-checkbox/1

- praticar mais em casos reais.

# Conceito de component generico

### componet generico input

- nomes de valores iguais as propriedade, pode desestruturar.

- component input generico

<blockquete>

        const InputGenerico = ({ id, label, setValue, value, ...props }) => {
          return (
            <div>
              <label htmlFor={id}>{label}</label>
              <input
                type="text"
                id={id}
                name={id}
                value={value}
                onChange={({ target }) => setValue(target.value)}
                {...props}
              />
              <br />
            </div>
          );
        };

        export default InputGenerico;

</blockquete>

### component generico select

- Quem realmente inicia o valor do select é a propriedade "value" .

- Passa as propriedade do useState para o select ficar reativo, value com value, e setValue com o onChance passando o target desestruturado.

- exemplo:

<blockquete>

          import React, { useState } from 'react';
          import './style.css';

          const SelectGenerico = ({ label, options, value, setValue, ...props }) => {
            return (
              <div>
                <label>{label}</label>

                <select
                  value={value}
                  onChange={({ target }) => setValue(target.value)}
                  {...props}
                >
                  <option value="" disabled>
                    Selecione
                  </option>

                  {options.map((op) => (
                    <option key={op} value={op}>
                      {op}
                    </option>
                  ))}
                </select>

                <br />
              </div>
            );
          };

          export default SelectGenerico;

</blockquete>

### component generico Radio

- A reatividade do radio, está vinculado com o checkd,
  se ele está checado ou não.

<blockquete>

          import React, { useState } from 'react';
          //import './style.css';

          const RadioGenerico = ({ options, value, label, setValue, ...props }) => {
            return (
              <>
                <h5>{label}</h5>
                {options.map((option) => (
                  <label key={option}>
                    <br />
                    <input
                      type="radio"
                      value={option}
                      checked={value == option}
                      onChange={({ target }) => setValue(target.value)}
                      {...props}
                    />
                    {option}
                  </label>
                ))}
              </>
            );
          };

          export default RadioGenerico;

</blockquete>

-

<blockquete>

</blockquete>

-

<blockquete>

</blockquete>

-

<blockquete>

</blockquete>
