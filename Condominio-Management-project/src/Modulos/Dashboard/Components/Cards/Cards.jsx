import React from 'react'

const Cards = ({customers}) => {
  return (
    <>
        
        {customers.map(customer => (
          <div key={customer.id} className='mt-8 grid grid-cols-1 lg:grid-cols-4 gap-4'>
             <div className='bg-white flex flex-col justify-center lg:col-span-2  p-3'>
                <h2 className='text-amber-400 opacity-40 text-2xl'>Pago</h2>
                <p className='text-6xl'>{customer.name}</p>
            </div>
            <div className='bg-white flex flex-col p-4 lg:col-span-1'>
            <h2 className='text-amber-400 opacity-40 text-2xl'>Pendiente</h2>
            <p className='text-5xl'>{customer.email}</p>
            </div>
            <div className='bg-white flex flex-col p-4 lg:col-span-1'>
            <h2 className='text-amber-400 opacity-40 text-2xl'>Deuda</h2>
            <p className='text-6xl'>{customer.comentario}</p>
            </div>
          </div>
        ))}
           
      </>    
   
  )
}

export default Cards
