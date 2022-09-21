import React, { createContext, useState, useContext } from 'react';
import apiRequest from '../hooks/apiRequest';
const Context = createContext();

export const useAuto = () => {
  const auth = useContext(Context);
  return auth;
};

const api = 'https://rickandmortyapi.com/api/character';

export const AutoProvider = ({ children }) => {
  const [isLogued, setIsLogued] = useState(false);

  const login = () => {
    setIsLogued(true);
  };

  const logout = () => {
    setIsLogued(false);
  };

  const datos = apiRequest(api);
  const llamar = apiRequest;
  return (
    <Context.Provider value={{ llamar, isLogued, login, logout, datos }}>
      {children}
    </Context.Provider>
  );
};
