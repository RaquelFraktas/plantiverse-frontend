import { useState } from 'react'
import { submitSignUp, submitLogin } from '../redux/actionCreators'
import { connect } from 'react-redux'

function Auth(props){

  

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [signUp, setSignUp] = useState(false)

  const toggleSignUp = () => setSignUp(!signUp)

  const handleSubmit = (e) => {
    e.preventDefault()
    signUp ? props.submitSignUp({username, password}) : props.submitLogin({username, password})
  }


  const checkPasswordAuth = (e) =>{ 
    if (e.target.value !== password){
      console.log("error")
    }
  }

  return <>

    {signUp ? <h1> Sign up! </h1> : <h1> Log in! </h1>}
      <form className= "Login" onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="name" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        {signUp && <label>
          Confirm Password:
          <input type="password" name="password-confirmation" onChange={checkPasswordAuth}/>
        </label>
        }
        <input type="submit" value="Submit" />
      </form>
    <button onClick={toggleSignUp}>or...{signUp ? "Login!" : "Sign up!"}</button>
  </>
}

export default connect (null, { submitSignUp, submitLogin })(Auth)