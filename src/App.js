import React from "react";
import Splash from "./pages/Splash";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import Auth from "./containers/Auth";
import Menu from "./pages/Menu";
import UserProfile from "./pages/UserProfile";
import TravelList from "./pages/TravelList";
import Faq from "./pages/Faq/Faq";
import Settings from "./pages/Settings/Settings";
import AboutUs from "./pages/AboutUs";
// css for map box
// import "mapbox-gl/dist/mapbox-gl.css";
// import { setRTLTextPlugin } from "react-map-gl";

import ServicesSelected from "./pages/ServicesSelected";
import OrderTaxi from "./pages/OrderTaxi";

// to make map box rtl version readable
// setRTLTextPlugin(
//   "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js",
//   null,
//   true
// );

const Navigation = () => (
  <ul style={{ padding: 40 }}>
    <li style={{ margin: 20, borderBottom: "1px solid black" }}>
      <Link to="/splash">splash</Link>
    </li>
    <li style={{ margin: 20, borderBottom: "1px solid black" }}>
      <Link to="/auth/register">register</Link>
    </li>
    <li style={{ margin: 20, borderBottom: "1px solid black" }}>
      <Link to="/auth/login">login</Link>
    </li>
    <li style={{ margin: 20, borderBottom: "1px solid black" }}>
      <Link to="/menu">menu</Link>
    </li>
    <li style={{ margin: 20, borderBottom: "1px solid black" }}>
      <Link to="/user-profile">user profile</Link>
    </li>
    <li style={{ margin: 20, borderBottom: "1px solid black" }}>
      <Link to="/travel-list">travel list</Link>
    </li>
    <li style={{ margin: 20, borderBottom: "1px solid black" }}>
      <Link to="/faq">faq</Link>
    </li>
    <li style={{ margin: 20, borderBottom: "1px solid black" }}>
      <Link to="/settings">settings</Link>
    </li>
    <li style={{ margin: 20, borderBottom: "1px solid black" }}>
      <Link to="/about-us">about us</Link>
    </li>
    <li style={{ margin: 20, borderBottom: "1px solid black" }}>
      <Link to="/services-selected">services-selected</Link>
    </li>
  </ul>
);
function App(props) {
  return (
    <Switch>
      <Route path="/" exact component={Navigation} />
      <Route path="/splash" component={Splash} />
      <Route path="/auth" component={Auth} />
      <Route path="/menu" component={Menu} />
      <Route path="/user-profile" component={UserProfile} />
      <Route path="/travel-list" component={TravelList} />
      <Route path="/faq" component={Faq} />
      <Route path="/settings" component={Settings} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/services-selected" exact component={ServicesSelected} />
      <Route path="/services-selected/taxi" exact component={OrderTaxi} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
