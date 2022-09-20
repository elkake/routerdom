import React from 'react';
import { useParams } from 'react-router-dom';
import Button from './Button';

function PjDetails() {
  const { desc } = useParams();

  return (
    <>
      <h1>Detalle del personaje numero {desc} de la serie</h1>
      <Button desc={`/personajes/${desc}`} nombre="SALIR" />
    </>
  );
}

export default PjDetails;
