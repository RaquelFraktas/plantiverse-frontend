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