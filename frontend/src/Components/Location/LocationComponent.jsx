import React, { useEffect, useState } from "react";
import Map from "../Map/Map";

const LocationComponent = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position?.coords?.latitude);
          setLongitude(position?.coords?.longitude);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div>
      Latitude: {latitude}
      <br />
      Longitude: {longitude}
      <br />
      {latitude && longitude && (
        <Map latitude={latitude} longitude={longitude} />
      )}
    </div>
  );
};

export default LocationComponent;
