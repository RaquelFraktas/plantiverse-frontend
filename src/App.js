// import logo from './logo.svg';
import './App.css';
import { PlantIndex, PlantShow, Navbar, Auth } from './components/indexExports'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

function App(props) {
  console.log(props)
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

export default connect(mapStateToProps)(App);
