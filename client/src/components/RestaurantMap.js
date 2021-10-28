import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import "./RestaurantMap.css";

const libraries = ["places"];
const mapContainerStyle = {
  width: "80vw",
  height: "30vh",
  radius: "1rem",
};

export default function RestaurantMap({ dishSelected }) {
  const [currentPosition, setCurrentPosition] = useState({});
  const [restaurantSuggestions, SetRestaurantSuggestions] = useState([]);
  const [selected, setSelected] = useState(null);

  const success = (position) => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setCurrentPosition(currentPosition);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  });

  const [lat, setLat] = useState(41.38);
  const [lng, setLng] = useState(2.16);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    });
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  // Get's restaurant data for map feature
  function getRestaurants() {
    fetch("http://localhost:3002/restaurants", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ cuisine: dishSelected }),
    })
      .then((res) => res.json())
      .then((res) => SetRestaurantSuggestions(res.restaurants))
      .catch((err) => {
        throw err;
      });
  }
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={{ lat, lng }}
      >
        <Marker position={{ lat, lng }} />
        {restaurantSuggestions.length > 0 &&
          restaurantSuggestions.slice(0, 6).map((obj) => {
            const markerLat = obj.geometry.location.lat;
            const markerLng = obj.geometry.location.lng;

            return (
              <Marker
                position={{ lat: markerLat, lng: markerLng }}
                icon={{
                  url: "https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2018/png/iconmonstr-eat-8.png&r=0&g=0&b=0",
                  scaledSize: new window.google.maps.Size(20, 20),
                  origin: new window.google.maps.Point(0, 0),
                  anchor: new window.google.maps.Point(15, 15),
                }}
                onClick={() => {
                  setSelected(obj);
                }}
              />
            );
          })}

        {selected ? (
          <InfoWindow
            position={{
              lat: selected.geometry.location.lat,
              lng: selected.geometry.location.lng,
            }}
          >
            <div>
              <h5>{selected.name}</h5>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}
