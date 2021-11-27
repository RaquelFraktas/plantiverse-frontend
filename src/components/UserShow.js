import { useEffect } from "react"
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { clearUserShow, getUser } from '../redux/actionCreators'

function UserShow({selectedUser, getUser, clearUserShow}){

  const routeId = useParams().id

  useEffect(() => {
    getUser(routeId)
    return clearUserShow()
  }, [getUser, routeId, clearUserShow])

  const spinner = () => <div className="loader"></div>

  const loadedPage= () => <div className="userShow">
    <p className="userWelcome"><h1>Hello! </h1>

      <h2>This is in {selectedUser.username}'s' plant collection</h2></p>
      {/* get an image list in here */}

      <ul className="usersPlantCollection">
          {selectedUser.plants.map(plant => 
            <li key={plant.id}>
                <Link to={`/plants/${plant.id}`}> {plant.name} </ Link>
            </li> 
          )}
      </ul>
  </div>

  return selectedUser.id ? loadedPage() : spinner()  
}

const mapStateToProps = (state) =>({
  selectedUser: state.selectedUser
})

export default connect (mapStateToProps, { clearUserShow, getUser })(UserShow)
