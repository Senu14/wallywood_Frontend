import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext()

 const AuthProvider = ({Children}) => {
   const [ loginData, setLoginData ] = useState({})

   useEffect(() => {
     if(sessionStorage.getItem('token')) {
          setLoginData(JSON.parse(sessionStorage.getItem('token')))
     }
   }, [Children])

  return (
    <AuthContext.Provider value={{loginData, setLoginData}}>
        {Children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext)



export { AuthProvider, useAuth };