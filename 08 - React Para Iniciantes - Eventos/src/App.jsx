import React from 'react';

const App = () => {

  function handleClick(event) {
    alert('Comprou: ' + event.target.innerText);
  }

  function handleScroll(event) {
    console.log(event);
  }
  window.addEventListener('scroll', handleScroll);

  return (
    <>  
        <div>
          <button onClick={handleClick}>Camisa</button>
          <button onClick={handleClick}>Bermuda</button>
        </div> 
        <br></br>
        <button onClick={({ target }) => target.classList.toggle('ativa')}>
          Ativar
        </button>   
        <br></br>
        <br></br>
        <button onClick={(event) => console.log(event.target.innerText)}>
          Teste
        </button>
        <br></br>
        <br></br>
        <div style={{ height: '200vw' }}>Div</div>
    </>
  );
};

export default App;
