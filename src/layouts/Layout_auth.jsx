import React from 'react'
import { Outlet } from 'react-router-dom'
import imgBg  from "../imgs/bg-min2.svg"
const Layout_auth = () => {
  return (
    <div className='relative w-full min-h-screen bg-dark-bgpry flex items-center justify-center'>
        <div className='absolute inset-0 z-0 flex items-center justify-center'>
          <img src={imgBg} alt="image-main" className='object-cover w-[100%] h-[90%] bg-center opacity-100 filter blur-sm' />
        </div>
        <div className='w-full'>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Layout_auth