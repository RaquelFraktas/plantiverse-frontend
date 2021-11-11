import { useEffect } from "react"
import { getPlants } from "../redux/actionCreators"
import { connect} from "react-redux"

function PlantIndex(props){
    useEffect(props.getPlants, [props.getPlants])

    console.log(props.plants)
    // this is my componentDidMount 
    return <h1>Plants go here</h1>
}

const mapStateToProps = (state) => {
  return {plants: state.plants}
}

export default connect(mapStateToProps, { getPlants } )(PlantIndex)
// the getPlants is my dispatch action