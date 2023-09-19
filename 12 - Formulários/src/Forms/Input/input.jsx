import React from "react";
import App from "./Exercicio/App";
import App02 from "./Exercicio/AppAlternativo";

const Input = () =>{

    // const [nome, setNome] = React.useState('');
    // const [email, setEmail] = React.useState('');

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

    return(
    <>
        <h1>Input</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome</label>
            <input 
                type="text" 
                id="nome" 
                value={form.nome} 
                onChange={handleChange} 
            />
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                value={form.email}
                onChange={handleChange}
            />
        <br /><br />
        <button>Enviar</button>
        <br /><br />
        
        </form>
        <br /><br /><br />


        <h1>Exercicio</h1>
        <App></App>
        <br /><br /><br />

        <h1>Exercicio Alternativo</h1>
        <App02></App02>
        <br /><br /><br />
    </>
    )
}

export default Input;