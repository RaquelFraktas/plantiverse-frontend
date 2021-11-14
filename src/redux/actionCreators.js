export const getPlants = () => {
  return dispatch => fetch("http://localhost:3000/plants")
  .then(res => res.json())
  .then(plants => dispatch({type: "GET_PLANTS", payload: plants})
  )
} 

export const getPlant = (id) => {
  return dispatch => fetch (`http://localhost:3000/plants/${id}`)
  .then(res => res.json())
  .then(plant => dispatch({type: "GET_PLANT", payload: plant}))
}

export const clearPlant = () => ({type:"CLEAR_PLANT"})

export const submitSignUp = (user) =>{
  return dispatch => fetch ("http://localhost:3000/users", {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json',
    },
    body: JSON.stringify(user),
  })
  .then(res =>res.json())
  .then(response => {
    localStorage.token = response.token
    dispatch({type: "SET_USER", payload: response.user})
  })
}

export const submitLogin = (user) =>{
  return dispatch => fetch ("http://localhost:3000/login", {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json',
    },
    body: JSON.stringify(user),
  })
  .then(res =>res.json())
  .then(response => {
    localStorage.token = response.token
    dispatch({type: "SET_USER", payload: response.user})
  })
}
export const autoLogin = () => {
  return dispatch => fetch ("http://localhost:3000/me",{
    headers: {
      'Authorization' : localStorage.token
      // this is the token i am sending over to the backend. we can grab this data as request.headers["Authorization"]
      //on our backend
    }
  })
  .then(res => res.json())
  .then(response => {
    localStorage.token = response.token
    dispatch({type: "SET_USER", payload: response.user})
  })
}

export const logOut = () => {
  return dispatch => fetch ("http://localhost:3000/logout",{
    method:'DELETE',
    headers: {
      'Content-Type':'application/json',
    }
  })
  .then(() => {
    localStorage.removeItem("token")
    dispatch({type: "CLEAR_USER"})
  })

}
