import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header>
      <h1>BREAKING BAD API</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/personajes">Buscar</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
