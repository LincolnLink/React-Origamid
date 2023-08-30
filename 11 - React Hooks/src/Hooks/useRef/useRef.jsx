import React from 'react';

const UseRef = () => {
    const video = React.useRef();
    const tes = React.useRef();    
  
    React.useEffect(() => {
      console.log(video.current);
      //tes.style.backgroundColor = '#3a1a1a';
      console.log(tes);
    }, []);

    //Testeando o focus
    const [comentarios, setComentarios] = React.useState([]);
    const [input, setInput] = React.useState('');
    const inputElement = React.useRef();

    function handleClick() {
      setComentarios((comentarios) => [...comentarios, input]);
      setInput('');
      inputElement.current.focus();
    }

    //Guardarmos a referência de qualquer valor.
    const [contar, setContar] = React.useState(0);
    const [notificacao, setNotificacao] = React.useState(null);
    const timeoutRef = React.useRef();
    const teste01 = React.useRef();

    function handleClick2() {
      setNotificacao('Obrigado por comprar');
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setNotificacao(null);
      }, 1000);
      setContar(contar + 1);

      teste01.current = 44;
      console.log("teste01: ", teste01.current);
    }
    

  
    return (
      <>
          <div ref={tes}>Teste</div>

          <video ref={video}></video>  
          <br/>
          <h2>Teste focus</h2>
          <ul>
            {comentarios.map((comentario) => (
              <li key={comentario}>{comentario}</li>
            ))}
          </ul>
          <input
            type="text"
            value={input}
            ref={inputElement}
            onChange={({ target }) => setInput(target.value)}
          />
          <br/>
          <button onClick={handleClick}>Enviar</button>   
          <br/>
          <h2>Usando o useRef de outra forma</h2>
          <p>{notificacao}</p>
          <button onClick={handleClick2}>{contar}</button>
      </>
    );
};

export default UseRef;
  