import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../pages/admin/Sidebar";
import Header from "../pages/admin/Header";
import Right from "../pages/admin/Right";
import { Afp_primaContext } from "../components/context/Afp_primaContext";

const Layout_admin = () => {
  const navigate = useNavigate();

  const { ok, setOk, setShowNav, showNav } = useContext(Afp_primaContext);

  useEffect(() => {
    navigate("/");
  }, []);

  console.log(showNav)

  return (
    <div className="min-h-screen w-full bg-dark-bgWhite grid grid-cols-1 grid-rows-9 xl:grid-cols-9 text-white">
  
      <div
        className={`w-h-full bg-dark-primary fixed max-w-[320px] z-10 translate-x-[-320px] xl:translate-x-0 transition-all duration-300 ease-in-out ${showNav ? "translate-x-[0px]":"translate-x-[-320px]"}`}
      >
        <Sidebar></Sidebar>
      </div>

      <div className="w-h-full flex items-center overflow-y-auto absolute z-12 inset-0 max-h-[85px] border-b border-gray-400 bg-dark-bgWhite xl:pl-[320px]" style={{ boxShadow: "0 3px 12px -3px rgba(0, 0, 0, 0.5)" }}>
        <Header></Header>
      </div>
      <div className="w-h-full overflow-y-auto overflow-y-auto bg-dark-bgWhite row-span-8 pt-[85px] xl:pl-[320px] xl:col-span-9 xl:row-span-9 ">
   
        
        <Outlet className=" "></Outlet>
      </div>
  
      {showNav ? (
  <div className={`w-full min-h-screen bg-slate-950 bg-opacity-80 fixed inset-0 mt-[85px]`}></div>
) : (
  <></>
)}

      

    </div>
  );
};
//

export default Layout_admin;
