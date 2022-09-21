import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../style/Personaje.scss';
function Button({ desc, nombre }) {
  const navigate = useNavigate();

  return (
    <button
      className="pj_exit-button"
      onClick={() => {
        navigate(`${desc}`);
      }}
    >
      {nombre}
    </button>
  );
}

export default Button;
