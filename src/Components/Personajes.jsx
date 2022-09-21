import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import Button from './Button';
import { useAuto } from './Autorizacion';
import '../style/Personaje.scss';
function Personajes() {
  const { desc } = useParams();
  const { datos } = useAuto();

  const pj = datos[desc - 1];
  return (
    <div className="pj_container">
      <h1 className="pj_title">{pj.name}</h1>
      <div className="pj_container-card">
        <section className="pj_card-img">
          <span>
            <b>id: {pj.id}</b>
          </span>
          <div>
            <img src={pj.image} alt={pj.name} />
          </div>
        </section>
        <section className="pj_card-info">
          <span></span>
          <div>
            <b>Estado:</b>
            <p>{pj.status}</p>
          </div>
          <div>
            <b>Especie:</b>
            <p>{pj.species}</p>
          </div>
          <div>
            <b>Genero:</b>
            <p>{pj.gender}</p>
          </div>
          <div>
            <b>Origen:</b>
            <p>{pj.origin.name}</p>
          </div>
        </section>
      </div>
      <div className='pj_link-button'>
        <Link className='pj_link' to="details">Mas Detalles</Link>
        <Outlet />
        <Button desc={'/personajes'} nombre="SALIR" />
      </div>
    </div>
  );
}

export default Personajes;
