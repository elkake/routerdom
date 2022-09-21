import { NavLink } from 'react-router-dom';
import '../style/Header.scss';
function Nav() {
  return (
    <nav>
      <span className="nav_logo"></span>
      <div className="nav_link-container">
        <NavLink
          className={({ isActive }) => {
            return isActive ? 'nav_link-active nav_link-item' : 'nav_link-item';
          }}
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? 'nav_link-active nav_link-item' : 'nav_link-item';
          }}
          to="/personajes"
        >
          Personajes
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
