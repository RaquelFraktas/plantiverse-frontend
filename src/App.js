// import logo from './logo.svg';
import './App.css';
import { PlantIndex, PlantShow, Navbar } from './components/indexExports'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Navbar/>
      <Switch>
      <Route path="/plants/:id"> <PlantShow/> </Route> 
        <Route path="/plants"> <PlantIndex/> </Route>
      </Switch>
    </>
  );
}

export default App;
