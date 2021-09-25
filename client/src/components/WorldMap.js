import React, { useState } from 'react';
import './WorldMap.css';
import mapData from './../data/countries.json';
import { MapContainer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'

export default function WorldMap ({countrySelected, SetSelectedCountry}) {

    const [filteredCountries, SetFilteredCountries] = useState([]);

// console.log(mapData.features);

// ------------ maybe search auto completes, and the on submit is for the country profile page instead
const handleFilter = (event) => {
    const searchInput = event.target.value;
    const newFilter = mapData.features.filter((value) => {
        return value.properties.ADMIN.toLowerCase().includes(searchInput.toLowerCase())
    });
    SetFilteredCountries(newFilter);
}

// select a random country 
const randomCountry = () => {
    const featuresArray = mapData.features;
    const randomIndex = Math.floor(Math.random() * featuresArray.length);
    SetSelectedCountry(featuresArray[randomIndex].properties.ADMIN);
}

// map styling
const countryStyle = {
    fillColor: 'red',
    fillOpacity: 0.2,
    color: 'black',
    weight: 0.5
}

// when a country is clicked, change the colour
const onCountryClick = (event) => {
    event.target.setStyle(
        {fillColor: "blue"}
    );
};

// list selected country
const writeCountryName = (event) => {
    SetSelectedCountry(event.target.feature.properties.ADMIN);
}

// Pop up produced following every country click with it's info
const onEachCountry = (country, layer) => {
    const countryName = country.properties.ADMIN;
    //pop-up country name when clicked
    layer.bindPopup(countryName); 
    // change country color to blue when clicked 
    layer.on({
        click: onCountryClick
    })
    // list selected country
    layer.on({
        click: writeCountryName
    })
}

    
        return (
        <div>
            <h1>Eat the World</h1>
            <div className="map-search-container">
                <h2 className="instructions" >Select a country and view their food</h2>

                <MapContainer style={{ height: "50vh" }} zoom={1.5} center={[20, 100]} >
                    <GeoJSON style={countryStyle} data={mapData.features} onEachFeature={onEachCountry} />
                </MapContainer>

                <h2 className="select-country">{countrySelected + "!"}</h2>
                
                <div className="buttons">

                    <div className="search">
                        <div className="searchInputs">
                            <input type="text" placeholder="Search" onChange={handleFilter} />
                        </div>

                        { filteredCountries.length !== 0 && (
                        <div className="countryResult">
                            {filteredCountries.slice(0,10).map((country) => {
                                return <div className="countrySuggestion" onClick={() => {
                                    SetSelectedCountry(country.properties.ADMIN);
                                    SetFilteredCountries([]);
                                    
                                }} >{country.properties.ADMIN}</div>
                            })}
                        </div>
                        )}

                    </div>

                    <div>
                        <button className="random-button" onClick={randomCountry} >Random!</button>
                    </div>

                    <Link to="/countrypage">
                        <button className="view=button" >View Their Food!</button>
                    </Link>

                </div>

                <Navbar/>

            </div>

        </div>
        );
    
}
