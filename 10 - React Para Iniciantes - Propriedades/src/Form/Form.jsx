import React from 'react';
import Button from './Button';
import Input from './Input';

const Form = () => {
  return (
    <form>
      <p>        
        <Input id="email" label="E-mail" required />
      </p>
      <p>
        <Input id="senha" type="password" label="Senha" />
      </p>
      <Button />
    </form>
  );
};

export default Form;
