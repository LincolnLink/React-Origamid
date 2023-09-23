import React from "react";
import InputGenerico from "../Componentes/InputGenerico";


const OnBlur = () =>{

    const [cep, setCep] = React.useState('');
    const [error, setError] = React.useState(null);

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
    <h1>OnBlur</h1>
    <form>
      <InputGenerico
        label="CEP"
        id="cep"
        type="text"
        value={cep}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && <p>{error}</p>}
      <button>Enviar</button>
    </form>    
    
    </>
)
}

export default OnBlur;