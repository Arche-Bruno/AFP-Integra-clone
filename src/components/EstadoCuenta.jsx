import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import AddIcon from "@mui/icons-material/Add";
import SectionEstadoCuentaCard from "./SectionEstadoCuenta/SectionEstadoCuentaCard";
import { stateData } from "..";
import { Afp_primaContext } from "./context/Afp_primaContext";
const EstadoCuenta = () => {
  const [showAccordion, setShowAccordion] = useState(false);

  const handleAccordion = () => {
    setShowAccordion(!showAccordion);
  };
  console.log(showAccordion);

  const {setFormUser,formUser} = useContext(Afp_primaContext)

  
  const [number, setNumber] = useState(formUser.money)
   
  const moneyWithPorcentage = (parseInt(number) *6)/100;
  const moneyWithDrawn = (parseInt(number) *2)/100;
  const comision = (parseInt(number) *0.5)/100;
  const reducedNumber = (number- moneyWithPorcentage)-moneyWithDrawn;
  const newReduced = reducedNumber+moneyWithPorcentage;
  console.log(formUser.name)
  return (
    <div className="w-h-full ">
      <div className="flex flex-col gap-12">
        <div className=" flex flex-col py-6 lg:flex-row px-16 justify-between items-center bg-[#E4EBF7] h-[200px]">
          <div>
            <Box sx={{ width: 280, fontSize: "18px" }}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Tipo de estado de cuenta
                </InputLabel>
                <NativeSelect
                  defaultValue={30}
                  inputProps={{
                    name: "age",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value={20} className="font-bold">
                    Actualizado
                  </option>
                  <option value={30} className="font-bold ">
                    Mensual
                  </option>
                </NativeSelect>
              </FormControl>
            </Box>
          </div>
          <button className="text-dark-text_primary bg-[#FFEF7D] py-4 px-14 rounded-3xl">
            <span className="text-[20px] ">Descargar</span>
          </button>
        </div>

        <div className="text-black w-full px-16 before:absolute before:w-[8px] before:h-[70px] before:bg-[#00BBEA] ">
          <span className="pl-12 text-[42px] font-bold text-dark-text_primary">
            Hola {formUser.name},
          </span>
        </div>

        <div className="bg-dark-text_primary flex flex-col lg:flex-row items-center justify-between mx-16 py-16 px-8 rounded-br-[80px]">
          <div className="flex flex-col gap-2">
            <span className="text-[22px] lg:text-[28px]  ">Al 18 de Abril del 2024 tienes ahorrado en</span>
            <span className="text-[20px] lg:text-[28px]  "> AFP Integra un total de</span>
          </div>
          <div className="text-[40px]  lg:text-[72px] font-light">S/{parseInt(formUser.money).toLocaleString()}</div>
        </div>

        <div className="w-h-full flex flex-col gap-4 px-16 text-black bg-dark-bgWhite mb-10 ">
          <div className="shadow-xl">
            <div className="bg-dark-bgYellow pl-8 py-4 ">
              <span className="text-[35px] text-dark-text_primary">
                Fondo de Pensión
              </span>
            </div>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center gap-2 mx-16 mt-14 border-b-4 border-indigo-500 border-b-4 border-[#00BBEA] mb-16 ">
              <span className="text-[25px] text-dark-text_primary">
                Tus aportes están invertidos en el:
              </span>
              <span className="text-[20px] font-bold text-[#00BBEA]">
                Fondo 2{" "}
              </span>
              <span className="text-[20px] font-bold text-[#A8A6BB]">
                Periodo del 22/10/2020 al 18/04/2024
              </span>
            </div>
            <div
              className="flex items-center gap-2 mx-16 mt-14 mb-16 relative
            border-l-4 border-[#00BBEA]
            pb-10 before:w-8 before:h-8 before:rounded-full before:bg-[#fff] before:border before:border-[4px] before:border-[#00BBEA] before:absolute before:top-0 before:left-[-17px]"
            >
              <span className="text-[20px] text-[#9b9aa9] ml-10  border-b-2 border-[#bababa] pb-4">
                Bruno, desde que te afiliaste a las AFP has{" "}
                <strong className=" text-dark-text_primary font-thin">
                  aportado{" "}
                  <b className="text-[28px] font-semibold">S/{parseInt(newReduced).toLocaleString()}</b>{" "}
                </strong>
                . Se generó una{" "}
                <b className="text-[18px] text-dark-text_primary">
                  rentabilidad
                </b>{" "}
                De este monto ya se restó la comisión cobrada sobre tu fondo.
                para ti de{" "}
                <b className="text-[18px] text-dark-text_primary">-S/{parseInt(comision).toLocaleString()}</b> ,
                y se realizaron retiros y cargos por S/ {parseInt(moneyWithDrawn).toLocaleString()}. Por lo tanto,
                el{" "}
                <b className="text-[19px] text-dark-text_primary">
                   fondo para tu futura pensión
                </b>{" "}
                ahora es de{" "}
                <b className="text-[28px] font-semibold text-dark-text_primary">
                  S/{parseInt(formUser.money).toLocaleString()}
                </b>
                .
              </span>
            </div>

            <div
              className={`relative z-20 flex items-center gap-6 border-t-2 border-b-2 border-[#bababa] pb-6 mx-16 transition-all duration-300 ease-in-out overflow-hidden `}
            >
              <button
                className="flex items-center gap-3"
                onClick={handleAccordion}
              >
                <div className="bg-dark-text_primary text-white p-4">
                  <AddIcon></AddIcon>
                </div>
                <span className="text-[22px] font-semibold text-dark-text_primary">
                  Ver detalle del periodo
                </span>
              </button>
              <span className="text-[#9b9aa9] text-[18px] font-semibold hidden lg:block">
                (Del 01/12/2023 al 18/04/2024)
              </span>
            </div>
            <div
              className={`transition-all duration-300 ease-in-out ${
                !showAccordion ? " h-0 overflow-hidden" : "h-[400px] lg:h-[200px] "
              }`}
            >
              <div
                className={`grid grid-cols-2 gap-4 lg:grid-cols-4 mx-16 py-10    `}
              >
                {stateData.map((value, index) => (
                  <SectionEstadoCuentaCard
                    key={index}
                    id={index}
                    title={value.title}
                    icon={value.icon}
                    cant={value.cant}
                  ></SectionEstadoCuentaCard>
                ))}
              </div>
            </div>

            <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mt-6 ">
              <div className="w-full flex flex-col gap-4 w-1/2 pl-16 border shadow-lg h-[450px]">
                <div className="bg-dark-text_primary text-[22px] text-white font-semibold py-4">
                  <span className="pl-4">Datos Personales</span>{" "}
                </div>
                <div className="p-6">
                  <div className="">
                    <span className="text-[18px] text-dark-text_primary font-semibold mr-2 ">Nombres y apellidos</span>
                    <span className="text-[17px] font-light">Bruno Angelo Mallcco Arche</span>
                  </div>

                  <div className="">
                    <span className="text-[18px] text-dark-text_primary font-semibold mr-2">CUSPP</span>
                    <span className="text-[17px] font-light">7753511BMALH1</span>
                  </div>

                  <div className="">
                    <span className="text-[18px] text-dark-text_primary font-semibold mr-2">Documento de identidad</span>
                    <span className="text-[17px] font-light">DNI 70489955</span>
                  </div>

                  <div className="">
                    <span className="text-[18px] text-dark-text_primary font-semibold mr-2">Esquema de cobro de comisión</span>
                    <span className="text-[17px] font-light">Mixta con tránsito a saldo</span>
                  </div>

                  <div className="">
                    <span className="text-[18px] text-dark-text_primary font-semibold mr-2">Teléfonos</span>
                    <span className="text-[17px] font-light">956639056</span>
                  </div>

                  <div className="">
                    <span className="text-[18px] text-dark-text_primary font-semibold mr-2">Correo electrónico</span>
                    <span className="text-[17px] font-light">{formUser.email}</span>
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col gap-4 w-1/2 pr-16 border shadow-lg h-[450px]">
                <div className="bg-dark-text_primary text-[22px] text-white font-semibold py-4">
                  <span className="ml-6">Más Información</span>
                </div>
                <div className="mx-6">

                  <span className="text-[20px] font-light ">Para mayor información comparativa entre las AFP, ingresa a:</span>
                </div>

                <button className="bg-gradient-to-b from-dark-text_primary/80 to-dark-text_primary w-[250px] mx-auto py-4 rounded-lg text-white ">
                  <span className="text-[22px]">Web SBS </span>
</button>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstadoCuenta;
