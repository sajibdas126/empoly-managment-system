
import React ,{ createContext, useEffect, useState} from "react";
import { getLocalStorage } from "../utils/LocalSrorage";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [userData,setUserData] = useState({
      employess:null,
      admin:null
    })

        useEffect(()=>{
          const {employess,admin} =getLocalStorage()
          setUserData({employess,admin})
        },[])

  return (
    <div>
       <AuthContext.Provider value={userData}>
         {children}
       </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider