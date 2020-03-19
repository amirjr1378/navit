import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.js";
import "leaflet/dist/leaflet.css";

const token =
  "pk.eyJ1IjoiYW1pcnNuYWtlIiwiYSI6ImNrN3hneG44ajBjOTgzZXFwenUzbjRuN2UifQ.lWPO3NBswNdXgnSGv02QlA";
const lightUrl =
  "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png";
const darkUrl =
  "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png";

const streetmap = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

function Map({ children, ...props }) {
  return (
    <LeafletMap {...props}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url={streetmap}
      />
      {children}
    </LeafletMap>
  );
}

// export default React.memo(Map);
export default Map;
