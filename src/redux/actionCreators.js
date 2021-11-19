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
    if(!response.errors){
    localStorage.token = response.token
    dispatch({type: "SET_USER", payload: response.user})
    } else {
      dispatch({type: "ERROR", payload: response.errors})
    }
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
    if(!response.errors){
      localStorage.token = response.token
      dispatch({type: "SET_USER", payload: response.user})
    } else {
      dispatch({type: "ERROR", payload: response.errors})
    }
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
    localStorage.removeItem("token")
    return ({type: "LOGOUT"})
  }

export const clearErrors = () => ({type:"CLEAR_ERROR"})

export const addPlantToUser = ([user,id]) =>{
  
  return dispatch => fetch (`http://localhost:3000/users/${user.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type' : 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify([user,id]),
  })
  .then(res =>res.json())
  .then(response => {
    dispatch({type: "ADD_PLANT_TO_USER", payload: response.plants})
  })
}

export const getUser = (id) => {
  return dispatch => fetch (`http://localhost:3000/users/${id}`)
  .then(res => res.json())
  .then(user => dispatch({type: "GET_USER", payload: user}))
}

export const clearUserShow = () => ({type:"CLEAR_USER_SHOW"})

export const getForumTopics = () => {
  return dispatch => fetch("http://localhost:3000/message_boards")
  .then(res => res.json())
  .then(forumTopics => {
    dispatch({type: "GET_FORUM_TOPICS", payload: forumTopics})
  }
)} 

export const getForumTopic = (id) => {
  return dispatch => fetch (`http://localhost:3000/message_boards/${id}`)
  .then(res => res.json())
  .then((forumTopic) => {
    dispatch({type: "GET_FORUM_TOPIC", payload: forumTopic})
  })
}

export const postForumTopic = (forumTopic, history) => {
  // console.log(history)
  return dispatch => fetch("http://localhost:3000/message_boards", {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json',
      'Authorization': localStorage.token
    },
    body: JSON.stringify({
      title: forumTopic.title,
      content: forumTopic.content,
      img_url: forumTopic.imgUrl,
      user_id: forumTopic.author.id
    }),
  })
  .then(res =>res.json())
  .then(response => {
    // history.push('/message_boards/',response.forum_topic.id)
    dispatch({type: "POST_FORUM_TOPIC", payload: response.forum_topic})
  })
}

export const clearForumTopic = () => ({type:"CLEAR_FORUM_TOPIC"})

export const postComment = (content,forumTopicId, currentUserId) => {
  console.log(content, forumTopicId, currentUserId)
  return dispatch => fetch(`http://localhost:3000/message_boards/${forumTopicId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json',
      // 'Authorization': localStorage.token
    },
    body: JSON.stringify({
      content: content,
      user_id: currentUserId,
      forum_topic_id: forumTopicId
    }),
  })
  .then(res =>res.json())
  .then(comment => {
    // console.log(comment)
    dispatch({type: "POST_COMMENT", payload: {comment}})
  })
}