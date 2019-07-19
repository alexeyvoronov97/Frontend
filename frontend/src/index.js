import React from 'react';
import ReactDOM from 'react-dom';
import jwt_decode from "jwt-decode";
import axios from "axios";

import store from "./store";
import { setCurrentUser } from "./actions/auth";
import { isEmpty } from "./utils/validator";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// recover last login
if(!isEmpty(localStorage.jwtToken)) {
    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded));
}

axios.interceptors.request.use(function(config) {
    const token = localStorage.jwtToken;
  
    if ( !isEmpty(localStorage.jwtToken) ) {
        config.headers.Authorization = `Bearer ${token}`;
    }
  
    return config;
  }, function(err) {
    return Promise.reject(err);
  });

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


serviceWorker.unregister();
