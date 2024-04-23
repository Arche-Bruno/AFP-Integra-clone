import React from 'react'

const SectionEstadoCuentaCard = ({id,
    title,
    icon,
    cant,}) => {
  return (
    <div className='flex flex-col gap-2 items-center'>

        <div className='w-[50px]'>
            <img src={icon} alt="image-icon" className='w-full' />
        </div>
        <span className='text-[#9b9aa9] text-[16px] font-semibold'>{title} </span>
        <span className='text-[25px] font-light text-dark-text_primary'>S/ {cant} </span>

    </div>
  )
}

export default SectionEstadoCuentaCard