import React from 'react';
import { NavLink as NavLinkReactRouter } from 'react-router-dom';
function NavLinkR({ to, children, ...props }) {
  return (
    <NavLinkReactRouter
      {...props}
      to={to}
      className={({ isActive }) => {
        return isActive ? 'isActive' : undefined;
      }}
    >
      {children}
    </NavLinkReactRouter>
  );
}

export default NavLinkR;
