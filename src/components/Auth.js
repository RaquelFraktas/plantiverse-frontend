import { useEffect, useState } from 'react'
import { submitSignUp, submitLogin } from '../redux/actionCreators'
import { connect } from 'react-redux'
import { HomePage } from './indexExports'
// import { useHistory } from 'react-router-dom'

function Auth(props){

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [signUp, setSignUp] = useState(false)
  const [invalidPassword, setInvalidPassword] = useState(false)

  // const history = useHistory()

  const toggleSignUp = () => setSignUp(!signUp)

  const handleSubmit = (e) => {
    e.preventDefault()
    signUp ? validForSignUp() : props.submitLogin({username, password})
    props.history.push("/plants")
  }

  const validForSignUp =() =>!invalidPassword && props.submitSignUp({username, password})
  
  useEffect(()=> password !== passwordConfirmation ? setInvalidPassword(true) : setInvalidPassword(false) ) 
  
  return <>
      <HomePage/>
    {signUp ? <h1> Sign up! </h1> : <h1> Log in! </h1>}
      <form className= "Login" onSubmit={handleSubmit}>

      <div className="alert"> {props.errors}</div>

        <label>
          Username:
          <input type="text" name="name" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={(e) =>setPassword(e.target.value)} />
        </label>
        {signUp && <label>
          Confirm Password:
          <input type="password" name="password-conf" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
          <div className="alert">{invalidPassword && "Passwords Don't Match"}</div>
        </label>
        }
        <input type="submit" value="Submit" />
      </form>
    <button onClick={toggleSignUp}>or...{signUp ? "Login!" : "Sign up!"}</button>
  </>
}

const mapStateToProps= (state)=> {
  return state
}

export default connect (mapStateToProps, { submitSignUp, submitLogin })(Auth)