import axios from "axios"
import { ContentWrapper } from "../../App/Elements/ContentWrapper/contentWrapper"
import { useAuth } from "../../App/Providers/AuthProvider"
import { FormComponantstyle } from "../../Styled/FormComponant.style"

const Login = () => {
  const { loginData, setLoginData } = useAuth()

  const submitHandle = async (e) => {
    const formdata = new URLSearchParams()
    formdata.append("username", e.target.form.username.value)
    formdata.append("password", e.target.form.password.value)
    const endpoint = `http://localhost:4000/login`
    try {
      const result = await axios.post(endpoint, formdata)
      handleSessionData(result.data)
    } catch (err) {
      console.error(`Kunne ikke logge ind: ${err}`)
    }
  }

  const handleSessionData = (data) => {
    if (data) {
      sessionStorage.setItem("token", JSON.stringify(data))
      setLoginData(data)
    }
  }

  const Logout = () => {
	sessionStorage.removeItem('token')
	setLoginData('') 
  }

  return (
    <ContentWrapper title="Login">
      <FormComponantstyle>
      {!loginData ? (
        <form method="POST">
          <div>
            <label htmlFor="username">Brugernavn:</label>
            <input type="text" name="username" />
          </div>
          <div>
            <label htmlFor="Adgangskode">Adgangskode:</label>
            <input type="password" name="password" />
          </div>
          <div>
            <button type="button" onClick={(e) => submitHandle(e)}>
              Login
            </button>
          </div>
        </form>
      ) : (
        <div>
			<p>Du er logget ind som {`${loginData.firstname} ${loginData.lastname} `}</p>
			<button onClick={() => Logout()}>Log ud</button>
		</div>
      )}
      </FormComponantstyle>
    </ContentWrapper>
  )
}

export default Login;