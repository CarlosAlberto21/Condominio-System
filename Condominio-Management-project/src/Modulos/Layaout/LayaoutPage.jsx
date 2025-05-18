import React from 'react'
import { RiCloseLine, RiMenu3Fill } from 'react-icons/ri';
import Menu from './Components/Menu/Menu';
import Notificaciones from './Components/Notificaciones/Notificaciones';
import { useState } from 'react'; 

const LayaoutPage = ({children}) => {
    const [slider, setSidebar] = useState(false);
      const handleSidebar =() =>{
        setSidebar(!slider);
      }
  return (
    
   
    <div>
          <div className='min-h-screen grid grid-cols-1  lg:grid-cols-6'>
     
        <Menu slider={slider} handleSidebar={handleSidebar} />
          <div className='col-span-5'>
            <Notificaciones/> 

        
          {children}


      <div className='mt-4 lg:hidden flex justify-end'>
     <button
       onClick={handleSidebar}
       className='p-2 text-white rounded-full text-2xl bg-gray-400'
     >
       {slider ? <RiCloseLine /> : <RiMenu3Fill />}
     </button>
   </div>
           </div>
         </div>
       </div>
  )
}

export default LayaoutPage
