import React from 'react'

const LoginPage = () => {
  return (
    <div>
      <div>
        {/*Content main*/}
        <div className='p-4 lg:p-12 bg-gray-100 h-full'>
          <div className='mb-8'>
            <h1 className='text-2xl md:text-3xl font-semibold text-center'>Inicio</h1>

            <div>
                {/*Formulario*/}
                <form  className='space-y-4 mt-8 grid grid-cols-1 lg:grid-rows-1 gap-4'>
                    <input type="text" placeholder="usuario"  className='bg-white flex flex-col justify-center lg:col-span-1 p-3' />
                    
                    <input type="text"  placeholder="password"  className='bg-white flex flex-col justify-center lg:col-span-1 p-3' />

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

export default LoginPage
