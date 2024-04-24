import React from "react";
import SectionConsultas from "./SectionConsultas/SectionConsultas";
import { dataMovements } from "./../index";

const Consultas = () => {
  return (
    <div className="w-h-full text-black bg-dark-bgpry py-16">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-6 items-center px-3 lg:px-16 py-16">
          <span className="text-[35px] font-bold">¿Qué quieres hacer hoy?</span>
          <p className="text-[20px] font-semibold text-center text-[#9b9aa9]">
            Descubre todo lo que tenemos para ti y realiza tus consultas 100%
            digital.
          </p>
        </div>

       
          <div className="grid grid-cols-2 lg:grid-cols-4 items-center gap-6 mx-3 lg:mx-16">
          {dataMovements.map((value, index) => (
            <SectionConsultas
              key={index}
              id={index}
              icon={value.icon}
              title={value.title}
              link={value.link}
            ></SectionConsultas>
          ))}

       
        </div>
      </div>
    </div>
  );
};

export default Consultas;
