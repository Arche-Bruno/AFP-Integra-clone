import React, { useState } from "react";
import image from "../../imgs/bg-recover.svg";
import "./auth.css";
import PersonIcon from "@mui/icons-material/Person";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import GoogleIcon from "@mui/icons-material/Google";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import google from "../../imgs/google.svg"
import { Link } from "react-router-dom";
const RecoverPassword = () => {
  
const [formLogin, setFormLogin ] = useState({
  email:'',
  password:''
})
const [showPassword, setShowPassword] = useState(false)
const handleChange = (e)=>{
  setFormLogin({...formLogin, [e.target.name] : e.target.value})
}

const handleSubmit = (e)=>{
  e.preventDefault();

}
const handleShowPassword =()=>{
  setShowPassword(!showPassword)
}
const handleBlurShowPassword=()=>{
  setShowPassword(false)
}
console.log(formLogin.email.length)
  return (
    <div className="w-full max-w-[370px] flex items-center justify-center mx-auto md:max-w-4xl flex bg-dark-bgpry p-6 rounded-md drop-shadow-2xl">
      <div className="md:w-1/2 md:pl-14">

        <h2 className="font-bold text-3xl mb-2 text-dark-primary">Recover Password</h2>
        <span className="text-sm text-dark-secondary ">
          Ingrese su correo para el envio de un codigo
        </span>

        <form action="" onSubmit={handleSubmit} className="w-full mt-8 flex flex-col gap-8">
          <div className="w-full relative md:max-w-[280px] ">
            <input

              onChange={handleChange}
      
              type="email"
              name="email"
              id="email"
              value={formLogin.email}
              className="style-input input duration-300 focus:border-dark-primary"
              autoComplete="off"
            />
            <label
              htmlFor="email"
              className={`style-label  bg-dark-bgpry duration-300 placeholder ${formLogin.email.length > 1 ? "active":""}`}
            >
              Ingrese su email
            </label>
            <div className="icon absolute top-3 left-2 duration-300 text-white">
              <PersonIcon></PersonIcon>
            </div>
          </div>
        

          <button className="w-full max-w-[280px] text-[16px] bg-dark-primary rounded-full text-white py-2 mb-4 hover:bg-dark-secondary duration-300">Enviar codigo</button>
        </form>
        <div className="grid grid-cols-3 items-center max-w-[280px] mb-4">
          <hr className="border-dark-secondary"/>
          <p className="text-center text-dark-secondary ">or</p>
          <hr className="border-dark-secondary"/>
        </div>
{/* 
        <button className="w-full max-w-[280px] flex items-center justify-center gap-4  bg-slate-50 hover:bg-slate-300 duration-300 rounded-full py-2 mb-4">
          <div className="flex items-center justify-center w-5 ">
             <img src={google} alt="image-google " className="w-full " />
          </div>
         
           <span className="font-bold "> Inicia con Google</span>
          </button> */}

          {/* <Link to="recoverPassword">
          <span className="text-dark-secondary hover:text-dark-info duration-300 ">Olvidaste tu contraseña? </span>
          </Link> */}


          <div className="w-full max-w-[280px] flex gap-2 justify-between items-center mt-8">
          

          <span className="text-dark-secondary">Ya tienes una cuenta? </span>
          <Link to="/auth">
          <button className="rounded-full w-[100px] bg-dark-primary w-max self-end px-4 py-2 text-white hover:bg-dark-secondary duration-300 ">Login </button>
          </Link>
      
          </div>
          <div className="w-full max-w-[280px] flex gap-2 justify-between items-center mt-8">
          

          <span className="text-dark-secondary">no tienes una cuenta ? </span>
          <Link to="/auth">
          <button className="rounded-full w-[100px] bg-dark-primary w-max self-end px-4 py-2 text-white hover:bg-dark-secondary duration-300 ">Register </button>
          </Link>
      
          </div>


      
      </div>

      <div className="md:block w-1/2 hidden bg-gradient-to-b from-dark-bgsecon to-transparent rounded-md h-[500px] mt-auto flex items-center justify-center">
  <img src={image} alt="image" className="mt-12" />
</div>


    </div>
  );
};

export default RecoverPassword;
