import React from 'react';

const InputE = ({ label, id, ...props }) => {
  return (
    <div style={{ margin: '1em' }}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...props} />
    </div>
  );
};

export default InputE;
