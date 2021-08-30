import React from 'react';
import { ButtonModal } from './ButtonModel';
import { Modal } from './Modal';

export const TesteHook2 = () => {
  const [modal, setModal] = React.useState(true);

  return (
    <>
      <br />
      <br />
      <h1>Teste Modal</h1>
      <br />
      <br />
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </>
  );
};
