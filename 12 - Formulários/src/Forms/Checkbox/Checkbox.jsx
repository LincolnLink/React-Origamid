import React from "react";

const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

const Checkbox = () =>{

    const [checkbox, setCheckbox] = React.useState(false);

    function handleChange({ target }) {
        setCheckbox(target.checked);
    }

    //Múltiplos
    const [cores, setCores] = React.useState(['vermelho']);

    function handleChangeM({ target }) {
        if (target.checked) {
            // Adiciona a cor
            setCores([...cores, target.value]);
        } else {
            //Remove a cor
            setCores(cores.filter((cor) => cor !== target.value));
        }
    }

    function handleChecked(cor) {
        //
        return cores.includes(cor);
    }

    //exercicio
    const [coresEx, setCoresEx] = React.useState([]);

    function handleChangeEx({ target }) {
        const { checked, value } = target;
        if (checked) {
            setCoresEx([...coresEx, target.value]);
        } else {
            setCoresEx(coresEx.filter((cor) => cor !== value));
        }
    }
    
      function handleCheckedEx(cor) {
        return coresEx.includes(cor);
      }

    return(
     <>
        <h1>Checkbox</h1>
        <br />
        <h1>Exemplo01</h1>
        <div>
            <form>
                <label>
                    <input
                    type="checkbox"
                    value="termos"
                    checked={checkbox}
                    onChange={handleChange}
                    />
                    Li os termos.
                </label>
            </form>
        </div>
        <br />
        <h1>Exemplo02</h1>        
        <div>
        <form>
            <label>
                <input
                type="checkbox"
                value="azul"
                checked={handleChecked('azul')}
                onChange={handleChangeM}
                />
                Azul
            </label>
            <label>
                <input
                type="checkbox"
                value="vermelho"
                checked={handleChecked('vermelho')}
                onChange={handleChangeM}
                />
                Vermelho
            </label>
            <label>
                <input
                type="checkbox"
                value="verde"
                checked={handleChecked('verde')}
                onChange={handleChangeM}
                />
                Verde
            </label>
            <label>
                <input
                type="checkbox"
                value="amarelo"
                checked={handleChecked('amarelo')}
                onChange={handleChangeM}
                />
                Amarelo
            </label>
            <label>
                <input
                type="checkbox"
                value="roxo"
                checked={handleChecked('roxo')}
                onChange={handleChangeM}
                />
                Roxo
            </label>
            <ul>
                {cores.map((cor) => (
                <li key={cor}>{cor}</li>
                ))}
            </ul>
            </form>
        </div>
        <br />
        <h1>Exercicio</h1>
        <div>
            <form>
                {coresArray.map((cor) => (
                    <label key={cor} style={{ textTransform: 'capitalize' }}>
                    <input
                        type="checkbox"
                        value={cor}
                        checked={handleCheckedEx(cor)}
                        onChange={handleChangeEx}
                    />
                    {cor}
                    </label>
                ))}
                <ul>
                    {coresEx.map((cor) => (
                    <li key={cor}>{cor}</li>
                    ))}
                </ul>
            </form>
        </div>
     
     </>   
    )
}

export default Checkbox;