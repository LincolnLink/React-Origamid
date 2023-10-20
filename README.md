# React-Origamid

 - Curso: https://www.origamid.com/curso/react-completo/

# JS para praticar

  - Set : Como se fosse um array, mas ele não guarda itens repetidos.

  - exemplo:

  <blockquete>

      const set1 = new Set();

      set1.add(func1);

  </blockquete>

# React Completo - Ferramentas.

  - Instala o Nodejs, o npn ja vem no Nodejs.
  - Instala o Git.
  - Instala o Visual Studio Code.
  - Instala o plugin do google chrome(React developer Tools)

  - Plugin do Visual studio code(opcional)
    - live server
    - Prettier
    - Origamid next
    - ES7 React/Redux/GraphQL/React-Native snippets

# React Completo - JavaScript

 - Tudo é objeto
 - Arrow Function
 - Destructuring
 - Rest e Spread
 - Module(Export/Import)
 - Fetch
 - Async/Await
 - Arrays(map e filter)
 - Expressões

 - Exemplos no codigo com comentarios, no "01 - React Completo - JavaScript".

 - Pesquisar sobre o "This" na arrow function, que manter o pai.


# React Para Iniciantes - Adicionar React

 - Babel transforma JS novo para o antigo.

 - Babel transforma o jsx(não consegue ser lido pelo browser) em arquivos JS.

 - Criando uma instalação do React muito limpa usando link's.

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

 - Depois que imposta os arquivos é possivel criar componentes do React no HTML usando a tag <script>.

 <blockquete>

    <div id="root">
      Exemplo 01
    </div>

    <script type="text/babel">
      
      //Componente de botão.
      function Button01() {
        const [total, setTotal] = React.useState(0);
        return <button onClick={() => setTotal(total + 1)}>Adicionar {total}</button>
      }

      // Componente principal
      function App(){

        return <div>
            <h1>Aplicativo React</h1>
            <Button01 />
            <Button01 />
          </div>;
      }

      ReactDOM.render(<App />, document.getElementById('root'));

    <script>

 </blockquete>

 - O "ReactDOM" usa o método "render" para renderizar o componente principal, no HTML que tem o id "root", isso funciona por causa do Babel.

 - Dentro do componente principal é chamado o componente Button01, que é um componente funcional.

# React Para Iniciantes - React Básico.

 - Testando a converção do babel nesse site:

  https://babeljs.io

 ### Colocando um component funcional dentro do outro.

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

# React Para Iniciantes - React vs JS puro

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

# React Para Iniciantes - Ferramentas de Automação

 - Nunca que em uma aplicação de produção ira usar link do React nem do Babel.

 ### Bundle

  - Agrupa o codigo do aplicativo.
  - Permite definirmos os componentes em diferentes arquivos para melhor organização.
  - Facilita a importação de código externo e instalado via NPM
  - Outros tipos de Bundle: ESBuild, Rollup, Parcel, Turbopack, Webpack.
  - WebPack: https://webpack.js.org/, mais lento e mais famoso, o mais rapido é ESBuild.

 ### Transpiler
 
  - Transforma o JSX(return < div></ div>) em função de React(React.createElement()).
  - Transforma JavaScript novo 'const' em JavaScript antigo 'var'.
  - Babel, SWC, ESBuild.

 ### webpack Mínimo (instalando o basico para um projeto React)

  - Iniciar um pacote npm na pasta do seu aplicativo

<blockquete>

    npm init -y

</blockquete>

 - Depois disso cria um arquivo HTML, inicia a estrutura de html5.

<blockquete>

    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>React</title>
    </head>
    <body>
        <div id="root">

        </div>
        <script src="/main.js"></script>
    </body>
    </html>

</blockquete>

 - Instala o ESBuild

<blockquete>

    npm install esbuild

</blockquete>

 - Cola os script no arquivo package.json.
 - OBS: o exemplo antigo é feito com webpack.

<blockquete>

    "scripts": {
    "start": "esbuild --bundle src/main.jsx --outfile=main.js --servedir=./ --watch",
    "build": "esbuild --bundle src/main.jsx --outfile=main.js"
    },

</blockquete>

 - Cria a pasta de entrada "src" e cria o arquivo main.js.
 - No arquivo main.js, bota um "console.log("teste");"
 - Pode testar usando o comando "npm start", consulta no caminho: "http://127.0.0.1:8000/".
 - Cria um arquivo chamado "somar.js". 

 - Executa o codigo "npm run build".
 - Ele gera um arquivo chamado main.js.

 ### Segundo teste o arquivo main é um "main.jsx".
  
  - Executa o npm run build.  

 ### Instalando o React e React-dom. 
 
<blockquete>

      npm install react react-dom

</blockquete>

 - No arquivo main.jsx, cole o codigo.

<blockquete>

    import ReactDOM from 'react-dom/client';
    import React from 'react';
    import App from './App';

    ReactDOM.createRoot(document.getElementById('root')).render(<App />);

</blockquete>

 - Cria o arquivo "App.jsx" e bota o conteudo:
 
<blockquete>

    import React from 'react';

    const App = () => {
      return <a href="https://www.origamid.com">Origamid</a>;
    };

    export default App;

</blockquete>

 - Inicie o desenvolvimento com:

<blockquete>

      npm start

</blockquete>

  - Crie a build final com

<blockquete>

      npm run build
      
</blockquete>


 - OBS: Essa forma é limpa, porem estária faltand outras configurações que daria muito trabalho.


# React Para Iniciantes - Ferramenta Front End (A melhor forma de criar um projeto React)[Vite].

  - Vite: Cria um ambiente de desenvolvimento já configurado e otimizado para a criação de aplicativos com React.
  - OBS: muito melhor que "npx create-react-app", "npx create-react-app" usa webpack que é muito lento.
  - https://vitejs.dev/
  - Na pasta que deseja instalar:
  - Escolha React. 
  
<blockquete>

    npm create vite@latest .
    npm install
      
</blockquete>

 - Inicia o desenvolvimento

<blockquete>

    npm run dev

</blockquete>

 - Cria a build final

<blockquete>

    npm run build

</blockquete>

 - Arquivos minimos necessario:

 - https://www.origamid.com/slide/react-completo/#/0205-ferramenta-front-end/3

# React Para Iniciantes - Ambiente Curso

 - remove os arquivos que não for usar, deixa apenas o index.js e App.js

 - na pasta public, no arquivo index.html, bota um css.

<blockquete>

    https://www.origamid.com/slide/react-completo/#/0206-ambiente-do-curso/3

</blockquete>

 - O modo estrito do React permite pegarmos alguns bugs no desenvolvimento.
 
<blockquete>

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );

</blockquete>

 - Durante o curso você verá eu utilizando .js em arquivos jsx, o create-react-app permitia isso, porém o Vite não permite.

 - Então todo arquivo novo que você criar, use .jsx.

 - index.js > main.jsx

# React Para Iniciantes - JSX 1

 - Siginificado: Java script estendio, ou js XML, da novas funcionabilidade, permite usado o html ou xml no js, depois o babel converte para função js.

 - Exemplo: https://www.origamid.com/slide/react-completo/#/0207-jsx/1

 - Atributos: 
  - No HTML do React, o nome "class" é trocado para "className" para fazer referencia ao atributo class de css.
  - E o nome "for" foi trocado para "htmlFor".
  - Podemos envolver o nosso DOM no <React.Fragment>, ao inves de por em uma div.
  - ou está usando o "<></>", também é aceito para envolver o DOM.
  - camelCase nos atributos com nomes compostos do HTML do React.

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

# React Para Iniciantes - JSX 2 (Rodando no 06 - React Para Iniciantes)[Exercicio]

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

 - map: transforma uma lista em outra coisa.
 - Number: converte o tipo string no tipo numero.
 - replace: troca o primeiro valor, pelo segundo valor.
 - reduce: passa um callback(uma função), com 2 parametros, o valor anterior, e o valor atual, e executa calculo com eles.
 - Pode usar o && no lugar do ternario caso queira exibir uma string dinamicamente.

# React Para Iniciantes - JSX Arrays 1

 - O JSX irá listar cada um dos itens da array. Ele não irá separar ou colocar vírgula, é você que deve modificar a array para o resultado desejado.

<blockquete>

    const App = () => {
      const produtos = ['Notebook', 'Smartphone', 'Tablet'];

      return <p>{produtos}</p>;
    };

</blockquete>

 - O JSX necessita de uma key única para cada elemento da Array. https://reactjs.org/docs/lists-and-keys.html

<blockquete>

    const App = () => {
      const empresas = [<li key="e1">Apple</li>, <li key="e2">Google</li>];

      return <ul>{empresas}</ul>;
    };

</blockquete>

 - Map: É comum usarmos o map direto na array como uma expressão, retornando um elemento para cada item novo da Array.
 
<blockquete>

    const App = () => {
      const filmes = ['Before Sunrise', 'Before Sunset', 'Before Midnight'];

      return (
        <ul>
          {filmes.map((filme) => (
            <li key={filme}>{filme}</li>
          ))}
        </ul>
      );
    };

</blockquete>

 - Array de Objetos

<blockquete>

    const App = () => {
      const livros = [
        { nome: 'A Game of Thrones', ano: 1996 },
        { nome: 'A Clash of Kings', ano: 1998 },
        { nome: 'A Storm of Swords', ano: 2000 },
      ];

      return (
        <ul>
          {livros
            .filter((livro) => livro.ano >= 1998)
            .map((livro) => (
              <li key={livro.nome}>
                {livro.nome}, {livro.ano}
              </li>
            ))}
        </ul>
      );
    };
    
</blockquete>

- Pode desestruturar o objeto, ficaria assim:

