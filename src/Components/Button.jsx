import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Button({ desc, nombre }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate(`${desc}`);
      }}
    >
      {nombre}
    </button>
  );
}

export default Button;
