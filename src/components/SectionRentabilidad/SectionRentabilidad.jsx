import React, { useContext, useState } from 'react'
import PictureInPictureAltIcon from "@mui/icons-material/PictureInPictureAlt";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import FilterFramesIcon from "@mui/icons-material/FilterFrames";
import PaidIcon from "@mui/icons-material/Paid";
import { Afp_primaContext } from '../context/Afp_primaContext';
const SectionRentabilidad = () => {
  const {setFormUser,formUser} = useContext(Afp_primaContext)

  const [number, setNumber] = useState(formUser.money)
   
  const moneyWithPorcentage = (parseInt(number) *6)/100;
  const moneyWithDrawn = (parseInt(number) *2)/100;
  const reducedNumber = (number- moneyWithPorcentage)-moneyWithDrawn;
 
  


  return (
   
    <div className="w-full flex flex-col lg:flex-row items-center justify-around ">

    <div className="flex flex-col items-center justify-between  gap-3 max-w-[220px] h-[210px]">
  
      <div className="Home-icon ">
        <PictureInPictureAltIcon className="icon"></PictureInPictureAltIcon>
      </div>
      <span className="text-[19px]">Tus aportes</span>
      <span className="text-[22px] font-bold">S/ {parseInt(reducedNumber).toLocaleString()}</span>
    </div>
    <span className="text-dark-text_primary text-[55px]">-</span>


    <div className="flex flex-col items-center  justify-between  gap-3 max-w-[220px] h-[210px]">
      <div className="Home-icon ">
        <SignalCellularAltIcon className="icon"></SignalCellularAltIcon>
      </div>
      
      <span className="text-[19px] text-center">Hemos generado una rentabilidad de :</span>
      <span className="text-[22px] font-bold">S/ {parseInt(moneyWithPorcentage).toLocaleString()}</span>
    </div>
    <span className="text-dark-text_primary text-[55px]">-</span>
    <div className="flex flex-col gap-3  justify-between max-w-[220px] items-center h-[210px]">
      
      <div className="Home-icon ">
        <FilterFramesIcon className="icon"></FilterFramesIcon>
      </div>
      <span className="text-[19px]">Y retiraste :</span>
      <span className="text-[22px] font-bold">S/  {parseInt(moneyWithDrawn).toLocaleString()}</span>
    </div>
    <span className="text-dark-text_primary text-[55px]">=</span>
    <div className="flex flex-col gap-3 max-w-[300px]  justify-between items-center bg-dark-text_primary p-12 text-white rounded-[35px] ">
     
      <div className="Home-icon ">
        <PaidIcon className="icon"></PaidIcon>
      </div>

      <span className="text-[19px]">Total de tu fondo :</span>

      <div className="flex items-center gap-3">
        <span className="text-[22px] font-bold">S/{parseInt(formUser.money).toLocaleString()}</span>

        <button className="bg-dark-bgWhite text-black rounded-lg p-2">Fondo 2</button>
      </div>
    </div>
  </div>
  )
}

export default SectionRentabilidad