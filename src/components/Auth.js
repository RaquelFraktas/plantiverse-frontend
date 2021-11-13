import { useState } from 'react'

export default function Auth(props){
  const [signUp, setSignUp] = useState(false)

  const toggleSignUp = () => setSignUp(!signUp)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return <>
    {signUp ? <h1> Sign up! </h1> : <h1> Log in! </h1>}
      <form className= "Login">
        <label>
          Username:
          <input type="text" name="name" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    <button onClick={toggleSignUp}>or...{signUp ? "Login!" : "Sign up!"}</button>
  </>
}