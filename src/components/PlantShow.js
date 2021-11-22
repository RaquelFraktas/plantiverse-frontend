import { useParams} from 'react-router-dom'
import { connect } from 'react-redux'
import { getPlant, clearPlant } from '../redux/actionCreators'
import { useEffect } from "react"
import { Link } from 'react-router-dom'

function PlantShow({name, altName, imgUrl, origin, description, getPlant, clearPlant, id}){
  const routeId = useParams().id

  const spinner = () => <div className="loader"></div>

  const loadedPage= () => <div className="show">
      <h1>this is the show page</h1>
    
      <img src={imgUrl} alt={name}/>
      <h3>{altName}</h3>
      <span className="origin"> {origin}</span>
      <p className="description">{description}</p>
      <Link to={`/plants/${parseInt(routeId) + 1}`}>Go to next Plant</Link>
    </div>

  useEffect(() => {
    getPlant(routeId)
    return clearPlant()
  }, [getPlant, routeId, clearPlant])    


  return id ? loadedPage() : spinner()
  

}


const mapStateToProps = (state) => {
  return {...state.selectedPlant}
  }
  
export default connect(mapStateToProps, { getPlant, clearPlant })(PlantShow)
// using the above dispatch method adds it to our plantshow props