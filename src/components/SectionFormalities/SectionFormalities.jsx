import React from 'react'
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
const SectionFormalities = ({ id, icon: ICON, title, link }) => {
  return (
    <div className="relative bg-dark-bgWhite text-black flex flex-col items-center gap-3 w-full max-w-[215px] h-[190px] justify-around rounded-2xl shadow-lg text-center cursor-pointer transtion-all duration-300 hover:scale-110">

   {id===8 ? 
   <div className='border-b-2 flex items-center justify-center gap-2 w-full '>
    <span className='text-sm text-dark-text_primary'> tramites disponibles</span>
     <div className='formalitiesCardIcon text-dark-text_primary'>
        <HelpOutlineOutlinedIcon className='icon'></HelpOutlineOutlinedIcon>
     </div>
   </div> 
   : <></>}
    <div className="consultasCard-icon">
      <ICON className="icon"></ICON>
    </div>

    {id===0 ? 
    <div className='text-[14px] font-semibold bg-dark-text_primary text-white rounded-full py-1 px-2 absolute top-1 right-2'>
      Nuevo
    </div> : <></>}
    <span className="text-[16px] font-semibold">{title}</span>
    <button className="text-[#60CDDC] font-bold text-[16px] duration-300">{link}
    <ArrowRightOutlinedIcon></ArrowRightOutlinedIcon>
    </button>
  </div>
  )
}

export default SectionFormalities