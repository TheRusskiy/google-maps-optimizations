import { GoogleMap, Marker, LoadScriptNext } from "@react-google-maps/api";
import React from "react";

type Props = {
  loadingElement?: React.ReactElement;
};

export const MAP_HEIGHT = 500;

export type Point = {
  lat: number;
  lng: number;
};

export const CENTER: Point = { lat: -34.397, lng: 150.644 };

export const MARKERS: Point[] = [];

for (let i = 0; i < 20; i++) {
  MARKERS.push({
    lat: CENTER.lat + Math.random(),
    lng: CENTER.lng + Math.random(),
  });
}

export default function SomeMap({ loadingElement }: Props) {
  return (
    <LoadScriptNext
      googleMapsApiKey={process.env.REACT_APP_MAPS_KEY!}
      googleMapsClientId="google-maps-script-map"
      loadingElement={loadingElement}
      mapIds={["roadmap"]}
    >
      <GoogleMap
        center={CENTER}
        mapContainerStyle={{ height: MAP_HEIGHT }}
        options={{
          gestureHandling: "auto",
        }}
        zoom={10}
      >
        {MARKERS.map((m) => (
          <Marker key={`${m.lat}_${m.lng}`} position={m} />
        ))}
      </GoogleMap>
    </LoadScriptNext>
  );
}
