import { useState } from 'react'
import { submitSignUp, submitLogin } from '../redux/actionCreators'
import { connect } from 'react-redux'
import { HomePage } from './indexExports'
// import { useHistory } from 'react-router-dom'

function Auth(props){

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [signUp, setSignUp] = useState(false)
  // const history = useHistory()

  const toggleSignUp = () => setSignUp(!signUp)

  const handleSubmit = (e) => {
    e.preventDefault()
    signUp ? props.submitSignUp({username, password}) : props.submitLogin({username, password})
    props.history.push("/plants")
    // sends user to plants page everytime they log in
  }


  const checkPasswordAuth = (e) =>{ 
    if (e.target.value !== password){
      console.log("error")
    }
  }

  return <>
      <HomePage/>
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