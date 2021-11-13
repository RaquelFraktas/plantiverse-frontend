const initialPlant ={
  name: "",
  altName: "",
  origin: "",
  imgUrl: "",
  description: "",
}

const initialState = {
  plants: [],
  selectedPlant: initialPlant
}

export default function reducer(state=initialState, {type, payload}){
  switch (type){
    case "GET_PLANTS":
      return {...state, plants: payload}; 
    case "GET_PLANT":
      console.log("individual plant here")
      return {...state, selectedPlant: payload};
    case "CLEAR_PLANT":
      console.log("clearrrringg")
      return {...state, selectedPlant: initialPlant };
    default:
      return {...state}
  }

}