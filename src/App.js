// import logo from './logo.svg';
import './App.css';
import PlantIndex from './containers/PlantIndex'
import { Switch, Route } from 'route-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
      {/* <Route path="/plants/:id"> <PlantShow/> </Route>  */}
      {/* maybe dont need that one ^^^  find out if i need nested routes to show the back of a plant card*/}
        <Route path="/plants"> <PlantIndex/> </Route>

      </Switch>
    </div>
  );
}

export default App;
