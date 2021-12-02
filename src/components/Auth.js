import * as React from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
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
    return props.user && props.clearErrors
  }, [password, passwordConfirmation, props.user, props.clearErrors]) 
  

  return <>
    <HomePage/>    
        <CssBaseline />
        <div className="alert"> {props.errors}</div>
        <Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          Hello! In order to access the site, you must have an account with us.
          <Typography component="h1" variant="h3">
            {signUp ?  "Sign up!" : "Log in!"}
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="email"
              autoFocus
              value={username} onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password} onChange={(e) =>setPassword(e.target.value)}
            />
            {signUp && <div className="passwordConf">
              <TextField
                margin="normal"
                required
                fullWidth
                name="password-conf"
                label="Confirm Password"
                type="password"
                id="password-conf"
                value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}>
              </ TextField>
              <div className="alert">{invalidPassword && "Passwords Don't Match"}</div>
            </div>
            }
          
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
            <Grid container>
              <Grid item>
              <Button onClick={toggleSignUp}>or...{signUp ? "Login!" : "Don't have an account? Sign up!"}</Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
  </>
}

const mapStateToProps= (state)=> { return state }

export default connect (mapStateToProps, { submitSignUp, submitLogin , clearErrors})(Auth)

