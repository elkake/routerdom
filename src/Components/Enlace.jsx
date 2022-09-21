import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../style/Buscar.scss';

function Enlace({ to, src, name }) {
  const referencia = useRef(null);
  const ulrReferencia = useRef(null);
  const [url, setUrl] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const options = {
    rootMargin: '0px',
  };

  useEffect(() => {
    const observer = new IntersectionObserver(e => {
      e.filter(e => e.isIntersecting).forEach(e => {
        setIsVisible(e.isIntersecting);
        setUrl(src);
        setIsVisible(true);
        console.log(e.isIntersecting);

        observer.unobserve(referencia.current);
      });
      //   setIsVisible(entry.isIntersecting);
    }, options);
    if (referencia.current) observer.observe(referencia.current);

    // ciego(observer);
  }, []);

  return (
    <div className="personajes_link-container" ref={referencia}>
      {isVisible && (
        <Link to={to}><div className='image_link-container'>
          <span>+</span>
          <img src={url} alt={name} ref={ulrReferencia} />
        </div>
        </Link>
      )}
    </div>
  );
}

export default Enlace;
