const initialState = {
  plants: []
}

export default function reducer(state=initialState, {type, payload}){
  switch (type){
    case "ADD_PLANT":
      return{...state, plants: payload}; 
    default:
      return {...state}
  }

}