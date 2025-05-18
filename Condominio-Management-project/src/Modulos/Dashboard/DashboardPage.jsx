import {React, useEffect} from 'react'
import { RiDashboardLine, RiCalendar2Fill, RiPaypalLine, RiAdminLine, RiLogoutBoxFill, RiMenLine, RiMenu3Fill, RiCloseLine, RiNotification2Fill, RiNotification3Line, RiArrowDownSLine, RiSearch2Line, RiCheckboxBlankCircleFill, RiSearchLine, RiFilter3Line} from 'react-icons/ri'
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { useState } from 'react'; 
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Grafico from './Components/Grafico/Grafico';
import PaymentRequest from './Components/PaymentRequest/PaymentRequest';
import Hero from './Components/Hero/Hero';
import Conexion from './Components/Conexion/Conexion';


  const stripePromise = loadStripe('pk_test_51RNQDaRxe2qScmPGYLkUDNJkloP76zwKIYxVe5vqVi5uXAT6et64rill16uxtSBKCrOmw2sv3R0BQw4vm6CWOI3N00cgAqWX4l'); // reemplaza con tu clave pública de Stripe

const DashboardPage = () => {

   const [customers, setCustomers] = useState([]);



  const [slider, setSidebar] = useState(false);
  const handleSidebar =() =>{
    setSidebar(!slider);
  }
  return (
   
     
                
        
      <div>
        {/*Content main*/}
        <div className='p-4 lg:p-12 bg-gray-100 h-full'>
          <div className='mb-8'>
            <h1 className='text-2xl md:text-3xl font-semibold'>Carlos  Prieto</h1>
            
          </div>
          {/*Buscador*/}
         <Hero/>

          {/*Cards*/}
        <Conexion/>
          {/*Grafico*/}
        <Grafico/> 
          
      
      <Elements stripe={stripePromise}>
      <PaymentRequest/>
      </Elements>

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
 
  )
}

export default DashboardPage;
