import { useParams} from 'react-router-dom'
import { connect } from 'react-redux'
import { getPlant, clearPlant, clearErrors } from '../redux/actionCreators'
import { useEffect } from "react"
import { Link, useHistory} from 'react-router-dom'


function PlantShow({name, altName, imgUrl, origin, description, getPlant, clearPlant, id}){
  const routeId = useParams().id
  const history = useHistory()


  const spinner = () => <div className="loader" />

  

  const loadedPage= () => <div className="plantShow">
    <h1>{name}</h1>
    <img src={imgUrl} alt={name}/>
    <h3>{altName}</h3>
    <span className="origin"> {origin}</span>
    <p className="description">{description}</p>
    <Link to={`/plants/${parseInt(routeId) + 1}`}>Go to next Plant</Link>
  </div>

  useEffect(() => {
    getPlant(routeId, history)
    return clearPlant() 
  }, [getPlant, routeId, clearPlant, history])    


  return id ? loadedPage() : spinner()

}


const mapStateToProps = (state) => {
    return {...state.selectedPlant} 
}
  
export default connect(mapStateToProps, { getPlant, clearPlant, clearErrors })(PlantShow)
// using the above dispatch method adds it to our plantshow props