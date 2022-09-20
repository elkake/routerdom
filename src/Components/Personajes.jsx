import React from 'react';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';
function Personajes() {
  const { desc } = useParams();

  return (
    <div>
      <h1>Personaje</h1>
      {desc}
      
            <Link to="details">Ir a los detalles</Link>
      //hace que se renderize el cambio a la url
      <Outlet />
    </div>
  );
}

export default Personajes;
