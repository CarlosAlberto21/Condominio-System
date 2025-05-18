import React from 'react'


import { useState } from 'react'; 
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import DashboardPage from './Modulos/Dashboard/DashboardPage';
import UnidadesPage from './Modulos/Unidades/Unidades';
import RegistroPage from './Modulos/Unidades/Registro';
import LoginPage from './Modulos/Login/LoginPage';
import LayaoutPage from './Modulos/Layaout/LayaoutPage';


const App = () => {

  return (
    
    <BrowserRouter>
    
     <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/dashboard" element={<LayaoutPage><DashboardPage/></LayaoutPage>} />
         <Route path="/gestion" element={<LayaoutPage><RegistroPage/></LayaoutPage>} />
        <Route path="/unidades" element={<LayaoutPage><UnidadesPage/></LayaoutPage>} /> 
      </Routes>  
      
    </BrowserRouter>
  )
}

export default App

