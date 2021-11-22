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
  id: "",
  comments: []
}

const initialState = {
  plants: [],
  selectedPlant: initialPlant,
  user: initialUser,
  // userPlants: [],
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
    case "LOGOUT":
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
    case "POST_COMMENT":
      console.log(...state.forumTopic.comments, payload)
      return {...state,
        forumTopic: {...state.forumTopic, 
          comments: [...state.forumTopic.comments, payload]
          }
        };
    case "GET_COMMENTS":
      return {...state, comments: payload}
    case "CLEAR_COMMENTS":
      return {...state, comments: []};
    case "ERROR":
      return {...state, errors: payload}
    case "CLEAR_ERROR":
      return {...state, errors: ""}
    default:
      return {...state}
  }

}