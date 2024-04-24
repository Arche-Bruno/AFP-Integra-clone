import React, { useContext } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Afp_primaContext } from "../../components/context/Afp_primaContext";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
const Header = () => {
  const { setShowNav, showNav, showUser, setShowUser,setFormUser,
    formUser } =
    useContext(Afp_primaContext);

  const handleShowNav = () => {
    setShowNav(!showNav);
  };
  const handleShowUser = () => {
    setShowUser(!showUser);
  };


  return (
    <div className="ml-auto mr-8 ml-8 flex items-center justify-between w-full  lg:justify-normal gap-2 lg:gap-6 text-dark-bgsecon cursor-pointer ">
      <div
        className="ml-8 lg:hidden text-dark-primary header-icon cursor-pointer "
        onClick={handleShowNav}
      >
        <MenuIcon className="icon"></MenuIcon>
      </div>

      <div
        className={`text-red-500 header-icon-x duration-3000 ${
          showNav ? "block" : "hidden"
        }`}
        onClick={handleShowNav}
      >
        <CloseIcon className="icon"></CloseIcon>
      </div>
      <div
        className={`flex flex items-center gap-2 ml-auto duration-3000 ${
          showNav ? "hidden" : "block"
        }`}
        onClick={handleShowUser}
      >
        <div>
          <Stack direction="row" spacing={2}>
            <Avatar
              className="Header-Avatar"
              sx={{
                background: "#0033A0",
                fontSize: "20px",
                width: "50px",
                height: "50px",
              }}
            >
             {formUser.name.charAt(0).toUpperCase()}
            </Avatar>
          </Stack>
        </div>
        <div className="flex flex-col">
          <span className="lg:text-[21px]">{formUser.name}</span>
          <p className="lg:text-sm">{formUser.email}</p>
        </div>
        <div className="header-icon text-dark-text_primary">
          <KeyboardArrowDownIcon className="icon"></KeyboardArrowDownIcon>
        </div>
      </div>
      {showUser ? (
        <div
          className={`w-full min-h-screen bg-slate-950 bg-opacity-80 fixed inset-0 z-20 `} onClick={handleShowUser}
        ></div>
      ) : (
        <></>
      )}
      <div
        className={`fixed z-20 top-0 right-4 w-full max-w-[350px] bg-black transition-all duration-300 ease-in-out   bg-dark-bgWhite rounded-lg ${
          showUser ? "translate-y-[80px]" : "translate-y-[-500px]"
        }`}
      >
        <div className="flex flex-col justify-center items-center justify-between gap-4 relative px-4 pt-8">
          <div
            className="absolute top-4 right-3 text-dark-danger "
            onClick={handleShowUser}
          >
            <CloseIcon className="icon"></CloseIcon>
          </div>
          <div>
            <Stack direction="row" spacing={2}>
              <Avatar
                className="Header-Avatar"
                sx={{
                  background: "#0033A0",
                  fontSize: "20px",
                  width: "50px",
                  height: "50px",
                }}
              >
                BM
              </Avatar>
            </Stack>
          </div>
          <div className="flex flex-col items-center">
            <span className=" text-2xl">{formUser.name}</span>
            <p className="text-[20px]">{formUser.email}</p>
          </div>

          <div className="flex items-center flex-col gap-6 pb-4 border-b w-full border-gray-400">
            <Link to="/perfil" onClick={handleShowUser}>
              <button className="bg-dark-bgYellow py-4 px-8 rounded-full text-dark-text_primary text-[23px]">
                <span className="font-semibold">Actualiza datos</span>
              </button>
            </Link>

            <Link to="/auth"  onClick={handleShowUser}>
              <button className="text-[21px] text-dark-primary">
                Cerrar sesión
              </button>
            </Link>
          </div>

          <div className="flex justify-between items-center w-full pb-3">
            <span className="text-[12px]">Politica de Privacidad </span>
            <span className="text-[12px]">Términos y Condiciones de Uso</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
