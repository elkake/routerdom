import React from 'react';
import { useParams } from 'react-router-dom';

function PjDetails() {
  const { desc } = useParams();

  return <h1>Detalle del personaje numero {desc} de la serie</h1>;
}

export default PjDetails;
