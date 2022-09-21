import React from 'react';
import { useAuto } from './Autorizacion';
import Button from './Button';
import { useLocation, useNavigate } from 'react-router-dom';
import '../style/Login.scss';

function Login() {
  const { login } = useAuto();
  //va de la mano de navigate
  const navegar = useNavigate();

  const { state } = useLocation();
  //para acceder al state mandado por navigate

  const handleClick = e => {
    e.preventDefault();
    login(); //envia true a login
    const url = state ? state.location.pathname : '/';
    navegar(url);
  };
  return (
    <div className="login_container">
      <form onSubmit={handleClick}>
        <input type="text" placeholder="email@example.xyz" />
        <input type="password" placeholder="password" />
        <button>LOGIN</button>
      </form>
      <div>
        <p>Olvide mi contraseña</p>
        <p>REGISTRARSE</p>
      </div>
      <span>*Este Login es una representación, ingrese solo con Login.*</span>
    </div>
  );
}

export default Login;
