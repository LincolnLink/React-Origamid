import React from "react";


const Select = () => {

    const [select, setSelect] = React.useState('smartphone');
    const [select2, setSelect2] = React.useState('');

    return(
        <>
        <h1>Select</h1>
        <div>
            <form>
                <select value={select} onChange={({ target }) => setSelect(target.value)}>
                    <option value="notebook">Notebook</option>
                    <option value="smartphone">Smartphone</option>
                    <option value="tablet">Tablet</option>
                </select>
                <p>{select}</p>
            </form>
        </div>
        <div>
            <form>
                <select value={select2} onChange={({ target }) => setSelect2(target.value)}>
                    <option value="" disabled>
                    Selecione
                    </option>
                    <option value="notebook">Notebook</option>
                    <option value="smartphone">Smartphone</option>
                    <option value="tablet">Tablet</option>
                </select>
                <p>{select2}</p>
            </form>
        </div>
        
        </>
    )
}

export default Select;