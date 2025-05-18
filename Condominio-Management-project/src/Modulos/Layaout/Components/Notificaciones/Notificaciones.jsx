import React from 'react'
import { RiDashboardLine, RiCalendar2Fill, RiPaypalLine, RiAdminLine, RiLogoutBoxFill, RiMenLine, RiMenu3Fill, RiCloseLine, RiNotification2Fill, RiNotification3Line, RiArrowDownSLine, RiSearch2Line, RiCheckboxBlankCircleFill, RiSearchLine, RiFilter3Line} from 'react-icons/ri'

const Notificaciones = () => {
  return (
     <header className=' z-1 flex flex-col md:flex-row items-center justify-between p-4 w-full'>
              {/*Buscador*/}
              <form action="" className='w-full md:[40%] lg:w-[30%] order-1 md:order-none'>
                <div className='relative '>
                  <RiSearch2Line className='absolute left-1 top-3'/>
                  <input type="text" placeholder='Buscar' className='w-full bg-gray-200 py-2 pl-8 rounded-lg outline-none' />
                </div>
              </form>
              <nav className='w-full md:[60%] lg:w-[70%] flex justify-center md:justify-end'>
                <ul className='hidden sm:flex items-center gap-4 '>
                  <li>
                    <a href="">
                      <RiNotification3Line className='text-xl'/>
                      <RiCheckboxBlankCircleFill className='absolute top-6 right-35  text-xs text-red-500'/>
                    </a>
                  </li>
                  <li>
                    <a href="" className='flex items-center gap-1'>
                      Carlos Prieto <RiArrowDownSLine/>
                    </a>
                  </li>
                </ul>
              </nav>
            </header>
  )
}

export default Notificaciones
