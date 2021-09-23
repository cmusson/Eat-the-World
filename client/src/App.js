import './App.css';
import React, { useState }  from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WorldMap from './components/WorldMap.js';
import CountryPage from './components/CountryPage.js';
import Dish from './components/Dish.js';

function App() {
  const [countrySelected, SetSelectedCountry] = useState('Select or Search');

  return (
    <Router>
      <div>
        
        <Switch>
          <Route exact path="/" ><WorldMap countrySelected={countrySelected} SetSelectedCountry={SetSelectedCountry} /></Route>
          <Route path="/countrypage" ><CountryPage countrySelected={countrySelected} SetSelectedCountry={SetSelectedCountry} /></Route>
          <Route path="/dishinfo" ><Dish/></Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
