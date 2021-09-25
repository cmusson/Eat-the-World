import React from 'react';
import './CountryPage.css';
import { Link } from 'react-router-dom';
import foodData from './../data/food.json';
import Navbar from './Navbar'

export default function CountryPage ({countrySelected, SetSelectedDish}) {

// on click, change the dish selected to = {dish}
const onDishClick = (event) => {
    const dishElement = event.target.outerText
    console.log("EVENT:", event.target.outerText);
    console.log(dishElement);
    SetSelectedDish(dishElement);
};

    return (
        <div>
            <h1>{countrySelected}</h1>
            <h1>Local Delicacies</h1>

            <div className="dish-list">
                {foodData.map(val => {
                    if(countrySelected === val.country) {
                        return val.dish.map(dish => {
                            return <Link to="/dishinfo" key={dish}><div className="dish-item" onClick={onDishClick} >{dish}</div></Link>
                        })    
                    }
                })}
            </div>

            <Navbar/>

        </div>
    );

}