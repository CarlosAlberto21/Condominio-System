import React, { useState, useEffect } from 'react';
import Cards from '../Cards/Cards';


const Conexion = () => {
  const [customers, setCustomers] = useState([]); // <-- Falta esto

  useEffect(() => {
    // Realiza la solicitud GET a la API
    fetch('http://localhost:8082/api/customers')
      .then(response => response.json())
      .then(data => setCustomers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

    return <Cards customers={customers}/>
};

export default Conexion;
