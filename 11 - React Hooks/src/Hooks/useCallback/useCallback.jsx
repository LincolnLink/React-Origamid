import React from 'react';


const UseCallback = () => {

    const [contar, setContar] = React.useState(0);
    const handleClick = React.useCallback(() => {
      setContar((contar) => contar + 1);
    }, []);

    //Teste
    

    return(
        <>
        <h1>UseCallback</h1>
        <br></br>
        <button onClick={handleClick}>{contar}</button>

        </>
    );
}

export default UseCallback;




