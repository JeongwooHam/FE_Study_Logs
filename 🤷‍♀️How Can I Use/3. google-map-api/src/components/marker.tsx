import React, { useEffect, useState } from "react";

const Marker: React.FC<google.maps.MarkerOptions> = (options) => {
  const [mapMarker, setMapMarker] = useState<google.maps.Marker>();

  useEffect(() => {
    if (!mapMarker) {
      setMapMarker(new google.maps.Marker());
    }

    // 언마운트 시 마커 제거
    return () => {
      if (mapMarker) mapMarker.setMap(null);
    };
  }, [mapMarker]);

  useEffect(() => {
    if (mapMarker) mapMarker.setOptions(options);
  }, [mapMarker, options]);

  return null;
};

export default Marker;
