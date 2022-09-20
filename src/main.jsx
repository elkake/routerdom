import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Buscador } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Buscador>
    <App />
  </Buscador>
);
