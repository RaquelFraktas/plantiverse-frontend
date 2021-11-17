import { useEffect, useState } from 'react'
import { submitSignUp, submitLogin, clearErrors } from '../redux/actionCreators'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { HomePage } from './indexExports'

function Auth(props){
  const history = useHistory()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")
  const [signUp, setSignUp] = useState(false)
  const [invalidPassword, setInvalidPassword] = useState(false)

  const toggleSignUp = () => {
    setSignUp(!signUp)
    props.clearErrors()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    signUp ? validForSignUp() : props.submitLogin({username, password})
    history.push(`/`)
  }

  const validForSignUp =() =>!invalidPassword && props.submitSignUp({username, password})
  
  useEffect(()=> {
    password !== passwordConfirmation ? setInvalidPassword(true) : setInvalidPassword(false)
    return props.user
  }, [password, passwordConfirmation, props.user]) 
  

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

export default connect (mapStateToProps, { submitSignUp, submitLogin , clearErrors})(Auth)

