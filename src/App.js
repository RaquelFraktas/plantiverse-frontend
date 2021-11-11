// import logo from './logo.svg';
import './App.css';
import { PlantIndex, PlantShow } from './components/indexExports'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/plants/:id"> <PlantShow/> </Route> 
        <Route path="/plants"> <PlantIndex/> </Route>
      </Switch>
    </div>
  );
}

export default App;
