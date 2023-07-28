import React from 'react';

const Input = ({label, id, ...props}) => {
  return (
    <>
      <label htmlFor="id">{label}</label>
      <input id={id} type="text" {...props} />
    </>
  )
};

export default Input;
