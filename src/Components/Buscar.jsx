import React from 'react';
import { Link } from 'react-router-dom';
function Buscar() {
  const arr = [
    { id: 0, dato: 'personaje1' },
    { id: 1, dato: 'personaje2' },
    { id: 2, dato: 'personaje3' },
    { id: 3, dato: 'personaje4' },
  ];
  return (
    <div>
      <h1>Buscar Personajes</h1>
      <ul>
        {arr.map(e => (
          <li key={e.id}>
            <Link to={`/personajes/${e.dato}`}>{e.dato}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Buscar;
