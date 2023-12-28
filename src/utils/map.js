import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
  width: "70vw",
  height: "55vh",
};
const center = {
  lat: 20.929448, // default latitude
  lng: 77.751651, // default longitude
};

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDmns_oO-ywOHEObdWcN1AtNQHAEoMetvA",
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div className="d-flex justify-content-center">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={19}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default Map;
