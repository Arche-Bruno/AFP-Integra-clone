import { useState } from "react"
import { Afp_primaContext } from "./Afp_primaContext"




export const Afp_primaProvider = ({children})=>{

   const [ok, setOk] = useState("everything is okey")
   const [showMenu,setShowMenu ] = useState(false);
   const [showNav,setShowNav]= useState(false);
   const [showUser,setShowUser] = useState(false);


   const [formUser ,setFormUser] = useState({
    name:"Bruno Mallcco Arche",
    money:"18000",
    email:"bruno9039@hotmail.com",
   })

    return (
        <Afp_primaContext.Provider
        value={{
            ok,
            setOk,
            showMenu,
            setShowMenu,
            setShowNav,
            showNav,
            showUser,
            setFormUser,
            formUser,
setShowUser,
        }}
        
        >
            {children}
        </Afp_primaContext.Provider>
    )
}