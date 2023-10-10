import React from 'react';
import './style.css';
import Produto from './Produto';
import Slide from './Slide';

const App = () => {

  const [ativar, setAtivar] = React.useState(false);

  //Slide
  const slides = [
    {
      id: 'slide1',
      text: 'Slide 1',
    },
    {
      id: 'slide2',
      text: 'Slide 2',
    },
    {
      id: 'slide3',
      text: 'Slide 3',
    },
  ];

  return (
    <>
          <div>
            <button onClick={() => setAtivar(!ativar)}>Ativar</button>
            {ativar && <Produto />}
          </div>
          <br /><br /><br />
          <h1>Slide</h1>
          <div>
            <Slide slides={slides} />
          </div>

    </>
    
  );
};

export default App;

