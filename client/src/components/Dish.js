import React, { useState, useEffect } from 'react';
import './CountryPage.css';
import { Link } from 'react-router-dom';

export default function CountryPage (dishSelected) {
    // const [dishImg, setDishImg] = useState('');

    // useEffect( () => { getDishImage() },[]);

    // const imgUrl = "http://en.wikipedia.org/w/api.php?action=query&origin=*&prop=pageimages&format=json&piprop=original&titles=" + dishSelected.dishSelected;
    
    // console.log ("THE DISH:", dishSelected);
    // console.log("URL:", imgUrl);






    // function getDishImage () {
    //     fetch(imgUrl, { mode: 'cors' }) //no-cors makes it opaque
    //       .then(res => {
    //         console.log(res);
    //         return res.json();       
    //       })
    //       .then((data) => {
    //           console.log("data",data);
    //         setDishImg(data);
    //       })
    //       .catch(err => {
    //           console.log(err);
    //       })
    //   }








    // function getDishInfo () {
    //     fetch()
    //       .then(res => {
    //         return res.json();
    //       })
    //       .then((data) => {
    //         setEvents(data);
    //       })
    //   }

    return (
        <div>
            <h1>Feijoada</h1>

            <div>
                {/* <img src={dishImg} alt={dishSelected} /> */}
            </div>

            <div>Add to Favorites</div>

            <h2>About Feijoada</h2>

            <div>
                <p>Feijoada is an awesome dish</p>
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