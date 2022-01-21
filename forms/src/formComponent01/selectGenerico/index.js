import React, { useState } from 'react';
import './style.css';

const SelectGenerico = ({ label, options, value, setValue, ...props }) => {
  return (
    <div>
      <label>{label}</label>

      <select
        value={value}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      >
        <option value="" disabled>
          Selecione
        </option>

        {options.map((op) => (
          <option key={op} value={op}>
            {op}
          </option>
        ))}
      </select>

      <br />
    </div>
  );
};

export default SelectGenerico;
