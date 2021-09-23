import React, { useContext } from 'react';
import './CountryPage.css';
import { Link } from 'react-router-dom';
import foodData from './../data/food.json';

export default function CountryPage ({countrySelected}) {

    console.log(foodData);



    return (
        <div>
            <h1>{countrySelected}</h1>
            <h1>Local Delicacies</h1>

            <div dish-list>
                {foodData.map(val => {
                    if(countrySelected === val.country)
                    return <h3>{val.dish}</h3>
                })}
            </div>

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