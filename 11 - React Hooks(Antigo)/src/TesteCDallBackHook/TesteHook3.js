import React from 'react';
import { ButtonModal } from './ButtonModel';
import { Modal } from './Modal';

export const TesteHook3 = () => {
  const [modal, setModal] = React.useState(true);

  return (
    <>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </>
  );
};
