const initialState = {
  plants: []
}

export default function reducer(state=initialState, {type, payload}){
  switch (type){
    case "GET_PLANTS":
      return {...state, plants: payload}; 
    default:
      return {...state}
  }

}