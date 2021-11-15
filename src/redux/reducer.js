const initialPlant ={
  name: "",
  altName: "",
  origin: "",
  imgUrl: "",
  description: "",
}

const initialUser ={
  username: "",
}

const initialState = {
  plants: [],
  selectedPlant: initialPlant,
  user: initialUser,
  user_plants: [],
  errors:"",
}

export default function reducer(state=initialState, {type, payload}){
  switch (type){
    case "GET_PLANTS":
      return {...state, plants: payload}; 
    case "GET_PLANT":
      return {...state, selectedPlant: payload};
    case "CLEAR_PLANT":
      return {...state, selectedPlant: initialPlant };
    case "SET_USER":
      return {...state, user: payload};
    case "CLEAR_USER":
      return {...state, user: initialUser};
    case "ADD_PLANT_TO_USER":
      return {...state, user_plants: payload};
    case "ERROR":
      return {...state, errors: payload}
    case "CLEAR_ERROR":
      return {...state, errors: ""}
    default:
      return {...state}
  }

}