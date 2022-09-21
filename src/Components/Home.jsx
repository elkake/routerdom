import React from 'react';
import { useLocation } from 'react-router-dom';
import '../style/Home.scss';
function Home() {
  return (
    <div className='home_container'>
      <section className='home_container-section'>
        <div className='home_container-title'>
          <h2>¿QUE ES REACT ROUTER DOM?</h2>
          <p>
            Es un paquete npm que le permite implementar enrutamiento dinámico
            en una aplicación web. Le permite mostrar páginas y permitir que los
            usuarios naveguen por ellas. Es una biblioteca de enrutamiento del
            lado del servidor y del cliente con todas las funciones para React.
            React Router Dom se utiliza para crear aplicaciones de una sola
            página, es decir, aplicaciones que tienen muchas páginas o
            componentes, pero la página nunca se actualiza, sino que el
            contenido se obtiene dinámicamente en función de la URL. Este
            proceso se llama Enrutamiento y es posible con la ayuda de React
            Router Dom. <br />
            <br />
            La principal ventaja de react-router es que la página no tiene que
            actualizarse cuando se hace clic en un enlace a otra página, por
            ejemplo. Además, es rápido, muy rápido en comparación con la
            navegación tradicional por páginas. Esto significa que la
            experiencia del usuario es mejor y la aplicación tiene un mejor
            rendimiento general.
          </p>
        </div>
        <div className='home_container-img home_container-img1'></div>
      </section>
      <section className='home_container-section'>
        <div className='home_container-title'>
          <h2>¿QUE ES RICK & MORTY?</h2>
          <p>
            Es una serie animada protagonizada por Rick Sánchez que es un
            ejemplo del típico "científico loco". <br />
            <br />
            Es un genio, pero es irresponsable, alcohólico, egoísta, un poco
            depresivo y con poca cordura. Rick por diferentes razones termina
            mudándose a la casa de su hija Beth y en ese momento se encuentra
            con su nieto Morty; un chico de 14 años de edad, tímido y no muy
            listo. Al juntarse con su nieto, Rick y Morty viven una variedad de
            aventuras a lo largo del cosmos y universos paralelos. Y es mediante
            tantas vivencias y reflexiones que Rick busca que su nieto Morty no
            acabe como su padre, Jerry, un hombre muy poco exitoso que a pesar
            de tener buenas intenciones resulta ser bastante inútil en muchas
            ocasiones y depende mucho de su esposa, Beth, hija de Rick.
            <br />
            <br />A pesar de estar muy apegados, Rick y su nieto experimentan
            momentos en los que Summer, hermana de Morty, se une en ocasiones a
            las pintorescas aventuras provocadas por Rick.
          </p>
        </div>
        <div className='home_container-img home_container-img2'></div>
      </section>
    </div>
  );
}

export default Home;
