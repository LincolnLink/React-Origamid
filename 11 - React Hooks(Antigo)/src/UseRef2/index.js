import React, { useState } from 'react';

export const UseRefComponent2 = () => {
  const [comentarios, setComentarios] = useState([]);
  const [input, setInput] = useState('');
  const inputElement = React.useRef();

  React.useEffect(() => {}, []);

  // Pega o novo comentario e adiciona na lista de comentario.
  function handleClick() {
    //Uma forma diferente de adicionar item no array!
    setComentarios([...comentarios, input]);
    setInput('');
    inputElement.current.focus();
  }

  return (
    <>
      <ul>
        {comentarios.map((com) => (
          <li key={com}>{com}</li>
        ))}
      </ul>

      <input
        type="text"
        ref={inputElement}
        value={input}
        onChange={({ target }) => setInput(target.value)}
      />
      <br />
      <button onClick={handleClick}>Enviar</button>
    </>
  );
};
