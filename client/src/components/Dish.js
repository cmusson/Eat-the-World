import React, { useState, useEffect } from 'react';
import './Dish.css';
import Navbar from './Navbar'
import RestaurantMap from './RestaurantMap';

export default function CountryPage ({ dishSelected }) {
    const [dishImg, setDishImg] = useState('');
    const [dishInfo, setDishInfo] = useState('');
    // console.log(dishImg);

    useEffect( () => { getDishImage() },[]);
    useEffect( () => { getDishInfo() },[]);
    
    // console.log ("THE DISH:", dishSelected);
    // console.log("URL:", imgUrl);

    function getDishImage () {
        fetch("http://localhost:3002/image", {
          method:"POST",
          headers: {"content-type":"application/json"},
          body: JSON.stringify({ dish: dishSelected })
        }).then(res => res.json())
        .then(res => 
            // console.log("RES:",res)
        setDishImg(res.imgLink)
        );
    }

    function getDishInfo () {
        fetch("http://localhost:3002/info", {
          method:"POST",
          headers: {"content-type":"application/json"},
          body: JSON.stringify({ dish: dishSelected })
        }).then(res => res.json())
        .then(res => 
            // console.log("RES:",res)
            setDishInfo(res.imgLink.replace( /(<([^>]+)>)/ig, ''))
        );
    }


    return (
        <div className="dish-main">
            <h1>{dishSelected}</h1>

            <div className="pic-div">
                <img src={dishImg} alt={dishSelected} />
            </div>

            <div className="info-container">

                {/* <div>Add to Favorites</div> */}

                

                <div className="dish-info" >
                <h2>About {dishSelected}</h2>
                    <p>{dishInfo}</p>
                </div>

                <div className="recipes">
                    <h2>Recipes</h2>
                    <a className="recipe-link" href="https://www.allrecipes.com/search/results/?search={dishSelected}" >https://www.allrecipes.com/search/results/?search={dishSelected}</a>
                    <a className="recipe-link" href="https://foodnetwork.co.uk/search/?q={dishSelected}" >hhttps://foodnetwork.co.uk/search/?q={dishSelected}</a>
                </div>

                <div>
                    <h2>Nearby Restaurants</h2>
                    <RestaurantMap/>
                </div>

            </div>

            <Navbar/>

        </div>
    );

}