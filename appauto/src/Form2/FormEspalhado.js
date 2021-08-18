import React from 'react';
import ButtonE from './ButtonE';
import InputE from './InputE';

const FormEspalhado = () => {
  return (
    <div>
      <InputE id="email" label="Email" required />
      <InputE id="Password" type="password" label="Password" />
      <ButtonE items={['item1', 'item2']} />
    </div>
  );
};

export default FormEspalhado;
