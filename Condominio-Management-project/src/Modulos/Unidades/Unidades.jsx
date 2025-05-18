import React from 'react'

import { useState } from 'react'; 
import Conexion from './Components/Conexion/Conexion';


const Unidades = () => {

    

  return (
    <div>
        {/*Content main*/}
        <div className='p-4 lg:p-12 bg-gray-100 h-full'>
          <div className='mb-8'>
            <h1 className='text-2xl md:text-3xl font-semibold'>Apartamento</h1>
            
          </div>
          <Conexion />
        
        </div>
      </div>
  )
}

export default Unidades
