import React, { useContext, useEffect, useState } from "react";
import { navItems } from "../..";
import SidebarCard from "./SidebarCard/SidebarCard";
import LogoutIcon from "@mui/icons-material/Logout";
import "./Admin.css"
/*Clas MUI */
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import CloseIcon from '@mui/icons-material/Close';
import { Afp_primaContext } from "../../components/context/Afp_primaContext";

import logo from "../../imgs/img-admin/logo/logo.svg"
import { Link } from "react-router-dom";
const Sidebar = () => {
  const { setShowNav, showNav, showUser, setShowUser,setFormUser,
    formUser } =
    useContext(Afp_primaContext);

  const [isSelected, setisSelected] = useState(0);
  return (
    <div className="w-h-full flex flex-col items-center">
      <div className="w-h-full flex items-center flex-col  justify-center max-h-[85px] bg-dark-bgWhite border-r border">


        {/* <div className="flex items-center">
          <h1 className="text-dark-primary text-2xl">Afp </h1>
          <h3 className="text-dark-text_primary font-bold text-4xl">Integra</h3>
        </div>
        <div className="flex items-center gap-2 justify-end">
          <span className="sub text-sm">Una empresa</span>
          <span className="text-dark-text_primary text-[19px]">Sura </span>
        </div> */}
   <div className="w-[180px]">
    <img src={logo} alt="" className="w-full" />
   </div>


      </div>
      <div className="w-h-full flex flex-col justify-between items-center my-10 ">
        <div className="flex flex-col ">
          {navItems.map((value, index) => (
            <>
               <SidebarCard
              isSelected={isSelected}
              setisSelected={setisSelected}
              key={index}
              id={index}
              title={value.title}
              icon={value.icon}
              path={value.path}
            ></SidebarCard>
            {index===2 ? 

      <div className="mb-8 mt-4 "> 
        <hr className="border-dark-text_primary/50 border-[2px]"/>
      </div> : 
      
      <></>}
            
            </>
         
          ))}
        </div>
  <Link to="/auth">
  <div className="w-full flex items-center justify-center gap-6 cursor-pointer text-dark-bgpry hover:text-dark-text hover:text-bold border-t-[3px] border-dark-text_primary/50 pt-12 max-w-[300px]">
          <div className="">
            <Stack direction="row" spacing={2} >
              <Avatar sx={{ bgcolor: "white", color: "#0033A0", width:"50px",height:"50px",fontSize:"25px" }}>
              {formUser.name.charAt(0).toUpperCase()}
              </Avatar>
            </Stack>
          </div>



          <div className="text-[19px] duration-300">Cerrar Sesión</div>
          <div className=" cursor-pointer duration-300">
            <LogoutIcon className="w-max"></LogoutIcon>
          </div>


        </div>
  </Link>
       
      </div>
    </div>
  );
};

export default Sidebar;
