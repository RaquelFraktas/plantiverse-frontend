// import logo from './logo.svg';
import './App.css';
import { PlantIndex, PlantShow, Navbar, Auth, HomePage } from './components/indexExports'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { autoLogin, logOut } from './redux/actionCreators'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

function App(props) {
  const history = useHistory()
  console.log(props.user)

  useEffect(() => localStorage.token && props.autoLogin(),[props.autoLogin])
  
  const handleLogout = (e) => {
    e.preventDefault();
    props.logOut()
    history.push("/")
  }

  return (
    <>
    <Navbar/>
    { props.user.username ? 
      <Switch>
        <Route path="/plants/:id"> <PlantShow/> </Route> 
        <Route path="/plants"> <PlantIndex/> </Route>
        <Route exact path="/"><HomePage/></Route>
      </Switch> :
      <Auth history= {history}/>
    }

    <Link to='/' className="logout" onClick={handleLogout}> Log Out </Link>
    </>
  );
}

const mapStateToProps = (state)=> {
  return {user: state.user}

}

export default connect(mapStateToProps, { autoLogin, logOut })(App);
