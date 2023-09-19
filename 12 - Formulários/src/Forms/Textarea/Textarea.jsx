import React from "react";


const Textarea = () => {

    const [mensagem, setMensagem] = React.useState('');

    return(
        <>
            <h1>Textarea</h1>

            <form>
                <textarea
                    id="mensagem"
                    value={mensagem}
                    rows="5"
                    onChange={({ target }) => setMensagem(target.value)}
                />
                <p>{mensagem}</p>
            </form>        
        </>
    )
}
export default Textarea;
