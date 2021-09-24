import React, { useState, useEffect } from 'react';
import './CountryPage.css';
import { Link } from 'react-router-dom';
import './Dish.css';

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
        <div>
            <h1>{dishSelected}</h1>

            <div className="pic-div">
                <img src={dishImg} alt={dishSelected} />
            </div>

            {/* <div>Add to Favorites</div> */}

            <h2>About {dishSelected}</h2>

            <div>
                <p>{dishInfo}</p>
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