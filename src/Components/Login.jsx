import React from 'react';
import { useAuto } from './Autorizacion';
import Button from './Button';
import { useLocation, useNavigate } from 'react-router-dom';
function Login() {
  const { login } = useAuto();
  //va de la mano de navigate
  const navegar = useNavigate();

  const {state} = useLocation();
  //para acceder al state mandado por navigate

  console.log(state.dato);
  const handleClick = () => {
    login(); //envia true a login
    const url = state ? state.location.pathname : '/';
    navegar(url);
  };
  return (
    <div>
      <button onClick={handleClick}>LOGIN</button>
    </div>
  );
}

export default Login;
