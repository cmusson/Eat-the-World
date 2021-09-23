import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WorldMap from './components/WorldMap.js';
import CountryPage from './components/CountryPage.js';
import Dish from './components/Dish.js';

function App() {
  return (
    <Router>
      <div>
        
        <Switch>
          <Route exact path="/" ><WorldMap/></Route>
          <Route path="/countrypage" ><CountryPage/></Route>
          <Route path="/dishinfo" ><Dish/></Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
