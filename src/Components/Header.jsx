import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../App.css';
function Header() {
  return (
    <header>
      <h1>BREAKING BAD API</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={e => console.log('Home' + e.isActive)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/personajes"
              className={e => console.log('Buscar' + e.isActive)}
            >
              Buscar
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
