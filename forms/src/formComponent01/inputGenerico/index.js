import React from 'react';
import './style.css';

const InputGenerico = ({ id, label, setValue, onChange, value, ...props }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        name={id}
        value={value}
        //onChange={({ target }) => setValue(target.value)}
        {...props}
        onChange={onChange}
      />
      <br />
    </div>
  );
};

export default InputGenerico;
