const initialPlant ={
  name: "",
  altName: "",
  origin: "",
  imgUrl: "",
  description: "",
}


const initialState = {
  plants: [],
  selectedPlant: initialPlant,
  user: {
    username: ""
  }
}

export default function reducer(state=initialState, {type, payload}){
  switch (type){
    case "GET_PLANTS":
      return {...state, plants: payload}; 
    case "GET_PLANT":
      return {...state, selectedPlant: payload};
    case "CLEAR_PLANT":
      return {...state, selectedPlant: initialPlant };
    default:
      return {...state}
  }

}