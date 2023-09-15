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

### component generico Checkbox

- Exemplo

<blockquete>

            import React from 'react';
            //import './style.css';

            const CheckBoxGenerico = ({ options, setValue, value }) => {
              //id, label, setValue, value, ...props

              function handleChange({ target }) {
                if (target.checked) {
                  setValue([...value, target.value]);
                } else {
                  setValue(value.filter((itemValue) => itemValue !== target.value));
                }
              }

              return (
                <div>
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
                </div>
              );
            };

            export default CheckBoxGenerico;

</blockquete>

### Validação

- o Onchange foi definido do lado de fora/ dolado do pai, porq
  foi mostrata uma validação de dados no pai, esse exemplo é provisorio.

- proxima aula, vai ser definido o onchangem dentro do filho/ dolado de
  dentro, usando um hook.

- 3 Momentos da validação, quando perde o foco, quando muda o valor,
  e quando envia.

### Validação usando hook(validação dinamica) !

- Criado um Hook do zero para validar.

- No hook não retorna elemento, retorna partes
  especificas que for preciso.

- A const Types é um objeto, que tem dentro dela
  uma "lista" de objetos, com essa const, vocÊ tem acesso
  a outros objetos que serve para tipar, tornando o hook/
  função dinamica, aonde é passado apenas o nome do objeto,
  com esse nome ele tem diferentes calculos/funções.

- Pode buscar um regex da internet para validar por exemplo email.

- Criando um formulario sem a validação.

### Desafio Formulários

-

-

<blockquete>

</blockquete>

-

<blockquete>

</blockquete>
