import { MAP_HEIGHT, MARKERS, CENTER } from "../SomeMap";
import React, { useState } from "react";
import StaticImageMapImage from "../StaticMapImage";
import SomeMap from "../SomeMap";

const WIDTH = 800;

export default function PlaceholderMapPage() {
  const [useDynamicMap, setUseDynamicMap] = useState<boolean>(false);
  const staticMap = (
    <div
      onClick={() => setUseDynamicMap(true)}
      style={{
        height: MAP_HEIGHT,
        width: WIDTH,
        cursor: "pointer",
        position: "relative",
      }}
    >
      <StaticImageMapImage
        markers={MARKERS}
        center={CENTER}
        height={MAP_HEIGHT}
        width={WIDTH}
        zoom={10}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            backgroundColor: "black",
            opacity: 0.3,
            height: "100%",
            width: "100%",
          }}
        />
        {!useDynamicMap && (
          <button
            style={{ position: "absolute", padding: 20 }}
            onClick={() => setUseDynamicMap(true)}
          >
            Browse Map
          </button>
        )}
      </div>
    </div>
  );

  if (!useDynamicMap) return staticMap;

  return (
    <div style={{ height: MAP_HEIGHT, width: WIDTH, position: "relative" }}>
      <SomeMap loadingElement={staticMap} />
    </div>
  );
}
