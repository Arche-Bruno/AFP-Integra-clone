import React, { useContext } from "react";
import SectionRentabilidad from "./SectionRentabilidad/SectionRentabilidad";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import SectionStrategy from "./SectionStrategy/SectionStrategy";
import { Afp_primaContext } from "./context/Afp_primaContext";

const data = [
  { name: "Enero", Rentabilidad: 1000 },
  { name: "Febrero", Rentabilidad: 2000 },
  { name: "Marzo", Rentabilidad: 1500 },
  { name: "Abril", Rentabilidad: 3000 },
  { name: "Mayo", Rentabilidad: 2500 },
];

const Rentabilidad = () => {
  const { setFormUser, formUser } = useContext(Afp_primaContext);
  console.log(formUser.name);
  // Función para formatear el contenido del eje Y (YAxis) y el tooltip (Tooltip)
  const formatRentabilidad = (value) => `S/.${value}`;
  return (
    <div className="w-h-full bg-dark-bgWhite flex flex-col gap-8 md:gap-0 pb-8">
      <div className=" max-h-[550px] bg-dark-primary relative pb-16  ">
        <div className="flex flex-col items-center gap-4 mt-8">
          <span className="text-center text-[30px] lg:text-6xl font-bold">
            Hola {formUser.name},
          </span>
          <span className="text-center text-[20px] mx-4 lg:text-2xl font-semibold">
            Conoce todo sobre la rentabilidad de tu fondo
          </span>
        </div>

        <div className="hidden lg:block md:absolute  text-black bg-dark-bgWhite lg:top-[175%] lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 w-[450px] lg:w-[1150px] rounded-[35px]  shadow-lg pt-[50px]">
          <span className="text-4xl font-bold ml-12 text-center">
            Desde que te afiliaste en 2020:
          </span>
          <SectionRentabilidad className=""></SectionRentabilidad>
        </div>
      </div>
      <div className="w-full md:hidden text-black mt-8 w-[300px] mx-auto">
        <SectionRentabilidad className=""></SectionRentabilidad>
      </div>
      <div className="text-black  lg:mt-[400px] bg-dark-bgpry p-8 rounded-lg flex flex-col gap-6 ">
        <span className="text-[22px] font-bold mx-4   lg:text-[25px] lg:mx-24">
          ¿Qué es la rentabilidad negativa?
        </span>
        <p className="text-[18px] mx-4 lg:text-[22px] lg:mx-24">
          La rentabilidad negativa no es pérdida de dinero, sino una
          desvalorización pasajera que sucede por las condiciones de los
          mercados globales, el contexto mundial, entre otros factores. Por eso,
          nuestro equipo de expertos tiene una estrategia de inversión que
          permite que los fondos se recuperen y presenten los mejores resultados
          a largo plazo.
          <b>Para más detalle sobre cómo valorizamos los fondos de pensión</b> ,
          ingresa aquí.
        </p>
      </div>

      <div className="w-h-full text-black px-4 mt-16 px-16">
        <div className="flex flex-col gap-16">
          <span className="text-center font-bold text-4xl lg:text-[50px] ">
            Tu fondo se construye a largo plazo
          </span>
          <span className="text-center font-light text-[18px] lg:text-[20px]">
            Aquí puedes comprobar que, a pesar de periodos de desvalorización,
            los fondos de pensión tienen una tendencia de crecimiento a largo
            plazo
          </span>
        </div>
      </div>

      <div className="mx-auto mt-16 bg-dark-text_primary/5 p-16 rounded-2xl mb-8">
        <div className="hidden lg:block"> 
        <BarChart
          width={600}
          height={300}
          data={data}
          
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={formatRentabilidad} />
          <Tooltip formatter={formatRentabilidad} />
          <Legend />
          <Bar dataKey="Rentabilidad" fill="#0057C2" />
        </BarChart>


        </div>
       <div className="block lg:hidden">
       <BarChart
        
          width={300}
          height={400}
          data={data}
          //
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={formatRentabilidad} />
          <Tooltip formatter={formatRentabilidad} />
          <Legend />
          <Bar dataKey="Rentabilidad" fill="#0057C2" />
        </BarChart>

       </div>
       



        <div className="mt-8">
          <span className="text-black text-self text-[16px]">
            ¿Quieres saber más? Conoce qué es el valor cuota y cómo se calcula
            tu fondo a partir de este valor,
            <span className="text-dark-text_primary font-bold cursor-pointer ">
              aquí
            </span>{" "}
            .
          </span>
        </div>
      </div>

      <div className="bg-dark-bgpry w-full text-black mt-[150px]">
        <SectionStrategy></SectionStrategy>
      </div>
    </div>
  );
};

export default Rentabilidad;
