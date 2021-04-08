import React from 'react';
import { GoogleMap, loadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const mapStyles = {
    height: '50vh',
    width: '100vw',
  };

  const defaultCenter = {
    lat: 19.4267261,
    lng: -99.1718796,
  };

  return (
    <loadScript googleMapsApiKey="AIzaSyBvi1OWdv1nGSAmnBhWJLWsUurroGEsQhE">
      <GoogleMap mapContainerStyle={mapStyles} zoom={9} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </loadScript>
  );
};

export default Map;
