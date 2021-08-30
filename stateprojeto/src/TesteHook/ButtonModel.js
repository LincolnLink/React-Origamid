import React from 'react';

export const ButtonModal = ({ setModal }) => {
  return <button onClick={() => setModal(true)}>Abrir</button>;
};
