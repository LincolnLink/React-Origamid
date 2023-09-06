import React from "react";
import useLocalStorage from "./UseLocalStorage";

const App01 = () => {
  const [produto, setProduto] = useLocalStorage('produto', '');

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <div>
      <p>Preferido: {produto}</p>
      <button onClick={handleClick}>notebook</button>
      <br /> <br />
      <button onClick={handleClick}>smartphone</button>
    </div>
  );
};

export default App01;