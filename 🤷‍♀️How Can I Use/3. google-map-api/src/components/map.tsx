import React, { useEffect, useRef, useState } from "react";

// interface MapProps extends google.maps.MapOptions {
//   style: { [key: string]: string };
//   onClick?: (e: google.maps.MapMouseEvent) => void;
// }

const Map: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();
  const style = {
    width: "80%",
    height: "550px",
    margin: "10px auto",
    border: "3px solid lightgray",
  };

  useEffect(() => {
    if (mapRef.current && !map) {
      const newMap = new window.google.maps.Map(mapRef.current, {
        center: { lat: 37.569227, lng: 126.9777256 },
        zoom: 16,
      });
      setMap(newMap);
    }
  }, [mapRef, map]);

  return <div ref={mapRef} id="map" style={style} />;
};

export default Map;
