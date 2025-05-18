import React from 'react'

const Cards = ({apartamentos}) => {
  return (
    <>
        
        {apartamentos.map(apartamento => (
          <div key={apartamento.id} className='mt-8 grid grid-cols-1 lg:grid-rows-1 gap-4'>
             <div className='bg-white flex flex-col justify-center lg:col-span-1 p-3'>
                <h2 className='text-amber-400 opacity-40 text-2xl'>Propietario</h2>
                <p className='text-6xl'>{apartamento.propietario}</p>
            </div>
            <div className='bg-white flex flex-col p-4 lg:col-span-1'>
            <h2 className='text-amber-400 opacity-40 text-2xl'>Numero-apto</h2>
            <p className='text-5xl'>{apartamento.numero}</p>
            </div>
            <div className='bg-white flex flex-col p-4 lg:col-span-1'>
            <h2 className='text-amber-400 opacity-40 text-2xl'>Piso</h2>
            <p className='text-6xl'>{apartamento.piso}</p>
            </div>
            <div className='bg-white flex flex-col p-4 lg:col-span-1'>
            <h2 className='text-amber-400 opacity-40 text-2xl'>Torre</h2>
            <p className='text-6xl'>{apartamento.torre}</p>
            </div>
            <div className='bg-white flex flex-col p-4 lg:col-span-1'>
            <h2 className='text-amber-400 opacity-40 text-2xl'>Estado</h2>
            <p className='text-6xl'>{apartamento.estado}</p>
            
            </div>
            
          </div>
        ))}
           <button
        
        className="bg-amber-300 text-white mt-10 px-6 py-2 rounded-md hover:bg-amber-400 transition"
      >
        Update
      </button>
      </>    
   
  )
}

export default Cards
