import SomeMap, { MAP_HEIGHT } from "../SomeMap";
import React, { useCallback, useEffect, useState } from "react";

const useObserveVisibility = (element: Element | null): boolean => {
  const [visible, setVisible] = useState<boolean>(false);
  console.log(element);
  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      (changes) => {
        changes.forEach((change) => {
          if (change.isIntersecting) {
            setVisible(true);
          }
        });
      },
      {
        root: null, // relative to document viewport
        rootMargin: "0px", // margin around root
        threshold: 0, // visible amount of item shown in relation to root
      }
    );
    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [element]);
  return visible;
};

const useRefWithCallback = (): [
  Element | null,
  (node: Element | null) => void
] => {
  const [node, setMapNode] = useState<Element | null>(null);
  const refWithCallback = useCallback((node) => {
    if (node !== null) {
      setMapNode(node);
    }
  }, []);
  return [node, refWithCallback];
};

export default function ObserverMapPage() {
  const [mapNode, mapRef] = useRefWithCallback();
  const showMap = useObserveVisibility(mapNode);
  return (
    <div>
      <div style={{ height: 1000, backgroundColor: "blue" }} />
      <div ref={mapRef} style={{ height: MAP_HEIGHT }}>
        {showMap && <SomeMap />}
      </div>
    </div>
  );
}
