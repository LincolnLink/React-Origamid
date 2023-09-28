import React from "react";
import InputGenerico from "./InputGenerico";
import SelectGenerico from "./SelectGenerico";
import RadioGenerico from "./RadioGenerico";
import CheckboxGenerico from "./CheckboxGenerico";

const Componentes  = () => {

    //Input
    const [nome, setNome] = React.useState('');
    const [email, setEmail] = React.useState('');

    //Select
    const [produto, setProduto] = React.useState('');

    //Radio
    const [cor, setCor] = React.useState('');

    //Check
    const [fruta, setFruta] = React.useState([]);
    const [termos, setTermos] = React.useState([]);

    return(
        <>
            <form>
                <div>
                    <h1>Componentes </h1>
                    <br /><br />
                    <h3>Input Generico</h3>
                    <InputGenerico
                        label="Nome"
                        id="nome"
                        type="text"
                        value={nome}
                        setValue={setNome}
                        required
                    />
                </div>
                <div>                    
                    <InputGenerico
                        label="Email"
                        id="email"
                        type="email"
                        value={email}
                        setValue={setEmail} 
                    />
                </div>
                <div>
                <br /><br />
                    <h3>Select Generico</h3>                
                    <SelectGenerico
                        options={['Notebook', 'Smartphone', 'Tablet']}
                        value={produto}
                        setValue={setProduto}
                    />
                </div>
                <div>
                <br /><br />
                    <h3>Radio Generico</h3>                    
                    <RadioGenerico
                        options={['azul', 'verde', 'amarelo']}
                        value={cor}
                        setValue={setCor}
                    />                    
                </div>
                <br /><br />
                <div>                   
                    <CheckboxGenerico
                        options={['Uva', 'Laranja', 'Limão']}
                        value={fruta}
                        setValue={setFruta}
                    />

                    <CheckboxGenerico
                        options={['Termos e Condições']}
                        value={termos}
                        setValue={setTermos}
                    />                     
                </div> 
                <button>Enviar</button>
            </form>       
        </>
    )
}

export default Componentes;