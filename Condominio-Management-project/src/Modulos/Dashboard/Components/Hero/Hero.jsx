import React from 'react'
import { RiDashboardLine, RiCalendar2Fill, RiPaypalLine, RiAdminLine, RiLogoutBoxFill, RiMenLine, RiMenu3Fill, RiCloseLine, RiNotification2Fill, RiNotification3Line, RiArrowDownSLine, RiSearch2Line, RiCheckboxBlankCircleFill, RiSearchLine, RiFilter3Line} from 'react-icons/ri'

const Hero = () => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 items-center'>
            <form action="" className='lg:col-span-2'>
              <div className='relative'>
                <RiSearchLine className='absolute left-1 top-3 text-amber-400'/>
                <input type="text"className='bg-white py-2 pl-8 pr-4 outline-none w-full'
                placeholder='Buscar' />
              </div>
            </form>
            <form action="" className='lg:col-span-1'>
                <div className='relative'>
                  <RiSearchLine className='absolute left-2 top-3 text-amber-400'/>
                  <select name="" id="" type="text" 
                  className='bg-white py-2 pl-8 pr-4 outline-none w-full'>
                    <option value="">Anywhere</option>
                  </select>
                </div>
            </form>
            <form action="" className='col-span-1'>
              <div className='relative'>
                <RiFilter3Line className='absolute left-2 top-3 text-amber-400'/>
                <input type="text" name="" id=""
                className='bg-white py-2 pl-8 pr-4 outline-none w-full'
                placeholder='Filter' />
              </div>
            </form>
          </div>)
}

export default Hero
