const initialPlant ={
  name: "",
  altName: "",
  origin: "",
  imgUrl: "",
  description: "",
}

const initialUser ={
  username: "",
  plants: []
}

// const initialUserToView ={
//   username:"",
//   plants: []
// }

const initialState = {
  plants: [],
  selectedPlant: initialPlant,
  user: initialUser,
  userPlants: [],
  errors:"",
  selectedUser: initialUser,
  forum_topics: [],
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
    case "GET_USER":
      return {...state, selectedUser: payload };
    case "CLEAR_USER":
      return {...state, user: initialUser};
    case "CLEAR_USER_SHOW":
      return {...state, slectedUser: initialUser};
    case "ADD_PLANT_TO_USER":
      return {...state, userPlants: payload};
    case "GET_FORUM_TOPICS":
      return {...state, forum_topics: payload}
    case "ERROR":
      return {...state, errors: payload}
    case "CLEAR_ERROR":
      return {...state, errors: ""}
    default:
      return {...state}
  }

}