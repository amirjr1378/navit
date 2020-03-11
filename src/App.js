import React from 'react';
import SignUp from './pages/SignUp';
import Splash from './pages/Splash';
import {Link, Switch, Route} from "react-router-dom";

const Navigation = () =>(
        <ul style={{padding: 40}}>
          <li style={{margin: 20, borderBottom: '1px solid black'}}><Link to="/signup">signup</Link></li>
          <li style={{margin: 20, borderBottom: '1px solid black'}}><Link to="/splash">splash</Link></li>
        </ul>
)
function App(props) {
    return (
      <Switch>
        <Route path="/" exact component={Navigation} />
        <Route path="/signup" component={SignUp} />
        <Route path="/splash" component={Splash} />
      </Switch>
    )
}

export default App;
