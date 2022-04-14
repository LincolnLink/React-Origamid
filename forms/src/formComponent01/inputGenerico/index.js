import React from 'react';
import './style.css';

const InputGenerico = ({
  id,
  label,
  onChange,
  value,
  type,
  onBlur,
  placeholder,
  error,
}) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        type={type}
        value={value}

        //onChange={({ target }) => setValue(target.value)}
      />
      {error && <p>{error}</p>}
      <br />
    </div>
  );
};

export default InputGenerico;
