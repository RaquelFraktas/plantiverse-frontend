const initialPlant ={
  name: "",
  altName: "",
  origin: "",
  imgUrl: "",
  description: "",
}

const initialUser ={
  username: "",
  plants: [],
}

const initialTopic ={
  title: "",
  content: "",
  imgUrl: "",
  author: "",
  id: ""
}

const initialState = {
  plants: [],
  selectedPlant: initialPlant,
  user: initialUser,
  userPlants: [],
  errors:"",
  selectedUser: initialUser,
  forumTopics: [],
  // selectedTopic: initialTopic,
  forumTopic: initialTopic,
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
      return {...state, selectedUser: initialUser};
    case "ADD_PLANT_TO_USER":
      return {...state, userPlants: payload};
    case "GET_FORUM_TOPIC":
      return {...state, forumTopic: payload}
    case "POST_FORUM_TOPIC":
      return {...state, forumTopics: [...state.forumTopics, payload]}
    case "GET_FORUM_TOPICS":
      return {...state, forumTopics: payload}
    case "CLEAR_FORUM_TOPIC":
      return {...state, forumTopic: initialTopic};
    case "ERROR":
      return {...state, errors: payload}
    case "CLEAR_ERROR":
      return {...state, errors: ""}
    default:
      return {...state}
  }

}