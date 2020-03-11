import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./scss/main.scss"
import {BrowserRouter as Router} from 'react-router-dom';

import add from './fontAwesomeConfig';
add();
ReactDOM.render(<Router><App/></Router>, document.getElementById('root'));
