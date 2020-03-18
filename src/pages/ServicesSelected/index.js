import React, { useState } from "react";
import { Map, TileLayer } from "react-leaflet";
import { Menu } from "../../components/Icons";
import { Button } from "../../components/Button";
import "./ServicesSelected.styles.scss";
import ServiceType from "../../components/ServiceType";
const token =
  "pk.eyJ1IjoiYW1pcnNuYWtlIiwiYSI6ImNrN3hneG44ajBjOTgzZXFwenUzbjRuN2UifQ.lWPO3NBswNdXgnSGv02QlA";

function ServicesSelected(props) {
  const [viewport, setViewport] = useState({
    center: [35.6961, 51.4231],
    zoom: 15
  });
  return (
    <div className="services">
      <div style={{ direction: "ltr", width: "100%", height: "100vh" }}>
        <Map
          viewport={viewport}
          onViewportChange={newViewport => setViewport(newViewport)}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
        </Map>
      </div>
      <div className="services__header">
        <Button circle color="warning-outline" style={{ padding: 5 }}>
          <Menu />
        </Button>
        <Button circle color="warning-outline">
          <span className="lnr lnr-arrow-left" />
        </Button>
      </div>

      <div className="services__footer">
        <ServiceType icon="lnr-calendar-full" label="درخواست سرویس" />
        <ServiceType icon="lnr-car" label="درخواست تاکسی" color="warning" />
      </div>
    </div>
  );
}

export default ServicesSelected;
