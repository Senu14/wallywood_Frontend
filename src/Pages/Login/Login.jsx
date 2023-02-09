import axios from "axios";
import { useContext } from "react";
import { ContentWrapper } from "../../Components/App/ContentWrapper/contentWrapper";
import { useAuth } from "../../Components/Providers/AuthProvider";


const Loin = () => {   
  //useContext is our hook
  const { loginData, setLoginData } = useAuth()

 

  const submitHandle = async e => {
      const formdata = new URLSearchParams()
      formdata.append('username', e.target.form.username.value)
      formdata.append('password', e.target.form.password.value)
      const endpoint = `http://localhost:4000/login`
      try {
          const result = await axios.post(endpoint, formdata)
          handleSessionData(result.data.access_token)
      }catch(err) {
        console.error(`Kunne ikke logge ind: $(err)`)
   }
}
  const handleSessionData = data => {
    if (data) {
      sessionStorage.setItem('token',JSON.stringify(data))
      setLoginData(data)
    }
  }

const Logout = () => {
sessionStorage.removeItem('token')
setLoginData('')// loginData er false nu pga.null string ('')
}
  return (
          <ContentWrapper title="Login">
            {!loginData ? (

               <form method="post">
               <div>
                   <label htmlFor="username">Brugenavn</label>
                   <input type="text" name="username"/>
               </div>
               <div>
                   <label htmlFor="adgangeskode">Adgangskode</label>
                   <input type="password" name="password"/>
               </div>
               <div>
                   <button type="button" onClick={e => submitHandle(e)}>Login</button>
               </div>
          </form>

            ) : (
              <div>
                <p>Du er Logget in</p>
                <button onClick={() =>Logout()}>Log ud</button>
              </div>

            ) 
            }
              
     
          </ContentWrapper>
  );
}


export default Loin;