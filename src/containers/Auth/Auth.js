import React from 'react';
import {Route} from 'react-router-dom';
import SignUp from '../../pages/SignUp';
import Login from '../../pages/Login';
import ResetPass from '../../pages/ResetPass';
import "./Auth.styles.scss";

const Auth = () => (
  <div className="auth-container">
        <Route path="/auth/register" component={SignUp} />
        <Route path="/auth/login" component={Login} />
        <Route path="/auth/reset-password/:phone" component={ResetPass} />
  </div>
)
export default Auth;
