import { useParams} from 'react-router-dom'
import { connect } from 'react-redux'
import { getPlant, clearPlant } from '../redux/actionCreators'
import { useEffect } from "react"
import { Link } from 'react-router-dom'

function PlantShow(props){
  const routeId = useParams().id

  const spinner = () => <div className="loader"></div>
  const loadedPage= () => <div className="show">
      <h1>this is the show page</h1>
    
      <img src={props.imgUrl} alt={props.name}/>
      <h3>{props.altName}</h3>
      <span className="origin"> {props.origin}</span>
      <p className="description">{props.description}</p>
    
      <Link to={`/plants/${parseInt(routeId) + 1}`}>Go to next Plant</Link>
    </div>

  useEffect(() => {
    props.getPlant(routeId)
    //returning a function is run when unmounting.
    return props.clearPlant
  }, [props.getPlant, routeId])    


  return props.id ? loadedPage() : spinner()
  

}


const mapStateToProps = (state) => {
  return {...state.selectedPlant}
  }
  
export default connect(mapStateToProps, { getPlant, clearPlant })(PlantShow)
// using the above dispatch method adds it to our plantshow props