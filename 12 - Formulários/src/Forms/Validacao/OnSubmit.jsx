import React from "react";
import OnBlur from "./OnBlur";

const OnSubmit = () =>{

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

    return(
        <>
            <h1>OnSubmit</h1>
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
        </>
    )
}

export default OnSubmit;