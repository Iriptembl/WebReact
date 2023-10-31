import { GoogleMap, Marker } from '@react-google-maps/api';
import { useState, useCallback, useRef } from 'react';

const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const containerStyle = {
  width: '800px',
  height: '350px'
};

export const Map = ({ markers }) => {
  const center = {
    lat: 46.204391,
    lng: 6.143158
}
  const mapRef = useRef(undefined);

  const onLoad = useCallback(function callback(map) {
    mapRef.current = map;
  }, [])

  const onUnmount = useCallback(function callback(map) {
    mapRef.current = undefined;
  }, [])

  return ( 
        <div>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={3}
          >
            { markers.map(marker => (
              <Marker key={marker.id} position={marker.position} label={{ text: labels[marker.id % markers.length], fontSize: "15px" }} />
            )) }
          </GoogleMap>
      </div>
  )
}

export default Map;