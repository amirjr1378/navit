import React from "react";
import useStepper from "../../hooks/useStepper";
import { Map, Marker, Popup, Polyline } from "../../components/Map";
import { warningIcon, primaryIcon } from "./Marker";
import {
  SelectOrigin,
  SelectDestination
} from "../../containers/OrderTaxiSteps";
import { ajax } from "../../helpers";

const OrderTaxi = function(prop) {
  // use ref is for preventing rerender for steps mutate ref.current doesnt cause rerender
  const viewportRef = React.useRef(null);
  const [viewport, setViewport] = React.useState({
    center: [35.6961, 51.4231],
    zoom: 19
  });
  const [coordinates, setCoordinates] = React.useState({
    origin: [],
    destination: []
  });
  const { step, increase, decrease } = useStepper(1);

  const findUserLocation = React.useCallback(() => {
    if ("geolocation" in navigator) {
      // check if geolocation is supported/enabled on current browser
      navigator.geolocation.getCurrentPosition(
        function(position) {
          // for when getting location is a success
          console.log(
            "latitude",
            position.coords.latitude,
            "longitude",
            position.coords.longitude
          );
          setViewport(state => ({
            ...state.viewport,
            center: [position.coords.latitude, position.coords.longitude]
          }));
        },
        function(error_message) {
          console.error(
            "An error has occured while retrieving location",
            error_message
          );
        }
      );
    } else {
      // geolocation is not supported
      // get your location some other way
      console.log("geolocation is not enabled on this browser");
    }
  }, []);

  viewportRef.current = viewport;
  const selectOrigin = React.useCallback(() => {
    async function select() {
      setCoordinates(state => ({
        ...state,
        origin: viewportRef.current.center
      }));
      await ajax.mock("/select-origin", { status: true });
      console.log("origin selected", viewportRef.current);
      increase();
    }
    select();
  }, []);

  const selectDestination = React.useCallback(() => {
    async function select() {
      setCoordinates(state => ({
        ...state,
        destination: viewportRef.current.center
      }));
      await ajax.mock("/select-destination", { status: true });
      console.log("destination selected", viewportRef.current);
      increase();
    }
    select();
  }, []);

  const getSteps = function() {
    switch (step) {
      case 1:
        return (
          <SelectOrigin
            selectOrigin={selectOrigin}
            findUserLocation={findUserLocation}
          />
        );
      case 2:
        return (
          <SelectDestination
            selectDestination={selectDestination}
            decrease={decrease}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="services">
      <div style={{ direction: "ltr", width: "100%", height: "100vh" }}>
        <Map
          viewport={viewport}
          onViewportChange={viewport => setViewport({ ...viewport })}
        >
          {step < 3 && (
            <Marker position={viewport.center} icon={warningIcon}></Marker>
          )}
          {coordinates.origin.length && (
            <>
              <Marker position={coordinates.origin} icon={warningIcon}></Marker>
              <Marker position={coordinates.origin}>
                <Popup>مبدا</Popup>
              </Marker>
            </>
          )}
          {coordinates.destination.length && (
            <>
              <Marker
                position={coordinates.destination}
                icon={primaryIcon}
              ></Marker>

              <Marker position={coordinates.destination}>
                <Popup>مقصد</Popup>
              </Marker>
            </>
          )}
          {coordinates.destination.length && coordinates.origin.length && (
            <Polyline
              color="#f78408"
              positions={[coordinates.origin, coordinates.destination]}
            />
          )}
        </Map>
      </div>
      {getSteps()}
    </div>
  );
};

export default OrderTaxi;
