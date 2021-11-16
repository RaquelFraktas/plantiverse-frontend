import { connect } from 'react-redux'
import { clearUserShow } from '../redux/actionCreators'

function UserShow({user, clearUserShow}){

    console.log("user to view", user)
    // useEffect(() => {
    //     getUser(userView.id)
    //     //returning a function is run when unmounting.
    //     return clearUserShow()
    //   }, [getUser, clearUserShow])  

  return <div className="userShow">
    These are your plants
  </div>
}

const mapStateToProps = (state) =>{
    console.log(state)
    return {...state}
}
export default connect (mapStateToProps, { clearUserShow })(UserShow)