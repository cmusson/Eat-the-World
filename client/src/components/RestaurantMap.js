import React, {useState, useEffect} from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow, } from '@react-google-maps/api'
import './RestaurantMap.css';

const libraries = ["places"];
const mapContainerStyle = {
    width: "80vw",
    height: "30vh",
    radius: "1rem",
}



// 41.3874° N, 2.1686° E

export default function RestaurantMap () {

    // const [ currentPosition, setCurrentPosition ] = useState({});
  
//     const success = position => {
//     const currentPosition = {
//       lat: position.coords.latitude,
//       lng: position.coords.longitude
//     }
//     setCurrentPosition(currentPosition)
//     console.log(currentPosition);;
//   };
  
//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(success);
//   })

    const [lat, setLat] = useState(41.38);
    const [lng, setLng] = useState(2.16);
    const [status, setStatus] = useState(null);

    useEffect( () => { getLocation() },[]);

    const getLocation = () => {
        console.log(navigator.geolocation);
        if (!navigator.geolocation) {
          setStatus('Geolocation is not supported by your browser');
        } else {
          setStatus('Locating...');
          navigator.geolocation.getCurrentPosition((position) => {
            setStatus(null);
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
            console.log("LAT",lat);
            console.log("LNG",lng);
          }, () => {
            setStatus('Unable to retrieve your location');
          });
        }
      }

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

    return (
            <div>
                <GoogleMap mapContainerStyle={mapContainerStyle} zoom={10} center={{ lat, lng }} >
                <Marker position={{ lat, lng }}/>
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