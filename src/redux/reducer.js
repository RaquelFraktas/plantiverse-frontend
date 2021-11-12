const initialState = {
  plants: [],
  selectedPlant: {
    name: "",
    altName: "",
    origin: "",
    imgUrl: "",
    description: "",
  }
}

export default function reducer(state=initialState, {type, payload}){
  switch (type){
    case "GET_PLANTS":
      return {...state, plants: payload}; 
    case "GET_PLANT":
      console.log("individual plant here")
      return {...state, selectedPlant: payload};
    default:
      return {...state}
  }

}