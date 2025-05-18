import React, { useState } from 'react'

const Registro = () => {

  const [propietario, setPropietario] = useState('');
  const [numero, setNumero] = useState('');
  const [piso, setPiso] = useState('');
  const [torre, setTorre] = useState('');
  const [estado, setEstado] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoApartamento = {
      propietario: propietario,
      numero: numero,
      piso: piso,
      torre: torre,
      estado: estado
    };

  

    try {

      const response = await fetch('http://localhost:8083/api/apartamentos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoApartamento)
      });

      if (response.ok) {
        alert('Apartamento registrado con éxito');
      } else {
        alert('Error al registrar');
      }
      
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div>
      <div>
        {/*Content main*/}
        <div className='p-4 lg:p-12 bg-gray-100 h-full'>
          <div className='mb-8'>
            <h1 className='text-2xl md:text-3xl font-semibold'>Registro</h1>

            <div>
                {/*Formulario*/}
                <form onSubmit={handleSubmit} className='space-y-4 mt-8 grid grid-cols-1 lg:grid-rows-1 gap-4'>
                    <input type="text" value={propietario} onChange={e => setPropietario(e.target.value)} placeholder="Nombre"  className='bg-white flex flex-col justify-center lg:col-span-1 p-3' />
                    
                    <input type="text" value={numero} onChange={e => setNumero(e.target.value)} placeholder="Numero"  className='bg-white flex flex-col justify-center lg:col-span-1 p-3' />

                    <input type="text" value={piso} onChange={e => setPiso(e.target.value)} placeholder="Piso"  className='bg-white flex flex-col justify-center lg:col-span-1 p-3' />

                    <input type="text" value={torre} onChange={e => setTorre(e.target.value)} placeholder="Torre"  className='bg-white flex flex-col justify-center lg:col-span-1 p-3' />

                    <input type="text" value={estado} onChange={e => setEstado(e.target.value)} placeholder="Estado"  className='bg-white flex flex-col justify-center lg:col-span-1 p-3' />
                     <button type="submit" className="bg-amber-300 text-white mt-10 px-6 py-2 rounded-md hover:bg-amber-400 transition">
                                      Registrar
                                    </button>

                </form>
                                   


            </div>
            
          </div>
          
        
        </div>
      </div>
    </div>
  )
}

export default Registro
