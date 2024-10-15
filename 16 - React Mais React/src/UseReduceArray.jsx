import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function reducer(state, action){
  switch(action.type){
    case 'remover':
      return state.filter((item) => item !== action.content);
    case 'adicionar':
      return [...state, action.content];
    default:
      throw new Error();
  }
}

const UseReduceArray = (props) => {
   const [state, dispatch] = React.useReducer(reducer, [' Banana ', ' Uva ']);
 
  return (
    <>
    <div className='displayFlex'>
      <div>
        <button onClick={() => dispatch({ type: 'remover', content: ' Banana '})}>
          Remover Banana
        </button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: 'adicionar', content: ' Banana '})}>
          Adicionar Banana
        </button>
      </div>
      <div>
        <p>{state}</p>
      </div>       
        
    </div>        
    </>
  );
};


export default UseReduceArray;
