// MapComponent.jsx
import { useEffect } from "react";
import React from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';


let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;


const MapComponent = ({ location }) => {
 
    const MapCenterer = ({ location }) => {
    const map = useMap();

    useEffect(() => {
      if (location) {
        map.setView(location, map.getZoom());
      }
    }, [location, map]);

    return null;
  };

  return (
    <MapContainer
      className="h-[500px] w-full z-20"
      zoom={10}
      zoomControl={false}
      scrollWheelZoom={false}
      dragging={false}
      center={[33.83770116994009, -6.2010136096756075]}
      doubleClickZoom={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
     


      {location && <Marker position={location}></Marker>}
      <MapCenterer location={location} />

    </MapContainer>
  );
};

export default MapComponent;
