import React from 'react';
import { Map, Marker } from 'google-maps-react';

const MapContainer = ({ geo, google }) => {
  const mapStyles = {
    width: '65%',
    height: '100%',
  };

  return (
    <Map
      center={geo}
      google={google}
      zoom={14}
      style={mapStyles}
      initialCenter={{ lat: -33.8682645, lng: 151.2015845 }}
    >
      <Marker
        position={geo}
        animation={google.maps.Animation.DROP}
      />
    </Map>
  );
}

export default MapContainer;
