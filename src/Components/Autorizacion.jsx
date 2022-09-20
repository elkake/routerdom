import React, { createContext, useState, useContext } from 'react';

const Context = createContext();

export const useAuto = () => {
  const auth = useContext(Context);
  return auth;
};

export const AutoProvider = ({ children }) => {
  const [isLogued, setIsLogued] = useState(false);

  const login = () => {
    setIsLogued(true);
  };

  const logout = () => {
    setIsLogued(false);
  };

  return (
    <Context.Provider value={{ isLogued, login, logout }}>
      {children}
    </Context.Provider>
  );
};
