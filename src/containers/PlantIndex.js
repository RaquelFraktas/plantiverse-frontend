import { useEffect } from "react"
import { getPlants } from "../redux/actionCreators"
import { connect} from "react-redux"
import PlantCard from '../components/PlantCard'

function PlantIndex(props){
  useEffect(props.getPlants, [props.getPlants])  
    // this is my componentDidMount
  console.log(props.plants)

  return <div className="cards">
      {props.plants.map(plant => <PlantCard {...plant} key={plant.id}/>)}
  </div>
}

const mapStateToProps = (state) => {
  return {plants: state.plants}
}

export default connect(mapStateToProps, { getPlants } )(PlantIndex)
// the getPlants is my dispatch action