import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

function HomePageShow({user}) {

  const history = useHistory()
  const historyPushToUser = () => history.push(`/users/${user.id}`)

    return <div className="homepage">
      Welcome to the site! Use the Navigation to browse 
      { user.username &&  historyPushToUser()}
    </div>
  }


const mapStateToProps = (state) =>{
  return {...state}
}

  export default connect (mapStateToProps)(HomePageShow)