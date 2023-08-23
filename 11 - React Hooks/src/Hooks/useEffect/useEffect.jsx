import React from 'react';
import Produto from './produto';
import AppEx from './exercicio/appEx';

const UseEffect = () => {
    const [contar, setContar] = React.useState(0);

    React.useEffect(() => {
        console.log('Apenas quando renderiza');
    }, []);

    console.log('Sempre ocorre, mas antes do useEffect');

    React.useEffect(() => {
        console.log('Toda vez que atualiza o contar');
    }, [contar]);
  
    // React.useEffect(() => {
    //   console.log('Ocorre ao renderizar e ao atualizar');
    // });
    
    // Múltiplos Efeitos

    const [contar2, setContar2] = React.useState(0);
    const [modal, setModal] = React.useState(false);

    React.useEffect(() => {
        document.title = 'Total ' + contar2;
    }, [contar2]);

    React.useEffect(() => {
        setContar2(0);
    }, [modal]);

    // Antes de Desmontar
    // Utilizamos o useEffect para adicionarmos eventos direto ao DOM

    const [ativo, setAtivo] = React.useState(false);

    // Teste da requisição repetida.
    const [dados, setDados] = React.useState(null);

    React.useEffect(() =>{
        fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
            .then((Response) => Response.json())
            .then((json) => setDados(json));
            console.log("Requisição aqui !!!");
    },[]);// sempre por a dependencia vazia se não, fica chamando varias vezes

  
    return (
        <>
            <button onClick={() => setContar2(contar + 1)}>
                {contar}
            </button>
            <br/>
            <br/> 
            <h1>Múltiplos Efeitos</h1>
            <div>
                {modal && <p>Meu Modal</p>}
                <button onClick={() => setModal(!modal)}>Modal</button>
                <hr />
                <button onClick={() => setContar2(contar2 + 1)}>{contar2}</button>
            </div>
            <div>
                <h1> Antes de Desmontar</h1>
                <button onClick={() => setAtivo(!ativo)}>Abrir</button>
                {ativo && <Produto />}
            </div>
            <br/>
            <br/> 
            <h1>Exercicio</h1>
            <AppEx></AppEx>
            <br/>
            <br/> 
            <h1>Teste da requisição repetida.</h1>


        </>
    );

};

export default UseEffect;