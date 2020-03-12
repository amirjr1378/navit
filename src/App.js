import React from 'react';
import Splash from './pages/Splash';
import {Link, Switch, Route} from "react-router-dom";
import Auth from './containers/Auth';


const Navigation = () =>(
        <ul style={{padding: 40}}>
          <li style={{margin: 20, borderBottom: '1px solid black'}}><Link to="/splash">splash</Link></li>
          <li style={{margin: 20, borderBottom: '1px solid black'}}><Link to="/auth/register">register</Link></li>
          <li style={{margin: 20, borderBottom: '1px solid black'}}><Link to="/auth/login">login</Link></li>
        </ul>
)
function App(props) {
    return (
      <Switch>
        <Route path="/" exact component={Navigation} />
        <Route path="/splash" component={Splash} />
        <Route path="/auth" component={Auth} />
      </Switch>
    )
}

export default App;
