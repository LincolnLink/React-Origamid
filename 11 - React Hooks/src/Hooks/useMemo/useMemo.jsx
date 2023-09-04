import React, { useEffect } from 'react';


const UseMemo = () => {


    useEffect(()=>{
        window.localStorage.setItem('produto','Nintendo switch');
    }, [])

    const [contar, setContar] = React.useState(0);
    const valor = React.useMemo(() => {
        const localStorageItem = window.localStorage.getItem('produto');
        // só será executado uma vez
        //console.log('teste');
        return localStorageItem;
    }, []); // toda vez que o valor do array mudar, ele executa novamente.
    // array vazia só executa uma vez quando é criado.

    console.log(valor);

    //Teste
    const [contar2, setContar2] = React.useState(0);

    const t1 = performance.now();
    const valor2 = React.useMemo(() => operacaoLenta(), []);
    
    // é mais rápido que
    //const valor2 = operacaoLenta();

    console.log("Tempo: ", performance.now() - t1);




    return(
    <>        
        <h1>UseMemo</h1>
        <br />
        <button onClick={() => setContar(contar + 1)}>{valor}</button>

        <br />
        <br />
        <br />
        <button onClick={() => setContar2(contar2 + 1)}>{valor2}</button>

        
    </>
    )

}

function operacaoLenta() {
    let c;
    for (let i = 0; i < 100000000; i++) {
      c = i + i / 10;
    }
    return c;
  }

export default UseMemo;