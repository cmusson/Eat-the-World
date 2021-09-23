import React from 'react';
import './CountryPage.css';
import { Link } from 'react-router-dom';

export default function CountryPage () {
    return (
        <div>
            <h1>Feijoada</h1>

            <h1>FOOD IMAGE HERE</h1>

            <div>Add to Favorites</div>

            <h2>About Feijoada</h2>
            <p1>Feijoada is an awesome dish</p1>

            <div className="nav-bar">
                    <Link to="/">
                        <div className="home">Home</div>
                    </Link>
                    <Link to="/countrypage">
                        <div className="countrypage">Country</div>
                    </Link>
                    <Link to="/dishinfo">
                        <div className="food">Food</div>
                    </Link>
                </div>

        </div>
    );

}