import { useEffect } from "react"
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { clearUserShow, getUser } from '../redux/actionCreators'

function UserShow({selectedUser, getUser}){

  const routeId = useParams().id

  useEffect(() => {
    console.log("hello")
    getUser(routeId)
    return clearUserShow
  }, [getUser, clearUserShow, routeId])

  const spinner = () => <div className="loader"></div>

  const loadedPage= () => <div className="userShow">
    <p>This is in {selectedUser.username}'s' plant collection</p>
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
