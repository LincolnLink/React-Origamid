import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Reduce = (props) => {
    const [contar, setContar] = React.useState(0);

    function aumentar(){
        setContar(contar + 1);
    }

    function diminuir(){
        setContar(contar - 1);
    }

  return (
    <>
    <div className='displayFlex'>
      <div>
        <button onClick={aumentar}>+</button>
      </div>
      <div>
        <button onClick={diminuir}>-</button>
      </div>
      <div>
        <p>{contar}</p>
      </div>       
        
    </div>        
    </>
  );
};


export default Reduce;
