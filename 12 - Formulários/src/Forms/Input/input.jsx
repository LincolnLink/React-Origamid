import React from "react";

const Input = () =>{

    const [nome, setNome] = React.useState('');

    return(
    <>
        <h1>Input</h1>
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
    </>
    )
}

export default Input;