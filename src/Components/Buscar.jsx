import React from 'react';
import { useAuto } from './Autorizacion';
import Enlace from './Enlace';

function Buscar() {
  const { datos } = useAuto();

  return (
    <div className="personajes_enlaces-container">
      <h1>PERSONAJES</h1>
      <div className="personajes_links">
        {datos.map(e => (
          <Enlace
            key={e.id}
            to={`/personajes/${e.id}`}
            src={`https://rickandmortyapi.com/api/character/avatar/${e.id}.jpeg`}
            name={e.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Buscar;
