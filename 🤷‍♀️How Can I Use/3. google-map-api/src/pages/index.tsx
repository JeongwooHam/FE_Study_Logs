import { Wrapper } from "@googlemaps/react-wrapper";
import Map from "../components/map";
import React, { useState } from "react";
import Marker from "../components/marker";
import SearchBar from "../components/search-bar";

const Main: React.FC = () => {
  const apiKey = process.env.REACT_APP_KEY;
  const [clicks, setClicks] = useState<google.maps.LatLng[]>([]);
  const [zoom, setZoom] = useState(11);
  const [center, setCenter] = useState<google.maps.LatLngLiteral>({
    lat: 37.569227,
    lng: 126.9777256,
  });

  const onClick = (e: google.maps.MapMouseEvent) => {
    setClicks([...clicks, e.latLng!]);
  };

  if (apiKey)
    return (
      <div style={{ textAlign: "center" }}>
        <Wrapper apiKey={apiKey}>
          <h1>My Map :)</h1>
          <Map center={center} onClick={onClick} zoom={zoom}>
            {clicks.map((location, i) => (
              <Marker key={i} position={location} />
            ))}
          </Map>
          <SearchBar setCenter={setCenter} />
        </Wrapper>
      </div>
    );
  return null;
};

export default Main;
