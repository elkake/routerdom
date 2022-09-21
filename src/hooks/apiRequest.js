import { useState, useEffect } from 'react';

function apiRequest(api) {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const llamado = async () => {
      const response = await fetch(api);
      const data = await response.json();
      setDatos(data.results);
    };
    llamado();
  }, []);

  return datos;
}

export default apiRequest;
