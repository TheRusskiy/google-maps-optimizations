import { MAP_HEIGHT, MARKERS, CENTER } from "../SomeMap";
import React from "react";
import StaticImageMapImage from "../StaticMapImage";

const WIDTH = 800;

export default function StaticImageMapPage() {
  return (
    <div style={{ height: MAP_HEIGHT, width: WIDTH, position: "relative" }}>
      <StaticImageMapImage
        markers={MARKERS}
        center={CENTER}
        height={MAP_HEIGHT}
        width={WIDTH}
        zoom={10}
      />
    </div>
  );
}
