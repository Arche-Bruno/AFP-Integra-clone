import React, { useContext } from "react";
import CallMadeIcon from "@mui/icons-material/CallMade";

import statitics from "../imgs/img-admin/statistics.svg";
import CloseIcon from "@mui/icons-material/Close";

import arrowImg from "../imgs/img-admin/arrowImg.png";
import "./Admin.css";
import CountUp from "react-countup";
import SectionRentabilidad from "./SectionRentabilidad/SectionRentabilidad";
import { Afp_primaContext } from "./context/Afp_primaContext";
const Home = () => {
  const {setFormUser,formUser} = useContext(Afp_primaContext)
  console.log(formUser.name)
  return (
    <div className="w-h-full bg-dark-bgpry">
      <div className="w-h-full p-12 flex flex-col gap-12">
        <div className="w-full bg-dark-primary rounded-[35px] flex  justify-between px-3 lg:px-8 py-6">
          <div className="flex items-center gap-6">
            <div className="w-[70px] hidden md:block">
              <img src={statitics} alt="image-statitics" className="w-full" />
            </div>
            <div className=" flex flex-col gap-2">
              <span className="text-[19px] md:text-2xl font-semibold">
                ¡Nuevo! Conoce más sobre la rentabilidad de tu fondo de pensión
                y cómo invertimos tu dinero.
              </span>
              <div className="flex items-center gap-2 text-dark-bgYellow">
                <span className="text-[21px] font-medium">
                  Ir a mi rentabilidad
                </span>
                <div className="flex-start">
                  <CallMadeIcon></CallMadeIcon>
                </div>
              </div>
            </div>
          </div>

          <div>
            <CloseIcon></CloseIcon>
          </div>
        </div>

        <div className="text-black flex flex-col gap-2 md:hidden ">
          <span className="text-3xl font-bold">Hola {formUser.name},</span>
          <span className="text-[22px]">Bienvenido a tu Agencia Digital</span>
        </div>
        <div className="flex bg-dark-bgWhite justify-between rounded-[32px] text-black shadow-lg py-12">
          <div className="hidden md:block md:flex md:flex-col md:gap-2 pl-10">
            <span className="text-3xl font-bold">Hola {formUser.name},</span>
            <span className="text-[22px]">Bienvenido a tu Agencia Digital</span>
          </div>

          <div className="flex flex-col gap-2 pr-20 border-l pl-8 ">
            <span className="text-[22px]">Tienes ahorrado en total</span>
            <span className="text-4xl font-bold text-dark-primary">
              <div>
                S/. <CountUp start={0} end={formUser.money} duration={2.5} />
              </div>
            </span>
          </div>
        </div>

        <div className="text-black flex flex-col gap-6 w-full max-w-[1000px]">
          <span className="font-bold text-[25px]">Conformado por :</span>

          <div className="w-full  flex items-center gap-10 ">
            <div className="w-full max-w-[400px] flex flex-col gap-8 p-9 bg-dark-bgWhite shadow-lg rounded-[35px] border-[3px] border-dark-text_primary h-[330px]">
              <div className="flex flex-col gap-4">
                <span className="text-[17px]">Fondo de pensión</span>
                <span className="font-bold text-[24px]">S/{parseInt(formUser.money).toLocaleString()}</span>
              </div>

              <div className="flex items-centeer gap-3 mb-5">
                <span className="text-[17px]">Invertido en el tipo de</span>
                <span className="text-[18px] font-semibold text-[#00B6D7]">
                  Fondo 2
                </span>
              </div>

              <button className="max-w-[230px] border-[3px] border-dark-text_primary rounded-full py-3">
                {" "}
                <span className="text-dark-text_primary text-[22px]">
                  Ver detalle
                </span>
              </button>
            </div>

            <div className="hidden lg:block lg:flex w-full lg:max-w-[400px] lg:items-center lg:justify-center rounded-[35px] bg-dark-primary  h-[330px]">
              <div className="w-[150px]">
                <img src={arrowImg} className="w-full" alt="image-arrow" />
              </div>

              <div className="flex flex-col max-w-[200px]">
                <span className=" text-[26px] text-white">
                  Conoce y abre la cuenta que te permite
                </span>
                <span className="text-dark-bgYellow text-[26px] ">
                  invertir y retirar cuando quieras
                </span>
                <button className="bg-dark-bgYellow mt-8 rounded-full py-4">
                  <span className="text-dark-text_primary text-[18px] font-semibold">
                    Empieza aquí
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-dark-bgWhite shadow-lg flex flex-col gap-6 items-center rounded-[35px] text-black py-[35px]">
          <span className="pb-16 text-[40px] font-bold text-center">
            Así se compone tu Fondo de Pensión
          </span>
          <SectionRentabilidad></SectionRentabilidad>
        </div>
      </div>
    </div>
  );
};

export default Home;
