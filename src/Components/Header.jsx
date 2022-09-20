import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../App.css';
import NavLinkR from './NavLinkR';
function Header() {
  return (
    <header>
      <h1>BREAKING BAD API</h1>
      <nav>
        <ul>
          <li>
            <NavLinkR to="/home">Home</NavLinkR>
          </li>
          <li>
            <NavLinkR to="/personajes">Buscar</NavLinkR>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
