import React from 'react';

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
  
    return (
        <>
            <button onClick={() => setContar(contar + 1)}>
                {contar}
            </button>        
        </>
    );

};

export default UseEffect;