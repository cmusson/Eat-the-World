import './App.css';
import React, { useState }  from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WorldMap from './components/WorldMap.js';
import CountryPage from './components/CountryPage.js';
import Dish from './components/Dish.js';

function App() {
  const [countrySelected, SetSelectedCountry] = useState('Select or Search');

  const [dishSelected, SetSelectedDish] = useState('');

  return (
    <Router>
      <div>
        
        <Switch>
          <Route exact path="/" ><WorldMap countrySelected={countrySelected} SetSelectedCountry={SetSelectedCountry} /></Route>
          <Route path="/countrypage" ><CountryPage countrySelected={countrySelected} SetSelectedDish={SetSelectedDish} SetSelectedCountry={SetSelectedCountry} /></Route>
          <Route path="/dishinfo" ><Dish dishSelected={dishSelected} SetSelectedDish={SetSelectedDish} /></Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
