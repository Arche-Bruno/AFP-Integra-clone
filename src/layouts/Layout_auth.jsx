import React from 'react'
import { Outlet } from 'react-router-dom'
import imgBg  from "../imgs/bg-min2.svg"
import imgIntegra from "../imgs/img-admin/state/afp.jpg"
const Layout_auth = () => {
  return (
    <div className='relative w-full min-h-screen bg-dark-bgpry flex items-center justify-center'>

        <div className='absolute inset-0 z-0 flex items-center justify-center '>
          <img src={imgIntegra} alt="image-main" className='object-cover w-[100%] h-[100%] bg-center opacity-100 filter blur-[2px]' />
        </div>
       
       
         <div className='relative w-full'>
     
            <Outlet></Outlet>
        </div> 
    </div>
  )
}

export default Layout_auth