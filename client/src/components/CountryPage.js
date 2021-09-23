import React from 'react';
import './CountryPage.css';
import { Link } from 'react-router-dom';

export default function CountryPage () {
    return (
        <div>
            <h1>Brazil</h1>
            <h1>Local Delicacies</h1>
            <div>Feijoada</div>

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