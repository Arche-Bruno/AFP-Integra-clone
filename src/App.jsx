import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

/*Layouts*/
import Layout_auth from "./layouts/Layout_auth";

/*AUTH*/
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Layout_admin from "./layouts/Layout_admin";
import Home from "./components/Home";
import Messages from "./components/Messages";
import RecoverPassword from "./pages/auth/RecoverPassword";
import Rentabilidad from "./components/Rentabilidad";
import EstadoCuenta from "./components/EstadoCuenta";
import Consultas from "./components/Consultas";
import Tramites from "./components/Tramites";
import Perfil from "./components/Perfil";

/*ADMIN*/




function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Layout_auth></Layout_auth>}>
          <Route index element={<Login></Login>}></Route>
          <Route path="register" element={<Register></Register>}></Route>
          <Route path="recoverPassword" element={<RecoverPassword></RecoverPassword>}></Route>
        </Route>


        <Route path="/" element={<Layout_admin></Layout_admin>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="rentabilidad" element={<Rentabilidad></Rentabilidad>}></Route>
          <Route path="estadoCuenta" element={<EstadoCuenta></EstadoCuenta>}></Route>
          <Route path="consultas" element={<Consultas></Consultas>}></Route>
          <Route path="tramites" element={<Tramites></Tramites>}></Route>
          <Route path="perfil" element={<Perfil></Perfil>}></Route>

        </Route>
        <Route path="*" element={<Navigate to="/"></Navigate>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
