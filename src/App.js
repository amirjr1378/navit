import React from "react";
import Splash from "./pages/Splash";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import Auth from "./containers/Auth";
import Menu from "./pages/Menu";
import UserProfile from "./pages/UserProfile";
import TravelList from "./pages/TravelList";
import Faq from "./pages/Faq/Faq";

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
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
