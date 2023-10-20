import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  function handleClick() {
    console.log('Faz o login');
    navigate('/sobre');
  }

  return (
    <div>
        <br />
        <br />
        <br />
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;