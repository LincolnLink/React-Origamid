import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function reducer(state, action){
  switch(action){
    case 'AUMENTAR':
      return state + 1;
    case 'DIMINUIR':
      return state - 1;
    default:
      throw new Error();
  }
}

const UseReduceExemplo = (props) => {
    //const [contar, setContar] = React.useState(0);
    // function aumentar(){
    //     setContar(contar + 1);
    // }
    // function diminuir(){
    //     setContar(contar - 1);
    // }

    const [state, dispatch] = React.useReducer(reducer, 0);
 
  return (
    <>
    <div className='displayFlex'>
      <div>
        <button onClick={() => dispatch('AUMENTAR')}>+</button>
      </div>
      <div>
        <button onClick={() => dispatch('DIMINUIR')}>-</button>
      </div>
      <div>
        <p>{state}</p>
      </div>       
        
    </div>        
    </>
  );
};


export default UseReduceExemplo;
