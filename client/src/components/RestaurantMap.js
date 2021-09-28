import React, {useState, useEffect} from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow, } from '@react-google-maps/api'
import './RestaurantMap.css';
// import Autocomplete from "react-google-autocomplete";
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
// import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
// import {Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from '@reach/combobox'


const libraries = ["places"];
const mapContainerStyle = {
    width: "80vw",
    height: "30vh",
    radius: "1rem",
}

// 41.3874° N, 2.1686° E

export default function RestaurantMap ({ dishSelected }) {

    const [ currentPosition, setCurrentPosition ] = useState({});
    const [restaurantSuggestions, SetRestaurantSuggestions] = useState([]);
    // console.log("SUGGESTIONS FOR DA MAP: ", restaurantSuggestions);
  
    const success = position => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    setCurrentPosition(currentPosition)
    // console.log(currentPosition);;
  };
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  })

    const [lat, setLat] = useState(41.38);
    const [lng, setLng] = useState(2.16);
    const [status, setStatus] = useState(null);

    useEffect( () => {
        getLocation();
    },[]);

    const getLocation = () => {
          navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
          });   
      }


      useEffect( () => { getRestaurants() },[]);

      // Get's restaurant data for map feature
      function getRestaurants () {
        fetch("http://localhost:3002/restaurants", {
          method:"POST",
          headers: {"content-type":"application/json"},
          body: JSON.stringify({ cuisine: dishSelected })
        }).then(res => res.json())
        .then(res => 
            // console.log("RES:",res.restaurants)
            SetRestaurantSuggestions(res.restaurants)
        ).catch(err => console.log(err));
    }



    // const getLocation = () => {
    //     // console.log(navigator.geolocation);
    //     if (!navigator.geolocation) {
    //       setStatus('Geolocation is not supported by your browser');
    //     } else {
    //       setStatus('Locating...');
    //       navigator.geolocation.getCurrentPosition((position) => {
    //         setStatus(null);
    //         setLat(position.coords.latitude);
    //         setLng(position.coords.longitude);
    //       }, () => {
    //         setStatus('Unable to retrieve your location');
    //       });
    //     }
    //   }

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";

    // const center = {
    //     lat: 41.38,
    //     lng: 2.16,
    // }

    const iconUrl = 'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2018/png/iconmonstr-eat-8.png&r=0&g=0&b=0';

    return (
            <div>
                <GoogleMap mapContainerStyle={mapContainerStyle} zoom={12} center={{ lat, lng }} >
                <Marker position={{ lat, lng }}/>
                {restaurantSuggestions.slice(0,5).map(obj => {
                  
                  const markerLat = obj.geometry.location.lat;
                  const markerLng = obj.geometry.location.lng;
                  
                  return <Marker position={{ lat: markerLat, lng: markerLng}} icon={{
                    url: "https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2018/png/iconmonstr-eat-8.png&r=0&g=0&b=0", 
                    scaledSize: new window.google.maps.Size(20, 20),
                    origin: new window.google.maps.Point(0, 0),
                    anchor: new window.google.maps.Point(15, 15),}} />
                })}
                </GoogleMap>

            </div>
    );

}


{/* <div className="location">
                <button onClick={getLocation}>Get Location</button>
                <h1>Coordinates</h1>
                <p>{status}</p>
                {lat && <p>Latitude: {lat}</p>}
                {lng && <p>Longitude: {lng}</p>}
                </div> */}