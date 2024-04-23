import React, { useContext, useState } from "react";
import imgUser from "../imgs/img-link.jpg";
import { Afp_primaContext } from "./context/Afp_primaContext";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import afpIntegraBackground from "../imgs/img-admin/state/afp.jpg"
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import Swal from 'sweetalert2'

const Perfil = () => {
  const { setFormUser, formUser } = useContext(Afp_primaContext);


  const [dataUser, setDataUser ] = useState({
    name:"",
    money:"",
    email:"",
  })


  const handleChange = (e)=>{
    setDataUser({...dataUser,[e.target.name] : e.target.value })
  }

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (dataUser.name === "" || dataUser.money === "" || dataUser.email==="") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Necesitas rellenar todos los campos 😘",
        footer: '<a href="#">tu tranquilo! yo asustado</a>'
      });
      return;
    } 
    
      setFormUser({
        name: dataUser.name,
        money: dataUser.money,
        email: dataUser.email, // Puedes mantener este campo si necesitas actualizarlo también
      });


      setDataUser({
        name:"",
        money:"",
        email:"",
      })
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Bien hecho ! Eres el/la mejor",
        showConfirmButton: false,
        timer: 1500
      });
  };
  
  return (
    <div className="w-h-full bg-dark-bgpry">
      <div className="w-full flex flex-col items-center">

        <div className="relative bg-dark-text_primary w-full h-[440px]">

        <div
    className="absolute top-0 left-0 w-full h-full bg-dark-text_primary"
    style={{
      backgroundImage: `url(${afpIntegraBackground})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
         
          <div className="absolute top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
              <img
                src={imgUser}
                alt="image-user"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        </div>
        <form onSubmit={handleSubmit} action="" className="text-black w-full mx-auto mt-[150px]">
  <div className="flex flex-col gap-6 lg:flex-row items-center justify-between max-w-[800px] mx-auto w-full">
    <div className="relative">
      <input
        onChange={handleChange}
        value={dataUser.name}
        type="text"
        name="name"
        id="name"
        className="duration-300 inputName w-[280px] py-4 border border-dark-bgsecon outline-none px-4"
        autoComplete="off"
        maxLength={22} // Establecer el límite de caracteres
      />
      <label
        htmlFor="name"
        className={`placeholderName absolute left-2 top-4 pointer-events-none text-dark-bgsecon px-2 transition-all duration-300 ${
          dataUser.name.length > 1 ? "dataName" : ""
        }`}
      >
        Actualizar Nombre
      </label>
      <div className="perfil-icon absolute top-0 right-2 top-4 text-dark-bgsecon">
        <PersonOutlineOutlinedIcon />
      </div>
    </div>

    <div className="relative">
      <input
        value={dataUser.money}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (
            !(
              (e.keyCode > 95 && e.keyCode < 106) ||
              (e.keyCode > 47 && e.keyCode < 58) ||
              e.keyCode === 8 ||
              e.keyCode === 46
            )
          ) {
            e.preventDefault();
          }
        }}
        onWheel={(e) => e.preventDefault()}
        name="money"
        id="money"
        type="text"
        className="duration-300 inputName w-[280px] py-4 border border-dark-bgsecon outline-none px-6"
        autoComplete="off"
        maxLength={8} // Establecer el límite de caracteres
      />
      <label
        htmlFor="name"
        className={`placeholderName absolute left-4 top-4 pointer-events-none text-dark-bgsecon px-2 transition-all duration-300 ${
          dataUser.money.length > 1 ? "dataName" : ""
        }`}
      >
        Actualizar Dinero
      </label>
      <span className="absolute left-1 top-4">S/. </span>
      <div className="perfil-icon absolute top-0 right-2 top-4 text-dark-bgsecon">
        <CurrencyExchangeOutlinedIcon />
      </div>
    </div>
    <div className="relative">
      <input
        value={dataUser.email}
        onChange={handleChange}
        name="email"
        id="email"
        className="duration-300 inputName w-[280px] py-4 border border-dark-bgsecon outline-none px-6"
        autoComplete="off"
        type="email"
        maxLength={28} // Establecer el límite de caracteres
      />
      <label
        htmlFor="name"
        className={`placeholderName absolute left-4 top-4 pointer-events-none text-dark-bgsecon px-2 transition-all duration-300 ${
          dataUser.email.length > 1 ? "dataName" : ""
        }`}
      >
        Actualizar Email
      </label>
      <span className="absolute left-1 top-4"> </span>
      <div className="perfil-icon absolute top-0 right-2 top-4 text-dark-bgsecon">
        <AlternateEmailOutlinedIcon />
      </div>
    </div>
  </div>

  <div className="max-w-[230px] mx-auto text-center rounded-lg cursor-pointer hover:scale-105 duration-300">
    <button className="w-full bg-dark-text_primary py-4 px-8 mt-6">
      <span className="text-white font-medium text-[20px]">Actualizar datos</span>
    </button>
  </div>
</form>

      </div>
    </div>
  );
};

export default Perfil;
