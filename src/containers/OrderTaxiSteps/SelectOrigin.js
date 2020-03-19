import React from "react";
import { Map, Marker, Popup } from "../../components/Map";
import L from "leaflet";
import { Menu } from "../../components/Icons";
import { Button } from "../../components/Button";
import Dropdown, { Toggle, Content } from "../../components/Dropdown/Dropdown";
import { withRouter } from "react-router-dom";
import { ajax } from "../../helpers";

const icon = new L.Icon({
  iconUrl: require("./marker.png"),
  iconRetinaUrl: require("./marker.png"),
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(100, 100)
});

class SelectOrigin extends React.Component {
  state = {
    viewport: {
      center: [35.6961, 51.4231],
      zoom: 19
    },
    loading: false
  };
  toggle = () => this.setState(state => ({ loading: !state.loading }));
  nextStep = async () => {
    console.log("next step", this.state.viewport);
    this.toggle();
    try {
      await ajax.mock("/select-origin", { status: true });
      this.toggle();
      this.props.increase(this.state.viewport);
    } catch (error) {
      console.log(error);
    }
  };
  findUserLocation = () => {
    if ("geolocation" in navigator) {
  // check if geolocation is supported/enabled on current browser
  navigator.geolocation.getCurrentPosition(
   function (position) {
     // for when getting location is a success
     console.log('latitude', position.coords.latitude, 
                 'longitude', position.coords.longitude);
   },
  function (error_message) {
    // for when getting location results in an error
    console.error('An error has occured while retrieving
                  location', error_message)
  }  
});
} else {
  // geolocation is not supported
  // get your location some other way
  console.log('geolocation is not enabled on this browser')
}
  };
  render() {
    const { viewport, loading } = this.state;
    const { history } = this.props;

    return (
      <div className="services">
        <div style={{ direction: "ltr", width: "100%", height: "100vh" }}>
          <Map
            viewport={viewport}
            onViewportChange={viewport => this.setState({ viewport })}
          >
            <Marker position={this.state.viewport.center} icon={icon}></Marker>
          </Map>
        </div>
        <div className="services__header">
          <Dropdown>
            <Toggle as={"div"}>
              <Button circle color="warning-outline" style={{ padding: 5 }}>
                <Menu />
              </Button>
            </Toggle>
            <Content>
              <span name="item1">items</span>
              <span name="item2">items</span>
              <span name="item 3">items</span>
            </Content>
          </Dropdown>

          <Button
            circle
            color="warning-outline"
            onClick={this.findUserLocation}
          >
            <span className="lnr lnr-location" />
          </Button>
          <Button
            circle
            color="warning-outline"
            onClick={() => history.goBack()}
          >
            <span className="lnr lnr-arrow-left" />
          </Button>
        </div>

        <div className="services__footer">
          <Button
            block
            onClick={this.nextStep}
            color="warning"
            loading={loading}
          >
            next step
          </Button>
        </div>
      </div>
    );
  }
}

export default withRouter(SelectOrigin);
