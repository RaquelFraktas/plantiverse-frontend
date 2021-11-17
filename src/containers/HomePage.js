import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'

function HomePageShow({user}) {

  const history = useHistory()
  const historyPushToUser = () => history.push(`/users/${user.id}`)

  useEffect(()=> user.username &&  historyPushToUser())


    return <div className="homepage">
      Welcome to the site! Use the Navigation to browse 
    </div>
  }


const mapStateToProps = (state) =>{
  return {...state}
}

  export default connect (mapStateToProps)(HomePageShow)