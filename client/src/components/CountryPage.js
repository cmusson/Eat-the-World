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
        <div className="country-page-container">
            <h1>{countrySelected}</h1>
            <h2>Local delicacies in {countrySelected}:</h2>

            <div className="dish-list">
                {foodData.map(val => {
                    if(countrySelected === val.country) {
                        return val.dish.map(dish => {
                            return <Link to="/dishinfo" className="link" key={dish}>
                            <div className="dish-item" onClick={onDishClick} >
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12-.006c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm5.999 19.999c2.429-1.825 4.001-4.73 4.001-7.999 0-5.519-4.481-10-10-10s-10 4.481-10 10c0 3.701 2.015 6.936 5.008 8.665v-4.023c0-.576-.36-.765-1.147-1.395-.581-.466-.981-1.194-.907-1.935.209-2.114.718-6.312.718-6.312h.5v5h.836l.186-5h.506l.144 5h.836l.201-5h.469l.166 5h.835v-5h.458s.562 4.171.793 6.292c.081.751-.341 1.493-.935 1.963-.791.626-1.151.806-1.151 1.391v5.042c.794.204 1.626.312 2.484.312 1.229 0 2.407-.222 3.496-.629v-3.371s-.977-.003-2.056 0c.668-5.83 2.586-11 3.883-11 .373 0 .67.297.673.709.005.802.004 7.091.003 12.29z"/></svg>
                            <h3>{dish}</h3>
                            </div>
                            </Link>
                        })    
                    }
                })}
            </div>

            <Navbar/>

        </div>
    );

}