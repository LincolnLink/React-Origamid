import React, { useState } from 'react';
//import './style.css';

const RadioGenerico = ({ options, value, label, setValue, ...props }) => {
  return (
    <>
      <h5>{label}</h5>
      {options.map((option) => (
        <label key={option}>
          <br />
          <input
            type="radio"
            value={option}
            checked={value == option}
            onChange={({ target }) => setValue(target.value)}
            {...props}
          />
          {option}
        </label>
      ))}
    </>
  );
};

export default RadioGenerico;
