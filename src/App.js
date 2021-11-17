// import logo from './logo.svg';
import './App.css';
import { PlantIndex, PlantShow, Navbar, Auth, HomePage, UserShow, ForumIndex } from './components/indexExports'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { autoLogin, logOut } from './redux/actionCreators'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

function App({user, autoLogin, logOut}) {
  const history = useHistory()
  // console.log(user)

  useEffect(() => localStorage.token && autoLogin(),[autoLogin])
  
  const handleLogout = (e) => {
    e.preventDefault();
    logOut()
    history.push("/")
    // can do the redirect in my action creator, as long as history is passed in logout
  }

  return (
    <>
    <Navbar/>
    { user.username ? 
      <Switch>
        <Route path="/plants/:id"> <PlantShow/> </Route> 
        <Route path="/plants"> <PlantIndex/> </Route>
        <Route path="/message_boards/"> <ForumIndex/> </Route>
        <Route path="/users/:id"> <UserShow/> </Route>
        {/* <Route path="/message_boards/:id"> <ForumShow/> </Route> */}
        
        <Route exact path="/"><HomePage /></Route>
      </Switch> :
      <Auth />
    }

    <Link to='/' className="logout" onClick={handleLogout}> Log Out </Link>
    </>
  );
}

const mapStateToProps = (state)=> {
  return {user: state.user}

}

export default connect(mapStateToProps, { autoLogin, logOut })(App);
