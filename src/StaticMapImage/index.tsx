import { Point } from "../SomeMap";
import queryString from "query-string";

type Props = {
  markers: Point[];
  height: number;
  width: number;
  zoom: number;
  center: Point;
};

export default function StaticImageMapImage({
  markers,
  height,
  width,
  center,
  zoom,
}: Props) {
  return (
    <img
      alt="Map Preview"
      style={{
        objectFit: "cover",
        objectPosition: "50% 50%",
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: 0,
        height: 0,
        minWidth: "100%",
        maxWidth: "100%",
        minHeight: "100%",
        maxHeight: "100%",
      }}
      src={`https://maps.googleapis.com/maps/api/staticmap?${queryString.stringify(
        {
          center: `${center.lat},${center.lng}`,
          zoom,
          size: `${width}x${height}`,
          key: process.env.REACT_APP_MAPS_KEY!,
          scale: 2,
          format: "jpg",
          markers: `color:red|size:mid|${markers
            .map((m) => `${m.lat},${m.lng}`)
            .join("|")}`,
        }
      )}`}
    />
  );
}
