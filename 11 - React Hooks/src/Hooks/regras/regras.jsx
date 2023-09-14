import React from "react";


const Regras = () => {

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


    return(
        <></>
    )
}

// Errado, mas pode se transformar em um custom hook se começar com useNumeroAleatorio
function numeroAleatorio() {
    const numero = Math.random();
    React.useEffect(() => {
      document.title = numero;
    }, []);
    return numero;
}

export default Regras;