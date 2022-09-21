import React from 'react';
import { useParams } from 'react-router-dom';
import Button from './Button';
import '../style/Personaje.scss';
import { useAuto } from './Autorizacion';
function PjDetails() {
  const { desc } = useParams();
  const { datos } = useAuto();

  const pj = datos[desc - 1];
  return (
    <div className='detalles_container'>
      <h3>
        Aqui estaria la informacion de {pj.name}, si es que la API la tuviera.
        Pero solo era para usar el anidamiento de rutas de react router DOM
      </h3>
    </div>
  );
}

export default PjDetails;
