import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { Afp_primaContext } from "../../../components/context/Afp_primaContext";
const SidebarCard = ({
  id,
  title,
  icon: ICON,
  isSelected,
  setisSelected,
  path,
}) => {
 


  const { showMenu, setShowMenu } = useContext(Afp_primaContext);

  const handleSelected = (idSelected) => {
    setisSelected(idSelected);

    if(idSelected !== 2){
      setShowMenu(false)
    }

  };


  const handleShowMenu = ()=>{
    setShowMenu(!showMenu)
  }
  console.log(path);

  return (
    <Link to={path}>
    <div
      className={`flex flex-col gap-2 py-4 px-4 rounded-[16px]  transition-all duration-300 ease cursor-pointer
     
      ${id === isSelected ? "bg-dark-bgWhite text-dark-text_primary " : ""} `}
      onClick={() => handleSelected(id)}
    >
  
{/* 
        {id === 2 ? (
            <div className={`flex flex-col overflow-hidden transition-all duration-300 ${!showMenu ? "h-7" : "h-full"}`}>
            <div className="flex items-center gap-2 " onClick={handleShowMenu}>
              <div className="">
                <ICON></ICON>
              </div>
              <div className="text-[18px]">{title} </div>
              {showMenu ? (
                <div className="duration-300">
                  <KeyboardArrowUpIcon></KeyboardArrowUpIcon>
                </div>
              ) : (
                <div className="duration-300">
                  <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
                </div>
              )}
            </div>
            {showMenu ? (
              <ul className={`mt-3 overflow-hidden transition-all duration-300 ${!showMenu ? "h-7":"h-full"}`}>
                <li
                  className="px-4 py-4 border-l duration-300 
             border-dark-bgsecon ml-6 relative before:absolute 
             before:w-4 before:h-4 before:left-[-8px] before:top-[23px] before:py-1
             before:bg-dark-bgsecon before:rounded-full before:border-4 before:border-dark-bgpry text-dark-bgsecon text-[16px] hover:text-dark-primary hover:font-medium hover:before:bg-dark-text_primary"
                >
                  Transacciones
                </li>

                <li
                  className="px-4 py-4 border-l
             border-dark-bgsecon ml-6 relative before:absolute 
             before:w-4 before:h-4 before:left-[-8px] before:top-[23px] before:py-1
             before:bg-dark-text_primary before:rounded-full before:border-4 before:border-dark-bgpry text-dark-primary text-[16px] font-medium hover:before:bg-dark-text_primary hover:text-dark-primary hover:font-medium hover:before:bg-dark-text_primary"
                >
                  Saldo
                </li>

                <li
                  className="px-4 py-4 border-l
             border-dark-bgsecon ml-6 relative before:absolute 
             before:w-4 before:h-4 before:left-[-8px] before:top-[23px] before:py-1
             before:bg-dark-bgsecon before:rounded-full before:border-4 before:border-dark-bgpry text-dark-bgsecon text-[16px] hover:text-dark-primary hover:font-medium hover:before:bg-dark-text_primary"
                >
                  Transferencias
                </li>
                <li
                  className="px-4 py-4 border-l
             border-dark-bgsecon ml-6 relative before:absolute 
             before:w-4 before:h-4 before:left-[-8px] before:top-[23px] before:py-1
             before:bg-dark-bgsecon before:rounded-full before:border-4 before:border-dark-bgpry text-dark-bgsecon text-[16px] hover:text-dark-primary hover:font-medium hover:before:bg-dark-text_primary"
                >
                  Alertas y Notificaciones
                </li>
              </ul>
            ) : (
              <></>
            )}

           
          </div>
        ) : ( */}
          <div className="flex items-center gap-2">
            <div className="">
              <ICON></ICON>
            </div>
            <div className="text-[18px]">{title} </div>
          </div>
       
        
    
    </div>
    </Link>
  );
};

export default SidebarCard;