<blockquete>

    <ul>
        {livros
          .filter((livro) => livro.ano >= 1998)
          .map(({nome, ano}) => (
          <li key={nome}>
            {nome}, {ano}
          </li>
        ))}
    </ul>

</blockquete>

 - Exercicio:

<blockquete>

      const produtos = [
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
        return (
          <section>
            {produtos
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
        );
      };

</blockquete>

# React Para Iniciantes - Eventos

 - Guardar o estado do DOM não é o mais indicado, veremos mais tarde como fazer isso com Hooks.

 - Eventos no window/document ou qualquer elemento fora do React, devem ser adicionados com JavaScript normalmente, usando o addEventListener.

 - Esse tipo de evento será adicionado com o hook useEffect.]

 - Lista de eventos: https://reactjs.org/docs/events.html


 - Podemos atribuir eventos diretamente aos elementos JSX como um atributo. Os eventos são sintáticos, ou seja, são criados pelo próprio React porém seguindo as especificações da W3C (e funcionam igualmente nos diversos browsers que o React suporta).

<blockquete>

    const App = () => {
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

</blockquete>

 - Eventos no window/document ou qualquer elemento fora do React, devem ser adicionados com JavaScript normalmente, usando o addEventListener.

<blockquete>

      const App = () => {
        function handleScroll(event) {
          console.log(event);
        }
        window.addEventListener('scroll', handleScroll);

        return <div style={{ height: '200vw' }}>Div</div>;
      };

</blockquete>


# React Para Iniciantes - Componentes

 - O ideal é dividir o aplicativo em pequenos componentes para facilitar a manutenção do mesmo. Iremos trabalhar durante o curso com os chamos componentes funcionais.

 - Não existe limite para a composição de componentes, eles podem ser desde componentes gerais como Header e Footer, até micro componentes como Input e Button.

 - Um componente deve sempre retornar algo. O retorno pode ser qualquer tipo de dado aceitado pelo JSX (string, array, um elemento JSX, null e etc).

 - Um componente deve sempre retornar um elemento único no return. Caso você deseje retornar mais de um elemento, envolva os mesmos em uma div ou dentro do <React.Fragment></React.Fragment> ou <></>

# React Para Iniciantes - Propriedades

 - Assim como uma função pode receber argumentos, podemos também passar argumentos aos componentes. Esses são conhecidos como propriedades ou props.
 
<blockquete>

      const Titulo = (props) => {
        return <h1>{props.texto}</h1>;
      };

      const App = () => {
        return (
          <section>
            <Titulo texto="Meu Primeiro Título" />
            <Titulo texto="Meu Segundo Título" />
          </section>
        );
      };

</blockquete>

 - Podemos passar quantas propriedades quisermos.

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

 - Usamos o rest e spread quando não sabemos todas as propriedades que um componente pode receber.

 - O que não foi difinido ele joga a propriedade naturalmente, usando o "...props".

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

 - Na chamada do component, caso passe um type diferente, ele vai sobre escrever o type definido no componente.
 
<blockquete>

    <Input id="senha" type="password" label="Senha" />

</blockquete>

 - pode passar qualquer tipo de dados.

 ### O desafio está no projeto "10 - React Para Iniciantes - Propriedades"


# React Hooks - useState

 - Estado: O estado de uma aplicação representa as características dela naquele momento. Por exemplo: os dados do usuário foram carregados, o botão está ativo, o usuário está na página de contato e etc.

 - Hooks: Os Hooks são funções especiais do React que permitem controlarmos o estado e o ciclo de vida de componentes
 funcionais. Isso antes só era possível com classes.
 
<blockquete>

      const App = () => {
        const [ativo, setAtivo] = React.useState(true);

        return (
          <button onClick={() => setAtivo(!ativo)}>
            {ativo ? 'Botão Ativo' : 'Botão Inativo'}
          </button>
        );
      };

</blockquete>

 - React.useState: O useState é uma função que retorna uma Array com 2 valores. O primeiro valor guarda o dado do estado atual, pode ser qualquer tipo de dado como strings, arrays, números, boolean, null, undefined e objetos. O segundo valor é uma função que pode ser utilizada para modificarmos o estado do primeiro valor.

 - Quando a função de modificação do estado é ativada, todos os componentes que dependerem do estado, serão renderizados novamente e os seus filhos também. É isso que garante a reatividade de componentes funcionais no React.

 - Múltiplos Estados: Não existem limites para o uso do useState, podemos definir diversos no mesmo componente.

<blockquete>

    const App = () => {
      const [modal, setModal] = React.useState(false);
      const [ativo, setAtivo] = React.useState(false);
      const [dados, setDados] = React.useState({ nome: '', idade: '' });

      return (
        <div>
          <Modal modal={modal} setModal={setModal} />
          <ButtonModal setModal={setModal} />
        </div>
      );
    };

    export default App;

</blockquete>

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

 - Passa o método setModal como parametro para outro component, esse component atualiza o status usando o método.

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

 - Não é passado a propriedade no handleClick(), mas como está sendo usado um callback(um método por parametro, ele capitura o valor automaticamente).

 - Callback Valor Inicial: A definição do estado inicial também pode ser feita com um callback.

<blockquete>

      const App = () => {
        // Callback no estado inicial, só será executado na criação do componente
        const [ativo, setAtivo] = React.useState(() => {
          const ativoLocal = window.localStorage.getItem('ativo');
          return ativoLocal;
        });

        function handleClick() {
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

 - Funções com efeitos coláterais são aquelas que modificam estados que estão fora das mesmas.

# React Hooks - Teste de Hook

 - O "StrictMode" duplica as chamada, para evitar que aconteça um efeito colateral.

 - O que causa efeito colateral é por uma chamada de uma função, dentro de outra função.

 - É sempre bom por os métodos set um abaixo do outro.

# React Hooks - useEffect

 - useEffect: Todo componente possui um ciclo de vida. Os principais momentos acontecem quando o componente é renderizado, atualizado ou destruído. Com o React.useEffect() podemos definir um callback que irá ser executado durante certos momentos do ciclo de vida do componente.

 - Array de Dependências: No useEffect podemos definir dois argumentos, o primeiro é a função de callback que será executada, o segundo é uma array com uma lista de dependências. A lista de dependências serve para informarmos quando o efeito deve ocorrer.

<blockquete>

      const App = () => {
        const [contar, setContar] = React.useState(0);

        // Uma Array vazia indica que o efeito não possui nenhum dependência,
        // assim o mesmo só irá ocorrer quando o componente é renderizado inicialmente (montado)
        // O efeito ocorre logo após a renderização do mesmo

        React.useEffect(() => {
          console.log('Apenas quando renderiza');
        }, []);

        // Antes de renderizar e toda vez que atualizar o componente
        console.log('Sempre ocorre, mas antes do useEffect');

        // Agora a dependência está no estado contar,
        // assim sempre que contar for atualizar este efeito será ativado

        React.useEffect(() => {
          console.log('Toda vez que atualiza o contar');
        }, [contar]);

        return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
      };

</blockquete>

 - Dependências Obrigatórias: Se utilizarmos o valor de um hook ou propriedade dentro de um efeito, ele irá indicar a necessidade de definirmos o mesmo como uma dependência na array.

<blockquete>

      const App = () => {
        const [contar, setContar] = React.useState(0);

        const titulo = 'Clicou ';

        React.useEffect(() => {
          document.title = titulo + contar;
          // O ESLint irá indicar que você possui uma dependência não declarada (contar)
        }, []);

        return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
      };

</blockquete>

 - Componente Montou: O useEffect será especialmente utilizado quando precisamos definir um efeito que deve ocorrer uma vez apenas, como o fetch de dados no servidor por exemplo.

 ### Sempre por a dependencia vazia se não, fica chamando varias vezes.

<blockquete>

      const App = () => {
        const [contar, setContar] = React.useState(0);
        const [dados, setDados] = React.useState(null);

        React.useEffect(() => {
          // se o fetch estivesse fora do useEffect, toda vez que o componente
          // fosse atualizado, o mesmo seria executado
          fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
            .then((response) => response.json())
            .then((json) => setDados(json));
        }, []);

        return (
          <div>
            {dados && (
              <div>
                <h1>{dados.nome}</h1>
                <p>R$ {dados.preco * contar}</p>
              </div>
            )}
            <button onClick={() => setContar(contar + 1)}>{contar}</button>
          </div>
        );
      };

</blockquete>

 - Múltiplos Efeitos: Podemos ter diversos useEffect no nosso código. O ideal é separarmos efeitos diferentes em useEffect diferentes.

<blockquete>

      const App = () => {
        const [contar, setContar] = React.useState(0);
        const [modal, setModal] = React.useState(false);

        React.useEffect(() => {
          document.title = 'Total ' + contar;
        }, [contar]);

        React.useEffect(() => {
          setContar(0);
        }, [modal]);

        return (
          <div>
            {modal && <p>Meu Modal</p>}
            <button onClick={() => setModal(!modal)}>Modal</button>
            <hr />
            <button onClick={() => setContar(contar + 1)}>{contar}</button>
          </div>
        );
      };

</blockquete>

 - Antes de Desmontar: As vezes precisamos executar um efeito sempre que um componente for desmontado. Para isso utilizamos um callback no retorno do callback do efeito.

 ### Pode passar um callback como retorno dentro da primeira função do useEffect, é executado quando o elemento elemento sai da tela.

<blockquete>

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

</blockquete>

 ### OBS: sempre use um ternario para exibir dados!

<blockquete>

      const App = () => {
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


# React Hooks - useRef

 - Retorna um objeto com a propriedade current. Esse objeto pode ser utilizado para guardarmos valores que irão persistir durante todo o ciclo de vida do elemento. Geralmente usamos o mesmo para nos referirmos a um elemento do DOM, sem precisarmos utilizar o querySelector ou similar.

 - Processo:

 - 1° Deve declarar uma const recebendo o "React.useRef()".
 - 2° Essa consta faz referencia a algum DOM.
 - 3° Pode usar a propriedade current para recuperar a referencia do DOM.

 - Para obter o valor do useRef, é bom por ele dentro de um useEfect().

 - useRef não renderiza o componente novamente, ele mantem o valor.

<blockquete>

      const App = () => {
        const video = React.useRef();

        React.useEffect(() => {
          console.log(video.current);
        }, []);

        return <video ref={video}></video>;
      };

</blockquete>

 - focus(): É comum utilizarmos em formulários, quando precisamos de uma referência do elemento para colocarmos o mesmo em foco.

<blockquete>

      const App = () => {
        const [comentarios, setComentarios] = React.useState([]);
        const [input, setInput] = React.useState('');
        const inputElement = React.useRef();

        function handleClick() {
          setComentarios((comentarios) => [...comentarios, input]);
          setInput('');
          inputElement.current.focus();
        }

        return (
          <div>
            <ul>
              {comentarios.map((comentario) => (
                <li key={comentario}>{comentario}</li>
              ))}
            </ul>
            <input
              type="text"
              value={input}
              ref={inputElement}
              onChange={({ target }) => setInput(target.value)}
            />
            <br />
            <button onClick={handleClick}>Enviar</button>
          </div>
        );
      };

</blockquete>

 - Referência : O seu uso não é restrito a elementos do dom. Podemos utilizar também para guardarmos a referência de qualquer valor, como de um setTimeout por exemplo.

<blockquete>

      const App = () => {
        const [contar, setContar] = React.useState(0);
        const [notificacao, setNotificacao] = React.useState(null);
        const timeoutRef = React.useRef();

        function handleClick() {
          setNotificacao('Obrigado por comprar');
          clearTimeout(timeoutRef.current);
          timeoutRef.current = setTimeout(() => {
            setNotificacao(null);
          }, 1000);
          setContar(contar + 1);
        }

        return (
          <div>
            <p>{notificacao}</p>
            <button onClick={handleClick}>{contar}</button>
          </div>
        );
      };

</blockquete>

 ### descobrir depois outras formas de usar o REF, outras propriedades que pode ser manipulada.


# React Hooks - useMemo

 - performance.now(): informa o tempo que foi usado em milesegundos.

 - Memoriza um valor, evitando a recriação do mesmo todas as vezes em que um componente for atualizado. Recebe um callback e uma array de dependências.

 - Para que serve?: Serve para casos em que você faz uma operação lenta para retornar um valor.

 - Essa operação lenta não tem relação async, ou fazer requisições, e sim com calculos matematicos feito pelo JS.

<blockquete>

      const App = () => {
      const [contar, setContar] = React.useState(0);
        const valor = React.useMemo(() => {
          const localStorageItem = window.localStorage.getItem('produto');
          // só será executado uma vez
          console.log('teste');
          return localStorageItem;
        }, []);
        console.log(valor);

        return <button onClick={() => setContar(contar + 1)}>{valor}</button>;
      };

</blockquete>

 - Usando o useMemo, para deixar mais rapido.

<blockquete>

      function operacaoLenta() {
        let c;
        for (let i = 0; i < 100000000; i++) {
          c = i + i / 10;
        }
        return c;
      }

      const App = () => {
        const [contar, setContar] = React.useState(0);
        const t1 = performance.now();
        const valor = React.useMemo(() => operacaoLenta(), []);
        // é mais rápido que
        // const valor = operacaoLenta();
        console.log(performance.now() - t1);

        return <button onClick={() => setContar(contar + 1)}>{valor}</button>;
      };

</blockquete>

# React Hooks - useCallback

 - Permite definirmos um callback e uma lista de dependências do callback. Esse callback só será recriado se essa lista de dependências for modificada, caso contrário ele não irá recriar o callback. 

 - Dificilmente você irá encontrar um cenário em que essa função seja útil.

 - Diferente da função que cria no botão, o useCallback constroi apenas uma vez a função
  na hora.

 - new Set(); é um array que recebe itens unicos.

 - useCallback não faz diferente, porque o JS limpa a memoria.

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

 - Uma prova de que o useCallback não irá criar uma nova função. Isso não significa que ele é mais ou menos otimizado. O Set() é utilizado pois ele permite apenas valores únicos dentro do mesmo.

<blockquete>

      const set1 = new Set();
      const set2 = new Set();

      const Produto = () => {
        const func1 = () => {
          console.log('Teste');
        };

        const func2 = React.useCallback(() => {
          console.log('Teste');
        }, []);

        set1.add(func1);
        set2.add(func2);

        console.log('Set1:', set1);
        console.log('Set2:', set2);
        return (
          <div>
            <p onClick={func1}>Produto 1</p>
            <p onClick={func2}>Produto 2</p>
          </div>
        );
      };

      const App = () => {
        const [contar, setContar] = React.useState(0);

        return (
          <div>
            <Produto />
            <button onClick={() => setContar(contar + 1)}>{contar}</button>
          </div>
        );
      };

</blockquete>

# React Hooks - useContext

 - O useContext é CRIADO(createContext()), RETORNADO(passando dados pelo provider), e depois USADO(useContext())

 ### createContext

 - O contexto irá permitir passarmos dados/estado a todos os componentes, sem a necessidade de utilizar propriedades. Serve principalmente para dodos/estados globais como por exemplo dados do usuário logado.

<blockquete>

        import React from 'react';

        const UserContext = React.createContext();

        export default UserContext;

</blockquete>
 
 ### Provider

 - O método Provider deve ser utilizado para envolver todos os elementos que terão acesso aos dados do Context. Provider recebe uma propriedade chamada value, dentro dela que devemos informar os dados do contexto.
 
<blockquete>

        import React from 'react';
        import Produto from './Produto';
        import UserContext from './UserContext';

        const App = () => {
          return (
            <UserContext.Provider value={{ nome: 'André' }}>
              <Produto />
            </UserContext.Provider>
          );
        };

        export default App;

</blockquete>

 ### useContext

 - O useContext é o hook que deve ser utilizado para consumirmos o contexto e termos assim acesso aos dados de value. Devemos passar o contexto criado como seu agumento.

<blockquete>

        import React from 'react';
        import UserContext from './UserContext';

        const Produto = () => {
          const user = React.useContext(UserContext);

          return <p>Produto de: {user.nome}</p>;
        };

        export default Produto;

</blockquete>

 ### GlobalStorage

 - Exemplo de uso real do context. Podemos passar qualquer coisa no value do context, até estados e funções atualizadoras do useState.

<blockquete>

          import React from 'react';
          import Produto from './Produto';
          import { GlobalStorage } from './GlobalContext';

          const App = () => {
            return (
              <GlobalStorage>
                <Produto />
              </GlobalStorage>
            );
          };

          export default App;

</blockquete>

 - GlobalContext.jsx

<blockquete>

        import React from 'react';

        export const GlobalContext = React.createContext();

        export const GlobalStorage = ({ children }) => {
          const [carrinho, setCarrinho] = React.useState(0);

          return (
            <GlobalContext.Provider value={{ carrinho, setCarrinho }}>
              {children}
            </GlobalContext.Provider>
          );
        };

</blockquete>

 - Produto.jsx

<blockquete>

        import React from 'react';
        import { GlobalContext } from './GlobalContext';

        const Produto = () => {
          const global = React.useContext(GlobalContext);

          function handleClick() {
            global.setCarrinho((carrinho) => carrinho + 1);
          }

          return (
            <p>
              Total: {global.carrinho}: <button onClick={handleClick}>Adicionar</button>
            </p>
          );
        };

        export default Produto;

</blockquete>

 - Exercicio.

<blockquete>

      import React from 'react';

      export const GlobalContext = React.createContext();

      export const GlobalStorage = ({ children }) => {
        const [produto, setProduto] = React.useState(null);

        React.useEffect(() => {
          fetch('https://ranekapi.origamid.dev/json/api/produto/')
            .then((response) => response.json())
            .then((json) => setProduto(json));
        }, []);

        function limparDados() {
          setProduto(null);
        }

        return (
          <GlobalContext.Provider value={{ produto, setProduto, limparDados }}>
            {children}
          </GlobalContext.Provider>
        );
      };

</blockquete>


# React Hooks - Custom Hooks

 ### useLocalStorage

 - Valores de "localStorage" é salvo como string.

 - Podemos criar nossos próprios hooks, assim evitamos a repetição de código. Todo custom hook deve começar com a palavra use. Exemplo: useNomeDoHook. Podemos retornar o que quisermos do hook, seja um valor único, uma array ou um objeto.

<blockquete>

        const useLocalStorage = (key, inicial) => {
          const [state, setState] = React.useState(() => {
            const local = window.localStorage.getItem(key);
            return local ? local : inicial;
          });

          React.useEffect(() => {
            window.localStorage.setItem(key, state);
          }, [key, state]);

          return [state, setState];
        };

</blockquete>

<blockquete>

        import useLocalStorage from './useLocalStorage';

        const App = () => {
          const [produto, setProduto] = useLocalStorage('produto', '');

          function handleClick({ target }) {
            setProduto(target.innerText);
          }

          return (
            <div>
              <p>Preferido: {produto}</p>
              <button onClick={handleClick}>notebook</button>
              <button onClick={handleClick}>smartphone</button>
            </div>
          );
        };

</blockquete>

 - useFetch: Aqui o useCallback é necessário para evitar um render infinito.

 - retorna como objeto, porque pode desestruturar em qualquer ordem.

 - Para evitar usar o ".then()", use o async/awaith.

 - Aula: https://www.youtube.com/watch?v=Z5D_Jj6JStw 

 - Para lidar com erros de função asyncronas, é usando o Try e Catch. 

<blockquete>

        import React from 'react';

        const useFetch = () => {
          const [data, setData] = React.useState(null);
          const [error, setError] = React.useState(null);
          const [loading, setLoading] = React.useState(null);

          const request = React.useCallback(async (url, options) => {
            let response;
            let json;
            try {
              setError(null);
              setLoading(true);
              response = await fetch(url, options);
              json = await response.json();
              if (response.ok === false) throw new Error(json.message);
            } catch (err) {
              json = null;
              setError(err.message);
            } finally {
              setData(json);
              setLoading(false);
              return { response, json };
            }
          }, []);

          return { data, loading, error, request };
        };

        export default useFetch;

</blockquete>

<blockquete>

        import React from 'react';
        import useFetch from './useFetch';

        const App = () => {
          const { data, loading, error, request } = useFetch();

          React.useEffect(() => {
            request('https://ranekapi.origamid.dev/json/api/produto/notebook');
          }, [request]);

          if (error) return <p>{error}</p>;
          if (loading) return <p>Carregando...</p>;
          if (data) return <div>{data.nome}</div>;
          else return null;
        };

        export default App;

</blockquete>

 ### dicas antigas

 - Como criar um hook personalizado, ele retorna um array de valores, e não retorna elementos.

 - [cuidado] No localStorage so se salva string!

 - Vai ser criado um hook personalizado para guardar valores no localStorage!.

 - O valor iniciar, é definido com uma verificação, se existe o valor no localStorage ou não.

 - Cria um efeito para quando valor for modificado, trocar o valor no useState.

 - OBS: Para tratar erro de funções asyncornas, se usa TRY E CATCH.

 - É possivel descontruir request asyncrinas, porem antes deve ser definido.

# React Hooks - Regras - codigo que retorna erros.

- useEffect não pode ser usado dentro de uma condição.

- Não pode usar o useEffect dentro de uma função.

- Não pode usar useEffect dentro de um For ou algum loop.

- Só pode usar hook dentro de component ou customHook.

- Pode transformar uma função em customHook apenas botando o termo "use" na frente do nome da funcao!

<blockquete>

        const App = () => {
          // Correto
          React.useEffect(() => {
            document.title = 'Título novo';
          }, []);

          let condicao = true;
          if (condicao) {
            // Errado
            React.useEffect(() => {
              document.title = 'Título novo';
            }, []);
          }

          function mudarTitulo() {
            // Errado
            React.useEffect(() => {
              document.title = 'Título novo';
            }, []);
          }

          for (let i = 0; i < 10; i++) {
            // Errado
            React.useEffect(() => {
              document.title = 'Título novo';
            }, []);
          }

          return <div></div>;
        };

</blockquete>

<blockquete>

        import React from 'react';

        // Errado, mas pode se transformar em um custom hook se começar com useNumeroAleatorio
        function numeroAleatorio() {
          const numero = Math.random();
          React.useEffect(() => {
            document.title = numero;
          }, []);
          return numero;
        }

        const App = () => {
          return <div></div>;
        };

        export default App;

</blockquete>

# Formulários - Input

 ### Reatividade
 
 - Para criarmos campos de formulário reativos, devemos definir o estado para o value e a função atualizadora para o onChange.
 
 - O atributo for é usado como htmlFor no JSX.

<blockquete>

      const App = () => {
        const [nome, setNome] = React.useState('');

        return (
          <form>
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />
            <p>{nome}</p>
          </form>
        );
      };

</blockquete>

 ### Form

 - No form controlamos o que acontece ao enviar o mesmo, por isso definimos uma função para lidar com o onSubmit. O preventDefault() irá prevenir o comportamento padrão, que seria de atualizar a página, enviando uma requisição para o que estiver em action="".

<blockquete>

      const App = () => {
        const [nome, setNome] = React.useState('');

        function handleSubmit(event) {
          event.preventDefault();
          console.log(nome);
        }

        return (
          <form onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />
            <button>Enviar</button>
          </form>
        );
      };

</blockquete>

 ### Múltiplos Campos

 - Podemos definir um estado para cada campo.

<blockquete>

      const App = () => {
        const [nome, setNome] = React.useState('');
        const [email, setEmail] = React.useState('');

        function handleSubmit(event) {
          event.preventDefault();
          console.log(nome, email);
        }

        return (
          <form onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <button>Enviar</button>
          </form>
        );
      };

</blockquete>

 ### Objeto

 - Podemos definir um objeto que irá conter todos os valores dos campos do formulário.
 
<blockquete>

      const App = () => {
        const [form, setForm] = React.useState({
          nome: '',
          email: '',
        });

        function handleSubmit(event) {
          event.preventDefault();
          console.log(form);
        }

        function handleChange({ target }) {
          const { id, value } = target;
          setForm({ ...form, [id]: value });
        }

        return (
          <form onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" value={form.nome} onChange={handleChange} />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={handleChange}
            />
            <button>Enviar</button>
          </form>
        );
      };

</blockquete>

 ### Exercício
 
<blockquete>

      // Faça um fetch (POST) para a API abaixo
      // Para a criação ser aceita é necessário enviar dodos de:
      // nome, email, senha, cep, rua, numero, bairro, cidade e estado

      // Essa é a função utilizado para realizar o POST
      fetch('https://ranekapi.origamid.dev/json/api/usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // form é o objeto com os dados do formulário
        body: JSON.stringify(form),
      });

      // Mostre uma mensagem na tela, caso a resposta da API seja positiva

</blockquete>

<blockquete>

        import React from 'react';

        const App = () => {
          const [form, setForm] = React.useState({
            nome: '',
            email: '',
            senha: '',
            cep: '',
            rua: '',
            numero: '',
            bairro: '',
            cidade: '',
            estado: '',
          });

          const [response, setResponse] = React.useState(null);

          function handleSubmit(event) {
            event.preventDefault();
          fetch('https://ranekapi.origamid.dev/json/api/usuario', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
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
          <form onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" value={form.nome} onChange={handleChange} />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={handleChange}
            />
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              value={form.senha}
              onChange={handleChange}
            />
            <label htmlFor="cep">Cep</label>
            <input type="text" id="cep" value={form.cep} onChange={handleChange} />
            <label htmlFor="senha">Rua</label>
            <input type="text" id="rua" value={form.rua} onChange={handleChange} />
            <label htmlFor="numero">Número</label>
            <input
              type="text"
              id="numero"
              value={form.numero}
              onChange={handleChange}
            />
            <label htmlFor="bairro">Bairro</label>
            <input
              type="text"
              id="bairro"
              value={form.bairro}
              onChange={handleChange}
            />
            <label htmlFor="cidade">Cidade</label>
            <input
              type="text"
              id="cidade"
              value={form.cidade}
              onChange={handleChange}
            />
            <label htmlFor="estado">Estado</label>
            <input
              type="text"
              id="estado"
              value={form.estado}
              onChange={handleChange}
            />
            <button>Enviar</button>
            {response && response.ok && <p>Usuário Criado</p>}
          </form>
        );
      };

      export default App;

</blockquete>

 - Alternativa
 
<blockquete>

      import React from 'react';

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

      const App = () => {
        const [form, setForm] = React.useState(
          formFields.reduce((acc, field) => {
            return { ...acc, [field.id]: '' };
          }, {}),
        );

        const [response, setResponse] = React.useState(null);

        function handleSubmit(event) {
          event.preventDefault();
          fetch('https://ranekapi.origamid.dev/json/api/usuario', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
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
          <form onSubmit={handleSubmit}>
            {formFields.map(({ id, label, type }) => (
              <div key={id}>
                <label htmlFor={id}>{label}</label>
                <input type={type} id={id} value={form[id]} onChange={handleChange} />
              </div>
            ))}
            <button>Enviar</button>
            {response && response.ok && <p>Usuário Criado</p>}
          </form>
        );
      };

      export default App;


</blockquete>


# Formulários - TextArea

 - No React o textarea é utilizado como um input, uma tag única sem abertura/fechamento e com o value para definir o seu valor interno.

<blockquete>

        const App = () => {
        const [mensagem, setMensagem] = React.useState('');

        return (
          <form>
            <textarea
              id="mensagem"
              value={mensagem}
              rows="5"
              onChange={({ target }) => setMensagem(target.value)}
            />
            <p>{mensagem}</p>
          </form>
        );
      };

</blockquete>

# Formulários - Select

 - O value e onChange são definidos no select. Para definir um valor inicial, coloque o mesmo no useState.

<blockquete>

        const App = () => {
          const [select, setSelect] = React.useState('smartphone');

          return (
            <form>
              <select value={select} onChange={({ target }) => setSelect(target.value)}>
                <option value="notebook">Notebook</option>
                <option value="smartphone">Smartphone</option>
                <option value="tablet">Tablet</option>
              </select>
              <p>{select}</p>
            </form>
          );
        };

</blockquete>

 - Selecione
 
<blockquete>

        const App = () => {
          const [select, setSelect] = React.useState('');

          return (
            <form>
              <select value={select} onChange={({ target }) => setSelect(target.value)}>
                <option value="" disabled>
                  Selecione
                </option>
                <option value="notebook">Notebook</option>
                <option value="smartphone">Smartphone</option>
                <option value="tablet">Tablet</option>
              </select>
              <p>{select}</p>
            </form>
          );
        };

</blockquete>


# Formulários - RaioButtom

 - No radio comparamos o valor selecionado com o valor do input, dentro do atributo checked. O que retornar true irá marcar o botão.

 - O que é reativo é o que está checado.

 - Bota o input dentro da label.

 - O grupo deve ter nome igual nos input ou checa se está checado igual no exemplo.
 
<blockquete>

        const App = () => {
          const [radio, setRadio] = React.useState('');

          function handleChange({ target }) {
            setRadio(target.value);
          }

          return (
            <form>
              <label>
                <input
                  type="radio"
                  value="notebook"
                  checked={radio === 'notebook'}
                  onChange={handleChange}
                />
                Notebook
              </label>
              <label>
                <input
                  type="radio"
                  value="smartphone"
                  checked={radio === 'smartphone'}
                  onChange={handleChange}
                />
                Smartphone
              </label>
              <label>
                <input
                  type="radio"
                  value="tablet"
                  checked={radio === 'tablet'}
                  onChange={handleChange}
                />
                Tablet
              </label>
            </form>
          );
        };

</blockquete>

 - Defina um estado para cada grupo.

<blockquete>

        const App = () => {
          const [produto, setProduto] = React.useState('');
          const [cor, setCor] = React.useState('');

          return (
            <form>
              <h2>Dispositivo</h2>
              <label>
                <input
                  type="radio"
                  value="notebook"
                  checked={produto === 'notebook'}
                  onChange={({ target }) => setProduto(target.value)}
                />
                Notebook
              </label>
              <label>
                <input
                  type="radio"
                  value="smartphone"
                  checked={produto === 'smartphone'}
                  onChange={({ target }) => setProduto(target.value)}
                />
                Smartphone
              </label>

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
            </form>
          );
        };

</blockquete>

# Formulários - Checkbox

 - O estado do checkbox está relacionado ao checked.

 - O estado é baseado no checked e não no value.

 - Caso tenha valores iguais, pode usar index do map.
 
<blockquete>

        const App = () => {
        const [checkbox, setCheckbox] = React.useState(false);

        function handleChange({ target }) {
          setCheckbox(target.checked);
        }

        return (
          <form>
            <label>
              <input
                type="checkbox"
                value="termos"
                checked={checkbox}
                onChange={handleChange}
              />
              Li os termos.
            </label>
          </form>
        );
      };

</blockquete>

 - Múltiplos: Podemos definir um estado para cada item ou uma array que irá conter todos os itens selecionados.

<blockquete>

        const App = () => {
          const [cores, setCores] = React.useState([]);

          function handleChange({ target }) {
            if (target.checked) {
              setCores([...cores, target.value]);
            } else {
              setCores(cores.filter((cor) => cor !== target.value));
            }
          }

          function handleChecked(cor) {
            return cores.includes(cor);
          }

          return (
            <form>
              <label>
                <input
                  type="checkbox"
                  value="azul"
                  checked={handleChecked('azul')}
                  onChange={handleChange}
                />
                Azul
              </label>
              <label>
                <input
                  type="checkbox"
                  value="vermelho"
                  checked={handleChecked('vermelho')}
                  onChange={handleChange}
                />
                Vermelho
              </label>
              <label>
                <input
                  type="checkbox"
                  value="verde"
                  checked={handleChecked('verde')}
                  onChange={handleChange}
                />
                Verde
              </label>
              <label>
                <input
                  type="checkbox"
                  value="amarelo"
                  checked={handleChecked('amarelo')}
                  onChange={handleChange}
                />
                Amarelo
              </label>
              <label>
                <input
                  type="checkbox"
                  value="roxo"
                  checked={handleChecked('roxo')}
                  onChange={handleChange}
                />
                Roxo
              </label>
              <ul>
                {cores.map((cor) => (
                  <li key={cor}>{cor}</li>
                ))}
              </ul>
            </form>
          );
        };

</blockquete>

# Formulários - Component Generico

 ### Input

 - Podemos definir um componente para cada tipo de campo de formulário, assim evitamos criar código repetido.

 - O estado é sempre dolado de fora.

<blockquete>

      const Input = ({ id, label, setValue, ...props }) => {
        return (
          <>
            <label htmlFor={id}>{label}</label>
            <input
              id={id}
              name={id}
              onChange={({ target }) => setValue(target.value)}
              {...props}
            />
          </>
        );
      };

</blockquete>

 - Quando o componente é usado.

<blockquete>

        const App = () => {
        const [nome, setNome] = React.useState('');

          return (
            <form>
              <Input
                label="Nome"
                id="nome"
                type="text"
                value={nome}
                setValue={setNome}
              />
            </form>
          );
        };

</blockquete>

 ### Select

<blockquete>

      const Select = ({ options, value, setValue, ...props }) => {
        return (
          <select
            value={value}
            onChange={({ target }) => setValue(target.value)}
            {...props}
          >
            <option value="" disabled>
              Selecione
            </option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      };

</blockquete>

 - Quando o componente é usado.
 
<blockquete>

        const App = () => {
          const [produto, setProduto] = React.useState('');

          return (
            <form>
              <Select
                options={['Notebook', 'Smartphone', 'Tablet']}
                value={produto}
                setValue={setProduto}
              />
            </form>
          );
        };

</blockquete>

 ### Radio

<blockquete>

        const Radio = ({ options, value, setValue, ...props }) => {
          return (
            <>
              {options.map((option) => (
                <label key={option}>
                  <input
                    type="radio"
                    value={option}
                    checked={value === option}
                    onChange={({ target }) => setValue(target.value)}
                    {...props}
                  />
                  {option}
                </label>
              ))}
            </>
          );
        };

</blockquete>

 - Quando o componente é usado.
 
<blockquete>

        const App = () => {
          const [cor, setCor] = React.useState('');

          return (
            <form>
              <Radio
                options={['azul', 'verde', 'amarelo']}
                value={cor}
                setValue={setCor}
              />
            </form>
          );
        };
 
 </blockquete>

 ### Check
  
<blockquete>

        const Checkbox = ({ options, value, setValue }) => {
          function handleChange({ target }) {
            if (target.checked) {
              setValue([...value, target.value]);
            } else {
              setValue(value.filter((cor) => cor !== target.value));
            }
          }

          return (
            <>
              {options.map((option) => (
                <label key={option}>
                  <input
                    type="checkbox"
                    value={option}
                    checked={value.includes(option)}
                    onChange={handleChange}
                  />
                  {option}
                </label>
              ))}
            </>
          );
        };
 
</blockquete>

 - Quando o componente é usado.

<blockquete>

        const App = () => {
          const [fruta, setFruta] = React.useState([]);
          const [termos, setTermos] = React.useState([]);

          return (
            <form>
              <Checkbox
                options={['Uva', 'Laranja', 'Limão']}
                value={fruta}
                setValue={setFruta}
              />

              <Checkbox
                options={['Termos e Condições']}
                value={termos}
                setValue={setTermos}
              />
            </form>
          );
        };
 
</blockquete>

 
# Formulários - Validação

  ### onBlur

 - O onBlur é ativado sempre que o campo fica fora de foco, momento perfeito para validarmos o dado do campo. A validação pode ser feita com JavaScript utilizando REGEX.

 - Só valida depois que ele terminar e verifica se teve erro.

<blockquete>

        const App = () => {
          const [cep, setCep] = React.useState('');
          const [error, setError] = React.useState(null);

          function validateCep(value) {
            if (value.length === 0) {
              setError('Preencha um valor');
              return false;
            } else if (!/^\d{5}-?\d{3}$/.test(value)) {
              setError('Preencha um cep válido');
              return false;
            } else {
              setError(null);
              return true;
            }
          }

          function handleBlur({ target }) {
            validateCep(target.value);
          }

          function handleChange({ target }) {
            if (error) validateCep(target.value);
            setCep(target.value);
          }

          return (
            <form>
              <Input
                label="CEP"
                id="cep"
                type="text"
                value={cep}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {error && <p>{error}</p>}
              <button>Enviar</button>
            </form>
          );
        };

</blockquete>
 
 ### onSubmit

 - Devemos impedir o envio do formulário caso exista erro no preenchimento.

<blockquete>

        const App = () => {
          const [cep, setCep] = React.useState('');
          const [error, setError] = React.useState(null);

          function handleSubmit(event) {
            event.preventDefault();
            if (validateCep(cep)) {
              console.log('Enviar');
            } else {
              console.log('Não enviar');
            }
          }

          function validateCep(value) {
            if (value.length === 0) {
              setError('Preencha um valor');
              return false;
            } else if (!/^\d{5}-?\d{3}$/.test(value)) {
              setError('Preencha um cep válido');
              return false;
            } else {
              setError(null);
              return true;
            }
          }

          function handleBlur({ target }) {
            validateCep(target.value);
          }

          function handleChange({ target }) {
            if (error) validateCep(target.value);
            setCep(target.value);
          }

          return (
            <form onSubmit={handleSubmit}>
              <label htmlFor="cep">Cep</label>
              <input
                id="cep"
                type="text"
                value={cep}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="00000-000"
              />
              {error && <p>{error}</p>}
              <button>Enviar</button>
            </form>
          );
        };

</blockquete>

# Formulários - useForm

 - Podemos definir um custom hook para formulários.

 - Cria uma validação dinamica, vai depender do tipo da validação.

 - É tratado quando não tem validação, no caso quando nao tem tipo.

<blockquete>

        import React from 'react';

        const types = {
          cep: {
            regex: /^\d{5}-?\d{3}$/,
            message: 'Cep inválido',
          },
          email: {
            regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Email inválido',
          },
        };

        const useForm = (type) => {
          const [value, setValue] = React.useState('');
          const [error, setError] = React.useState(null);

          function validate(value) {
            if (type === false) return true;
            if (value.length === 0) {
              setError('Preencha um valor');
              return false;
            } else if (types[type] && !types[type].regex.test(value)) {
              setError(types[type].message);
              return false;
            } else {
              setError(null);
              return true;
            }
          }

          function onChange({ target }) {
            if (error) validate(target.value);
            setValue(target.value);
          }

          return {
            value,
            setValue,
            error,
            onChange,
            onBlur: () => validate(value),
            validate: () => validate(value),
          };
        };

        export default useForm;

</blockquete>

 - 

<blockquete>

        import React from 'react';

        const Input = ({
          id,
          label,
          value,
          type,
          onChange,
          error,
          onBlur,
          placeholder,
        }) => {
          return (
            <>
              <label htmlFor={id}>{label}</label>
              <input
                type={type}
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
              />
              {error && <p>{error}</p>}
            </>
          );
        };

        export default Input;

</blockquete>

 - App

<blockquete>

          import React from 'react';
          import Input from './Form/Input';
          import useForm from './Hooks/useForm';

          const App = () => {
            const cep = useForm('cep');

            function handleSubmit(event) {
              event.preventDefault();
              if (cep.validate()) {
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
                <button>Enviar</button>
              </form>
            );
          };

          export default App;

</blockquete>


# Formulários - Desafio Formulários

 - fieldset : agrupa campos de formulartio(HTML)

 - Perguntas

<blockquete>

      const perguntas = [
        {
          pergunta: 'Qual método é utilizado para criar componentes?',
          options: [
            'React.makeComponent()',
            'React.createComponent()',
            'React.createElement()',
          ],
          resposta: 'React.createElement()',
          id: 'p1',
        },
        {
          pergunta: 'Como importamos um componente externo?',
          options: [
            'import Component from "./Component"',
            'require("./Component")',
            'import "./Component"',
          ],
          resposta: 'import Component from "./Component"',
          id: 'p2',
        },
        {
          pergunta: 'Qual hook não é nativo?',
          options: ['useEffect()', 'useFetch()', 'useCallback()'],
          resposta: 'useFetch()',
          id: 'p3',
        },
        {
          pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
          options: ['set', 'get', 'use'],
          resposta: 'use',
          id: 'p4',
        },
      ];

</blockquete>

- Solução (app)

<blockquete>

          import React from 'react';
          import Radio from './Form/Radio';

          const perguntas = [
            {
              pergunta: 'Qual método é utilizado para criar componentes?',
              options: [
                'React.makeComponent()',
                'React.createComponent()',
                'React.createElement()',
              ],
              resposta: 'React.createElement()',
              id: 'p1',
            },
            {
              pergunta: 'Como importamos um componente externo?',
              options: [
                'import Component from "./Component"',
                'require("./Component")',
                'import "./Component"',
              ],
              resposta: 'import Component from "./Component"',
              id: 'p2',
            },
            {
              pergunta: 'Qual hook não é nativo?',
              options: ['useEffect()', 'useFetch()', 'useCallback()'],
              resposta: 'useFetch()',
              id: 'p3',
            },
            {
              pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
              options: ['set', 'get', 'use'],
              resposta: 'use',
              id: 'p4',
            },
          ];

          const App = () => {
            const [respostas, setRespostas] = React.useState({
              p1: '',
              p2: '',
              p3: '',
              p4: '',
            });
            const [slide, setSlide] = React.useState(0);
            const [resultado, setResultado] = React.useState(null);

            function handleChange({ target }) {
              setRespostas({ ...respostas, [target.id]: target.value });
            }

            function resultadoFinal() {
              const corretas = perguntas.filter(
                ({ id, resposta }) => respostas[id] === resposta,
              );
              setResultado(`Você acertou: ${corretas.length} de ${perguntas.length}`);
            }

            function handleClick() {
              if (slide < perguntas.length - 1) {
                setSlide(slide + 1);
              } else {
                setSlide(slide + 1);
                resultadoFinal();
              }
            }

            return (
              <form onSubmit={(event) => event.preventDefault()}>
                {perguntas.map((pergunta, index) => (
                  <Radio
                    active={slide === index}
                    key={pergunta.id}
                    value={respostas[pergunta.id]}
                    onChange={handleChange}
                    {...pergunta}
                  />
                ))}
                {resultado ? (
                  <p>{resultado}</p>
                ) : (
                  <button onClick={handleClick}>Próxima</button>
                )}
              </form>
            );
          };

          export default App;

</blockquete>

- Radio

<blockquete>

            import React from 'react';

            const Radio = ({ pergunta, options, onChange, value, id, active }) => {
              if (active === false) return null;
              return (
                <fieldset
                  style={{
                    padding: '2rem',
                    marginBottom: '1rem',
                    border: '2px solid #eee',
                  }}
                >
                  <legend style={{ fontWeight: 'bold' }}>{pergunta}</legend>
                  {options.map((option) => (
                    <label
                      key={option}
                      style={{ marginBottom: '1rem', fontFamily: 'monospace' }}
                    >
                      <input
                        type="radio"
                        id={id}
                        checked={value === option}
                        value={option}
                        onChange={onChange}
                      />
                      {option}
                    </label>
                  ))}
                </fieldset>
              );
            };

            export default Radio;

</blockquete>

# CSS - CSS Import

 - A forma mais simples de uso do CSS é importando o mesmo direto no JavaScript.

 - O webpack que importa.

<blockquete>

          import './App.css';

</blockquete>

 ### Componentes

 - Ao importar um componentes, os estilos importados do mesmo são automaticamente adicionados ao CSS final da build. Independente de você utilizar o componente ou não.

 ### Conflito

 - Todos os arquivos serão unidos em um CSS final e você é responsável por garantir que os seletores sejam específicos, para evitar conflito.

<blockquete>

        .Title {
          font-size: 2rem;
          font-family: sans-serif;
        }
        h1 {
          color: tomato;
        }
        h1.Title {
          font-family: serif;
        }

</blockquete>

 ### Evite Conflitos

 - Defina nomes únicos para os componentes e coloque classes com os mesmos nomes

# CSS - CSS Modules

 - Os modules garantem que as classes utilizada sejam sempre únicas, evitando o conflito. O modo já vem configurando com o Vite, basta definirmos o nome do arquivo css com a palavra .module. Ex: Produto.module.css. Devemos definir um nome para a importação, a mesma será transformada em um objeto que possui nomes únicos para as classes.

 - webpack que gerencia esse module.

<blockquete>

        import styles from './Produto.module.css';

        const Produto = () => {
          return (
            <div>
              <h1 className={styles.titulo}>Notebook</h1>
              <p className={styles.preco}>R$ 12000</p>
              <button className={styles.comprar}>Comprar</button>
            </div>
          );
        };

</blockquete>

 - Ele gera nomes de classes apenas, então utilize o objeto direto no className e não no atributo style

<blockquete>

        .titulo,
        .preco {
          color: #43c;
        }

        .preco {
          font-weight: bold;
        }

        .comprar {
          transform: rotate(90deg) translateY(-100px);
        }

</blockquete>

 ### camelCase

 - Utilize camelCase tituloPrincipal, já que o nome da classe se transformará em uma propriedade de um objeto JavaScript. Não utilize hífens titulo-principal.

<blockquete>

        .tituloPrincipal {
          color: blue;
        }

</blockquete>

 ### Funcionalidades Extras

 - O CSS Modules disponibiliza algumas funcionalidades extras para o CSS, como a definição de variáveis, composição de elementos e definição de classes no contexto global. Não aconselho o uso, pois a sintaxe não é bem suportada pela IDE (VS Code) e pelo eslint.

<blockquete>

        .titulo {
          color: #43c;
        }

        /* no local de composes use a vírgula .titulo, .preco {} */
        .preco {
          composes: titulo;
          font-weight: bold;
        }

        /* no local de variáveis utilize variáveis de CSS com o var() */
        @value width: 900px;

        /* crie um css global utilizando o IMPORT puro para quando precisar de estilos globais */
        :global .container {
          max-width: width;
        }

</blockquete>

 - Variavel do css: declara uma classe, na propriedade coloca --, repete o valor que tem -- em outras classes css.
 
<blockquete>

        .preco{
          color: #43c;
          --cor: red;
        }

        .preco{
          color: var(--cor);
        }

</blockquete>

# CSS - Styled Components

 - Permite escrevermos o CSS diretamente no JavaScript. Ao invés de classes, criamos componentes com um estilo único.

<blockquete>

      import styled from 'styled-components';

      const Title = styled.h1`
        font-size: 1.5em;
        color: tomato;
      `;

      const App = () => {
        return (
          <div>
            <Title>Título principal</Title>
          </div>
        );
      };

</blockquete>

 ### Instalação
 
 - Plugin de VS Code: vscode-styled-components

<blockquete>

        npm install styled-components

</blockquete>

 ### styled

 - O styled é um objeto com diferentes métodos que representam as tags de HTML.

<blockquete>

        const ProdutosContainer = styled.div`
          display: flex;
        `;

        const Produto = styled.div`
          flex: 1;
        `;

        const Titulo = styled.h1`
          font-size: 2em;
        `;

        const Comprar = styled.button`
          font-size: 1.5em;
          background: transparent;
          padding: 0.5rem;
          border-radius: 4px;
          border: 2px solid;
          cursor: pointer;
        `;

        const Preco = styled.span`
          background: #53d956;
          color: white;
          display: inline-block;
          border-radius: 5px;
          padding: 0.5rem;
        `;

        const App = () => {
          return (
            <ProdutosContainer>
              <Produto>
                <Titulo>
                  Notebook <Preco>R$ 1999</Preco>
                </Titulo>
                <Comprar>Comprar</Comprar>
              </Produto>
              <Produto>
                <Titulo>
                  Smartphone <Preco>R$ 2999</Preco>
                </Titulo>
                <Comprar>Comprar</Comprar>
              </Produto>
            </ProdutosContainer>
          );
        };

</blockquete>

 ### Template String Transpilation

 - O uso dos backticks para passarmos a string com os valores do CSS, é válido no JavaScript. Esses valores são passados como argumento da função.

<blockquete>

        function template(value, total) {
          console.log(value);
          console.log(total);
        }
        const total = 10;
        template`São ${total} no total`;

</blockquete>

 ### Props

 - Podemos passar propriedades como em um component de React.

<blockquete>

        const Preco = styled.p`
          background: ${(props) => props.cor};
          color: white;
          display: inline-block;
          border-radius: 5px;
          padding: 0.5rem;
        `;

        const App = () => {
          function template(value, total) {
            console.log(value);
            console.log(total);
          }
          const total = 10;
          template`São ${total} no total`;

          return (
            <div>
              <Preco cor="#53d956">R$ 2999</Preco>
              <Preco cor="#84e">R$ 1999</Preco>
            </div>
          );
        };

</blockquete>

 ### Estado

 - Podemos passar o estado como uma propriedade e modificarmos certos estilos com base no mesmo.

<blockquete>

          import styled from 'styled-components';

          const Button = styled.button`
            background: ${({ ativo }) => (ativo ? '#53d956' : '#000')};
            border: 1px solid black;
            font-size: 1rem;
            padding: 0.5rem;
            border-radius: 4px;
            color: white;
            cursor: pointer;
          `;

          const App = () => {
            const [ativo, setAtivo] = React.useState(false);

            return (
              <Button ativo={ativo} onClick={() => setAtivo(!ativo)}>
                Ativar
              </Button>
            );
          };

</blockquete>

 ### Pseudo

- Podemos definir o estado de :hover ou criar elementos com o ::after ou ::before utilizando o & na frente do elemento.

<blockquete>

        const Comprar = styled.button`
          font-size: 1.5em;
          background: transparent;
          padding: 0.5rem;
          border-radius: 4px;
          border: 2px solid black;
          cursor: pointer;
          position: relative;
          &:hover {
            background: black;
            color: white;
          }
          &::before {
            display: block;
            content: '';
            width: 16px;
            height: 16px;
            border-radius: 50%;
            position: absolute;
            background: #53d956;
            top: -8px;
            right: -8px;
          }
        `;

</blockquete>

# CSS - CSS Frameworks

 - Podemos adicionar qualquer library/framework de css ao React. Com o @next vamos instalar a versão 5 do bootstrap. Popper é necessário para algumas funções do bootstrap.

<blockquete>

        npm install bootstrap@next

</blockquete>

 - Existem frameworks de CSS que te fornecem componentes prontos para serem utilizados no local de classes. O react-bootstrap utiliza em sua base o bootstrap, mas fornece componentes React.

<blockquete>

        npm install react-bootstrap bootstrap

</blockquete>

# CSS - Animações

 - Animação no css

 - Anime a entrada de elementos utilizando a propriedade animation.

 - Usando o "@keyframes"

<blockquete>

        .animeLeft {
          opacity: 0;
          transform: translateX(-20px);
          animation: animeLeft 0.3s forwards;
        }

        @keyframes animeLeft {
          to {
            opacity: initial;
            transform: initial;
          }
        }

</blockquete>

 ### Slide

 - Anime a entrada de elementos utilizando a propriedade animation.

<blockquete>

      .container {
        overflow: hidden;
      }

      .content {
        display: flex;
        z-index: 100;
        transition: transform 0.3s ease;
      }

      .item {
        flex-shrink: 0;
        width: 80%;
        margin: 0 10%;
        border-radius: 4px;
        background-color: #eee;
        text-align: center;
        padding: 10rem 0;
      }

      .nav {
        display: flex;
        justify-content: space-between;
        width: 80%;
        margin: 1rem auto;
      }

</blockquete>

 -

<blockquete>

        import React from 'react';
        import styles from './Slide.module.css';

        const Slide = ({ slides }) => {
          const [active, setActive] = React.useState(0);
          const [position, setPosition] = React.useState(0);
          const contentRef = React.useRef();

          React.useEffect(() => {
            const { width } = contentRef.current.getBoundingClientRect();
            setPosition(-(width * active));
          }, [active]);

          function slidePrev() {
            if (active > 0) setActive(active - 1);
          }

          function slideNext() {
            if (active < slides.length - 1) setActive(active + 1);
          }

          return (
            <section className={styles.container}>
              <div
                ref={contentRef}
                className={styles.content}
                style={{ transform: `translateX(${position}px)` }}
              >
                {slides.map((slide) => (
                  <div key={slide.id} className={styles.item}>
                    {slide.text}
                  </div>
                ))}
              </div>
              <nav className={styles.nav}>
                <button onClick={slidePrev}>Anterior</button>
                <button onClick={slideNext}>Próximo</button>
              </nav>
            </section>
          );
        };

        export default Slide;

</blockquete>

<blockquete>

        import React from 'react';
        import './App.css';
        import Slide from './Slide';

        const App = () => {
          const slides = [
            {
              id: 'slide1',
              text: 'Slide 1',
            },
            {
              id: 'slide2',
              text: 'Slide 2',
            },
            {
              id: 'slide3',
              text: 'Slide 3',
            },
          ];

          return (
            <div>
              <Slide slides={slides} />
            </div>
          );
        };

        export default App;

</blockquete>


# CSS - Imagens

 - Podemos importar a imagem direto para o componente. O webpack irá gerar o caminho correto na build final.

 - No CSS podemos utilizar o caminho direto. É importante colocar o ./, pois o webpack vai utilizar isso e substituir para o caminho final do site.

<blockquete>

        .fundo {
          width: 50px;
          height: 50px;
          background-image: url('./img/foto.jpg');
          background-size: cover;
        }

</blockquete>

 ### SVG

 - Um svg pode ser adicionado da mesma forma que as anteriores, porém ele também pode ser adicionado como um componente. Dessa forma o código do SVG inteiro é injetado direto no HTML, dando maior controle sobre o mesmo.

 - No Vite é necessário um plugin para ativar essa funcionalidade. No create-react-app essa funcionalidade vem instalada por padrão. A versão que funciona igual ao CRA é a 3.

<blockquete>

        npm install vite-plugin-svgr@3

</blockquete>

<blockquete>

        import { defineConfig } from 'vite';
        import react from '@vitejs/plugin-react';
        import eslintPlugin from 'vite-plugin-eslint';
        import svgr from 'vite-plugin-svgr';

        // https://vitejs.dev/config/
        export default defineConfig({
          plugins: [
            react(),
            eslintPlugin({
              cache: false,
              include: ['./src/**/*.js', './src/**/*.jsx'],
            }),
            svgr(),
          ],
        });

</blockquete>

<blockquete>

        import { ReactComponent as Dog } from './img/dog.svg';

        const App = () => {
          return (
            <div>
              <Dog />
            </div>
          );
        };

</blockquete>

 ### Componentes SVG

 - Além da importação direto como componentes, podemos também definirmos cada SVG como um componente. Lembre-se, propriedades que tiverem hífens serão modificadas: fill-rule vira fillRule

<blockquete>

        const DogSvg = ({ color }) => {
          return (
            <svg
              width="28"
              height="22"
              viewBox="0 0 28 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 10h1.652c1.708 0 2.63 2.004 1.518 3.302l-1.618 1.887A4.501 4.501 0 0024.5 14.5a1.5 1.5 0 013 0A7.5 7.5 0 0114 19 7.5 7.5 0 01.5 14.5a1.5 1.5 0 013 0 4.5 4.5 0 008.948.689l-1.618-1.887C9.718 12.004 10.64 10 12.35 10H14z"
                fill={color}
              />
              <circle cx="21" cy="3" r="3" fill={color} />
              <circle cx="7" cy="3" r="3" fill={color} />
            </svg>
          );
        };

</blockquete>

# React Router - Router

 ### React Router Dom

 - É uma extensão que permite gerenciarmos as rotas do React.

 - https://reactrouter.com/en/main

<blockquete>

        npm install react-router-dom

</blockquete>

 ### BrowserRouter, Routes e Route

 - O BrowserRouter deve ser o componente pai que envolve tudo que depender do react-router. O Routes define a área em que vamos colocar os nossos Route. O Route recebe um caminho em path, se esse caminho for o mesmo do URL ele irá renderizar o component que estiver dentro de element={}.

<blockquete>

          import { BrowserRouter, Routes, Route } from 'react-router-dom';
          import Contato from './Contato';
          import Sobre from './Sobre';
          import Home from './Home';

          const App = () => {
            return (
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="sobre" element={<Sobre />} />
                  <Route path="contato" element={<Contato />} />
                </Routes>
              </BrowserRouter>
            );
          };

</blockquete>

 ### 404 - Não Encontrado

 - O * renderiza um elemento para todas as rotas que não foram definidas em path. Uso ideal para mostrarmos um componente indicando que a página não existe.

<blockquete>

        import { BrowserRouter, Routes, Route } from 'react-router-dom';
        import Sobre from './Sobre';
        import Pagina404 from './Pagina404';

        const App = () => {
          return (
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="sobre" element={<Sobre />} />
                <Route path="*" element={<Pagina404 />} />
              </Routes>
            </BrowserRouter>
          );
        };

</blockquete>

# React Router - Link

 - O Link irá modificar a rota e renderizar o novo componente sem recarregar a página.

<blockquete>

        import { Link } from 'react-router-dom';

        const Header = () => {
          return (
            <nav>
              <Link to="/">Home</Link>
              <Link to="sobre">Sobre</Link>
              <Link to="contato">Contato</Link>
            </nav>
          );
        };

</blockquete>

 - App.jsx

<blockquete>

        import { BrowserRouter, Routes, Route } from 'react-router-dom';
        import Header from './Header';
        import Home from './Home';
        import Sobre from './Sobre';
        import Contato from './Contato';

        const App = () => {
          return (
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="sobre" element={<Sobre />} />
                <Route path="contato" element={<Contato />} />
              </Routes>
            </BrowserRouter>
          );
        };

</blockquete>

 ### NavLink

 - O NavLink funciona da mesma forma, mas adiciona uma classe ao link que estiver ativo. É necessário colocar o end no NavLink responsável por navegar para a raiz do app.

<blockquete>

        import './Header.css';
        import { NavLink } from 'react-router-dom';

        const Header = () => {
          const activeStyle = {
            color: 'tomato',
          };
          return (
            <nav>
              <NavLink to="/" end activeStyle={activeStyle}>
                Home
              </NavLink>
              <NavLink to="sobre" activeStyle={activeStyle}>
                Sobre
              </NavLink>
              <NavLink to="contato" activeStyle={activeStyle}>
                Contato
              </NavLink>
            </nav>
          );
        };

</blockquete>

 ### useNavigate

 - O hook useNavigate permite navegarmos programaticamente entre as rotas. Por exemplo, pode ser utilizado quando o usuário faz um login bem sucedido e enviamos o mesmo a página da sua conta.

<blockquete>

        import { useNavigate } from 'react-router-dom';

        const Login = () => {
          const navigate = useNavigate();

          function handleClick() {
            console.log('Faz o login');
            navigate('/sobre');
          }

          return (
            <div>
              <button onClick={handleClick}>Login</button>
            </div>
          );
        };

</blockquete>

 ### Atenção

 - Pesquisar depois porque o "activeStyle" não está funcionando.

# React Router - useParams

 ### Rota Dinâmica

 - O uso de :nome irá definir uma rota dinâmica, onde o nome poderá ser utilizado como uma variável dentro do componente. Serve para buscarmos rotas dinâmicas como produto/notebook ou produto/smartphone.
 
<blockquete>

        import { BrowserRouter, Routes, Route } from 'react-router-dom';
        import Produto from './Produto';
        import Home from './Home';
        import Header from './Header';

        const App = () => {
          return (
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="produto/:id" element={<Produto />} />
              </Routes>
            </BrowserRouter>
          );
        };

</blockquete>

 ### useParams

 - O hook useParams terá um objeto com todos os parâmetros da rota. É possível ter mais de um parâmetro.

<blockquete>

        import { useParams } from 'react-router-dom';

        const Produto = () => {
          const params = useParams();

          return (
            <div>
              <h1>Produto</h1>
              <p>id: {params.id}</p>
            </div>
          );
        };

</blockquete>

 ### useLocation

 - Retorna o objeto location, com diversas informações sobre a rota atual, como o caminho, parâmetros de busca e mais.

 - Bota na URL: "produto?q=verde&memoria=16".

 - usa o "useEffect" para criar alguma logica, quando toda rota muda.

<blockquete>

        import { useLocation } from 'react-router-dom';

        const Header = () => {
          const location = useLocation();

          React.useEffect(() => {
            const search = new URLSearchParams(location.search);
            console.log(search.get('q'));
            console.log('Toda vez que a rota mudar');
          }, [location]);

          return <div></div>;
        };

</blockquete>

 - Existe também o:
 
<blockquete>

        const [searchParams, setSearchParams] = useSearchParams()

</blockquete>

# React Router - Nested Routes

 - Utilizamos nested routes quando precizamos de rotas dentro de rotas. Como por exemplo: perfil/editar e perfil/certificados e etc. Utilize o \* para definir que existem outras rotas dentro.

 - App

<blockquete>

        import { BrowserRouter, Routes, Route } from 'react-router-dom';
        import Home from './Home';
        import Sobre from './Sobre';
        import Login from './Login';
        import Produto from './Produto';
        import Header from './Header';
        import NaoEncontrada from './NaoEncontrada';

        const App = () => {
          return (
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="sobre" element={<Sobre />} />
                <Route path="login" element={<Login />} />
                <Route path="produto/:id/*" element={<Produto />} />
                <Route path="*" element={<NaoEncontrada />} />
              </Routes>
            </BrowserRouter>
          );
        };

</blockquete>

 - Produto

<blockquete>

        import { useParams, Route, Routes, NavLink } from 'react-router-dom';
        import ProdutoDescricao from './ProdutoDescricao';
        import ProdutoAvaliacao from './ProdutoAvaliacao';
        import ProdutoCustomizado from './ProdutoCustomizado';

        const Produto = () => {
          const params = useParams();

          return (
            <div>
              <h1>Produto: {params.id}</h1>
              <nav>
                <NavLink to="">Descrição</NavLink>
                <NavLink to="avaliacao">Avaliação</NavLink>
                <NavLink to="customizado">Customizado</NavLink>
              </nav>
              <Routes>
                <Route path="/" element={<ProdutoDescricao />} />
                <Route path="avaliacao" element={<ProdutoAvaliacao />} />
                <Route path="customizado" element={<ProdutoCustomizado />} />
              </Routes>
            </div>
          );
        };

</blockquete>

 ### Outlet

 - Outra forma é definindo todos as rotas diretamente no App e utilizar o component Outlet para mostrarmos a rota.

<blockquete>

        const Produto = () => {
          const params = useParams();

          return (
            <div>
              <h1>Produto: {params.id}</h1>
              <nav>
                <NavLink to="">Descrição</NavLink>
                <NavLink to="avaliacao">Avaliação</NavLink>
                <NavLink to="customizado">Customizado</NavLink>
              </nav>
              <Outlet />
            </div>
          );
        };

</blockquete>

 - App.js

<blockquete>

        import { BrowserRouter, Routes, Route } from 'react-router-dom';
        import Home from './Home';
        import Sobre from './Sobre';
        import Login from './Login';
        import Produto from './Produto';
        import Header from './Header';
        import NaoEncontrada from './NaoEncontrada';
        import ProdutoDescricao from './ProdutoDescricao';
        import ProdutoAvaliacao from './ProdutoAvaliacao';
        import ProdutoCustomizado from './ProdutoCustomizado';

        const App = () => {
          return (
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="sobre" element={<Sobre />} />
                <Route path="login" element={<Login />} />
                <Route path="produto/:id/*" element={<Produto />}>
                  <Route path="/" element={<ProdutoDescricao />} />
                  <Route path="avaliacao" element={<ProdutoAvaliacao />} />
                  <Route path="customizado" element={<ProdutoCustomizado />} />
                </Route>
                <Route path="*" element={<NaoEncontrada />} />
              </Routes>
            </BrowserRouter>
          );
        };
        
</blockquete>

# React Router - Head

 - No React não temos acesso direto as tags e informações do Head. Porém com o uso de rotas é essêncial realizar a mudança do título e descrição para cada rota. Podemos fazer isso através de um componente ou custom hook.

 ### ATENÇÃO

 - Com o VITE  é direfente, o index.html fica na pasta raiz.
 - Usando o VITE é necessario a megatag description no index.html.
 -  


<blockquete>

        const Head = (props) => {
          React.useEffect(() => {
            document.title = props.title;
            document
              .querySelector("meta[name='description']")
              .setAttribute('content', props.description);
          }, [props]);

          return <></>;
        };

</blockquete>

 - Sobre.js

<blockquete>

        import Head from './Head';

        const Sobre = () => {
          return (
            <div>
              <Head title="Página Sobre" description="Descrição da sobre" />
              <h1>Sobre</h1>
              <p>Essa é a Sobre</p>
            </div>
          );
        };


</blockquete>

 - Home.js

<blockquete>

        import Head from './Head';

        const Home = () => {
          return (
            <div>
              <Head title="Página Home" description="Descrição da home" />
              <h1>Home</h1>
              <p>Essa é a home</p>
            </div>
          );
        };

</blockquete>

 ### Helmet

 - Uma extensão famosa é o react-helmet. Ela retonar com componente em que você pode definir tags do Head dentro do mesmo.

 - https://github.com/nfl/react-helmet

<blockquete>

        npm install react-helmet

</blockquete>

<blockquete>

        import { Helmet } from 'react-helmet';

        const Home = () => {
          return (
            <div>
              <Helmet>
                <title>Página Home</title>
                <meta name="description" content="Conteúdo da descrição" />
              </Helmet>
              <h1>Home</h1>
              <p>Essa é a home</p>
            </div>
          );
        };

</blockquete>

 -


 -

<blockquete>

</blockquete>

 -


 -

<blockquete>

</blockquete>

 -


 -

<blockquete>

</blockquete>

 -


 -

<blockquete>

</blockquete>

 -


 -

<blockquete>

</blockquete>

 -


 -

<blockquete>

</blockquete>

 -


 -

<blockquete>

</blockquete>

 -


 -

<blockquete>

</blockquete>

 -


 -

<blockquete>

</blockquete>

 -


 -

<blockquete>

</blockquete>

 -


 -

<blockquete>

</blockquete>

 -


 -

<blockquete>

</blockquete>

 -


 -

<blockquete>

</blockquete>

 -


 -

<blockquete>

</blockquete>

 -


 -

<blockquete>

</blockquete>

 -


 -

<blockquete>

</blockquete>

 -


 -

<blockquete>

</blockquete>

 -


 -

<blockquete>

</blockquete>

 -


 -

<blockquete>

</blockquete>

 -


 -

<blockquete>

</blockquete>

 -


 -

<blockquete>

</blockquete>

 -


 -

<blockquete>

</blockquete>

 -


 -

<blockquete>

</blockquete>

 -


 -

<blockquete>

</blockquete>

 -


 -

<blockquete>

</blockquete>

 -


