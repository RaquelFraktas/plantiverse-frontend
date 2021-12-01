// import { combineReducers } from 'redux'

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
  user: "",
  id: "",
  comments: []
}

const initialState = {
  plants: [],
  selectedPlant: initialPlant,
  user: initialUser,
  userPlants: [],
  errors:"",
  selectedUser: initialUser,
  forumTopics: [],
  forumTopic: initialTopic,
}


// const rootReducer = combineReducers({
//   user: usersReducer,
//   plants: plantsReducer,
//   forumTopics: forumTopicsReducer,
//   errors: errorsReducer
// })

// function plantsReducer(state=initialState, action){
//   switch(action.type){
//     case "GET_PLANTS":
//       return {...state, plants: action.payload}; 
//     case "GET_PLANT":
//       return {...state, selectedPlant: action.payload};
//     case "CLEAR_PLANT":
//       return {...state, selectedPlant: initialPlant };
    // case "ADD_PLANT_TO_USER":
    //   let existingUser = state.filter(plant => plant.title === action.user.plant);
    //   if(existingUser.length > 0){
    //     return state;
      // } else {
      //   return [...state, {user: action.plant.username}];
      // }
//     default:
//       return {...state}
//   }
// }

// function usersReducer(state=initialState, {type, payload}){
//   switch (type){
//     case "SET_USER":
//       return {...state, user: payload};
//     case "GET_USER":
//       return {...state, selectedUser: payload };
//     case "LOGOUT":
//       return {...state, user: initialUser};
//     case "CLEAR_USER_SHOW":
//       return {...state, selectedUser: initialUser};
//     case "ADD_PLANT_TO_USER":
//       return {...state, userPlants: payload};
//     default:
//       return {...state}
//   }
// }

// function forumTopicsReducer(state=initialState, {type, payload}){
//   switch (type){
//     case "GET_FORUM_TOPIC":
//       return {...state, forumTopic: payload}
//     case "POST_FORUM_TOPIC":
//       return {...state, forumTopics: [payload, ...state.forumTopics]}
//     case "GET_FORUM_TOPICS":
//       return {...state, forumTopics: payload}
//     case "CLEAR_FORUM_TOPIC":
//       return {...state, forumTopic: initialTopic};
//     case "POST_COMMENT":
//       return {...state,
//         forumTopic: {...state.forumTopic, 
//           comments: [payload, ...state.forumTopic.comments]
//           }
//         };
//     case "GET_COMMENTS":
//       return {...state, comments: payload}
//     case "CLEAR_COMMENTS":
//       return {...state, comments: []};
//     default:
//       return {...state}
//   }
// }

// function errorsReducer(state=initialState, {type, payload}){
//   switch (type){
//     case "ERROR":
//       return {...state, errors: payload}
//     case "CLEAR_ERROR":
//       return {...state, errors: ""}
//     default:
//       return {...state}
//   }
// }

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
      // console.log(payload)
      return {...state, userPlants: payload};
    case "DELETE_PLANT_FROM_USER":
      console.log(payload)
      // return {...state, userPlants: payload};
      return {...state, userPlants: [...state.userPlants.filter(userPlant => userPlant.id !== payload.id)]};
    case "GET_FORUM_TOPIC":
      return {...state, forumTopic: payload}
    case "POST_FORUM_TOPIC":
      return {...state, forumTopics: [payload, ...state.forumTopics]}
    case "GET_FORUM_TOPICS":
      return {...state, forumTopics: payload}
    case "CLEAR_FORUM_TOPIC":
      return {...state, forumTopic: initialTopic};
    case "POST_COMMENT":
      return {...state,
        forumTopic: {...state.forumTopic, 
          comments: [payload, ...state.forumTopic.comments]
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

// export default rootReducer