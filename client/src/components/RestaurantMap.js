import React from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow, } from '@react-google-maps/api'
import './RestaurantMap.css';

const libraries = ["places"];
const mapContainerStyle = {
    width: "80vw",
    height: "30vh",
}

console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY)

const center = {
    lat: 43.653225,
    lng: -79.383186,
}

export default function RestaurantMap () {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";


    return (
            <div>
                <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8} center={center} ></GoogleMap>
            </div>
    );

}