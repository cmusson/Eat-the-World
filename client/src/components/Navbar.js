import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function CountryPage () {

return(
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
)

}