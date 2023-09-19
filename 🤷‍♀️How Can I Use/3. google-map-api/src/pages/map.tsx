import React, { useEffect, useRef, useState } from "react";

const Map: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();
  const style = { width: "400px", height: "400px", margin: "0 auto" };

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
