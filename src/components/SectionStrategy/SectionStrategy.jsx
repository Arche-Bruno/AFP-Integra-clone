import React, { useState } from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "", Rentabilidad: 30 },
  { name: "", Rentabilidad: 50 },
  { name: "", Rentabilidad: 70 },
];
const data2 = [
    { name: "", Rentabilidad: 50 },
    { name: "", Rentabilidad: 20 },
    { name: "", Rentabilidad: 60 },
  ];

const CustomizedLabel = ({ x, y, value }) => (
  <text
    x={x}
    y={y}
    dy={-10}
    textAnchor="middle"
    fill="#000"
  >{`${value}%`}</text>
);

const CustomizedLabel2 = ({ x, y, value }) => (
    <text
      x={x}
      y={y}
      dy={-10}
      textAnchor="middle"
      fill="#000"
    >{`${value}%`}</text>
  );
  const formatRentabilidad2 = (value) => `${value}%`;
const formatRentabilidad = (value) => `${value}%`;

const SectionStrategy = () => {
  const [selectedBar, setSelectedBar] = useState("acumulada");

  const handleSelectedBar = (text) => {
    setSelectedBar(text);
  };
  return (
    <div className="w-h-full px-8 ">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 grid-rows-9 items-center">
        <div className="flex items-start flex-col gap-4 col-span-1 row-span-4 ">
          <span className="text-[40px] font-bold mx-8">
            {" "}
            Así va el resultado de nuestra estrategia de inversión{" "}
          </span>
          <span className="text-[20px] mx-8">
            La estrategia de inversión para tu fondo de pensión está pensada
            para el largo plazo. En tu caso, que estás en el Fondo 2, te
            sugerimos analizar la rentabilidad en un horizonte de 5 años a más.
          </span>
        </div>

        <div className="col-span-1 row-span-9 flex flex-col gap-8 justify-center items-center bg-dark-bgWhite p-10 ">
          <div>
          <div className="radio-inputs">
    <label className="radio">
        <input type="radio" name="radio" onClick={() => handleSelectedBar("acumulada")} />
        <span className={`name ${selectedBar === "acumulada" ? 'checked' : ''}`}>Rentabilidad acumulada</span>
    </label>

    <label className="radio">
        <input type="radio" name="radio" onClick={() => handleSelectedBar("anualizada")} />
        <span className={`name ${selectedBar === "anualizada" ? 'checked' : ''}`}>Rentabilidad anualizada</span>
    </label>
</div>

          </div>
          <div className="flex flex-col gap-2 max-w-[420px]">
            <span className="font-bold text-2xl">
              {selectedBar==="anualizada"
      
                ? "        Rentabilidad anualizada"
                : "Rentabilidad acumulada"}
            </span>
            <span className="font-light text-[18px]">
              {selectedBar==="anualizada"
           
                ? "Es el promedio anual de lo que se ganó o perdió a largo de un periodo."
                : "  Es el rendimiento acumulado del fondo a lo largo de un periodo."}
            </span>
          </div>
          {selectedBar==="anualizada" ? 
          
       
           <>
           <div className="hidden lg:block">
           <BarChart
           width={700}
           height={550}
           data={data}
           margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
         >
           <CartesianGrid strokeDasharray="" />
           <XAxis dataKey="name" tick={null} />
           <YAxis tick={null} />
           <Tooltip formatter={formatRentabilidad} />
           <Legend />
           <Bar
             dataKey="Rentabilidad"
             fill="#0057C2"
             label={<CustomizedLabel />}
           />
         </BarChart>
           </div>
 
           <div className=" lg:hidden">
           <BarChart
           width={400}
           height={550}
           data={data}
           margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
         >
           <CartesianGrid strokeDasharray="" />
           <XAxis dataKey="name" tick={null} />
           <YAxis tick={null} />
           <Tooltip formatter={formatRentabilidad} />
           <Legend />
           <Bar
             dataKey="Rentabilidad"
             fill="#0057C2"
             label={<CustomizedLabel />}
           />
         </BarChart>
 
           </div>
            
           </>
          :  
          <>
          <div className="hidden lg:block flex justify-center items-center">
          <BarChart
          width={700}
          
          height={550}
          data={data2}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="" />
          <XAxis dataKey="name" tick={null} />
          <YAxis tick={null} />
          <Tooltip formatter={formatRentabilidad2} />
          <Legend />
          <Bar
            dataKey="Rentabilidad"
            fill="#0057C2"
            label={<CustomizedLabel2 />}
          />
        </BarChart>
          </div>

          <div className=" lg:hidden flex justify-center items-center">
          <BarChart
          width={400}
          
          height={550}
          data={data2}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="" />
          <XAxis dataKey="name" tick={null} />
          <YAxis tick={null} />
          <Tooltip formatter={formatRentabilidad2} />
          <Legend />
          <Bar
            dataKey="Rentabilidad"
            fill="#0057C2"
            label={<CustomizedLabel2 />}
          />
        </BarChart>

          </div>
           
          </>
        
        
          }
         
        </div>
      </div>
    </div>
  );
};

export default SectionStrategy;
