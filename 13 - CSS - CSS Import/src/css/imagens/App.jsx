import React from 'react';
import './App.css';
import foto from './img/cachorro.png';
import dog from './img/dog.svg';
import foto2 from './img/foto.jpg';
import { ReactComponent as Dog } from './img/dog.svg';
import DogSvg from './DogSvg';

const App = () => {
  
  const [olho, setOlho] = React.useState(0);

  function handleClick(){
      for(let i = 0; i < 6; i++){
          setTimeout(() => {
              setOlho(i)
          }, 30 * i);
      }
  }

  return (
    <>
      <div>
        <p className='fundo' onClick={handleClick}></p>
        
        {/* <img src={dog} alt="" /> */}
        <br />
        <br />
        {/* <Dog /> */}
        <DogSvg color="#84e" olho={olho}/>
        <br />
        <br />
        <img src={foto2} alt="Cachorro" />
      </div>
    </>
    
  );
};

export default App;

