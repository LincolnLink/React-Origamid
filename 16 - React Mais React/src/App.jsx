import React from 'react';
import Button from './Button';
//import Contato from './Contato';
const Contato = React.lazy(() => import('./Contato'))
import Header from './Header';
import Reduce from './Reduce';
import UseReduceExemplo from './UseReduceExemplo';
import UseReduceArray from './UseReduceArray';
import Produtos from './classeExemplo';

const App = () => {  
  const [ativo, setAtivo] = React.useState(false);
  const [contar, setContar] = React.useState(0);

  const titulo = <h1>ProtoType</h1>;
  const titulo2 = <h1>Lazy Suspense</h1>;
  const titulo3 = <h1>React.Memo</h1>;
  const titulo4 = <h1>React.Reducer</h1>;
  const titulo5 = <h1>Classe</h1>;


  
  return (
    <>
      {titulo}
      <p>Tipagem das propriedade</p>
      <Button width={300}>Clique Aqui</Button>
      <br /><br /><br />

      {titulo2}
      <p>Carrega o component apenas quando clica nele.</p>
      {ativo && (
      <React.Suspense fallback={<div>Carregando...</div>}>
        <Contato />
      </React.Suspense> 
      )}
      <button onClick={()=> setAtivo(true)}>Ativar</button>
      <br /><br /><br />

      {titulo3}
      <p>Ele não vai renderizar o component novamente mesmo 
        que o pai dele tenha o status modificado, a não ser que você
        passe um stado reativo</p>
      <Header />
      <button onClick={()=> setContar(contar +1)} >{contar}</button>
      <br /><br /><br />

      {titulo4}
      <p></p>
      <Reduce />
      <br />

      <p>Exemplo usando useReduce</p>
      <UseReduceExemplo />
      <br />  

      <p>Exemplo usando useReduce com switch</p>
      <UseReduceArray />
      <br /><br /><br />

      {titulo5}
      <p></p>
      <Produtos titulo="Esses são os produtos" />
      <br /><br /><br />

    </>
  );
};

export default App;
