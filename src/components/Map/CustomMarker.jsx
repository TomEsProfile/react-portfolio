import React, { useEffect, useRef, useState } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { useMap } from 'react-leaflet/hooks';

const CustomMarker = ({ isActive, data, mapReady }) => {
  const [refReady, setRefReady] = useState(false);
  let popupRef = useRef();
  const map = useMap();
  console.log('map zoom:', map.getZoom());

  useEffect(() => {
    if (refReady && isActive && mapReady) {
      popupRef.openOn(map);
    }
  }, [isActive, refReady, mapReady, map]);

  return (
    <Marker position={data.position}>
      <Popup
        ref={(r) => {
          popupRef = r;
          setRefReady(true);
        }}
      >
        Yupperz
      </Popup>
    </Marker>
  );
};

export default CustomMarker;
