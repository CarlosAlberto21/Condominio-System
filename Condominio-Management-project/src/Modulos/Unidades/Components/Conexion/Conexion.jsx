import React, { useState, useEffect } from 'react';
import Cards from '../Cards/Cards';


const Conexion = () => {
  const [apartamentos, setApartamentos] = useState([]); // <-- Falta esto

  useEffect(() => {
    // Realiza la solicitud GET a la API
    fetch('http://localhost:8083/api/apartamentos')
      .then(response => response.json())
      .then(data => setApartamentos(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

    return <Cards apartamentos={apartamentos}/>
};

export default Conexion;
