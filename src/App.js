// import logo from './logo.svg';
import './App.css';
import { PlantIndex, PlantShow, Navbar, Auth } from './components/indexExports'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { autoLogin } from './redux/actionCreators'

function App(props) {
  console.log(localStorage.token)
  
  useEffect(() => localStorage.token && props.autoLogin(),[props.autoLogin])

  return (
    <>
    <Navbar/>
    { props.user.username ? 
      <Switch>
      <Route path="/plants/:id"> <PlantShow/> </Route> 
        <Route path="/plants"> <PlantIndex/> </Route>
        <Route exact path="/"><PlantIndex/></Route>
      </Switch> :
      <Auth/>
    }
    </>
  );
}

const mapStateToProps = (state)=> {
  return {user: state.user}

}

export default connect(mapStateToProps, {autoLogin})(App);
