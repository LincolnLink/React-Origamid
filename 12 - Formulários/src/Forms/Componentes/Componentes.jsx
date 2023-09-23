import React from "react";
import InputGenerico from "./InputGenerico";
import SelectGenerico from "./SelectGenerico";
import RadioGenerico from "./RadioGenerico";
import CheckboxGenerico from "./CheckboxGenerico";

const Componentes  = () => {

    //Input
    const [nome, setNome] = React.useState('');

    //Select
    const [produto, setProduto] = React.useState('');

    //Radio
    const [cor, setCor] = React.useState('');

    //Check
    const [fruta, setFruta] = React.useState([]);
    const [termos, setTermos] = React.useState([]);

    return(
        <>
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
                />
            </div>
            <div>
            <br /><br />
                <h3>Select Generico</h3>
                <form>
                    <SelectGenerico
                        options={['Notebook', 'Smartphone', 'Tablet']}
                        value={produto}
                        setValue={setProduto}
                    />
                </form>
            </div>
            <div>
            <br /><br />
                <h3>Radio Generico</h3>
                <form>
                    <RadioGenerico
                        options={['azul', 'verde', 'amarelo']}
                        value={cor}
                        setValue={setCor}
                    />
                </form>
            </div>
            <div>
                <form>
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
                </form>    
            </div>        
        </>
    )
}

export default Componentes;