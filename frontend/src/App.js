import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./containers/first";
import Register from "./containers/register";
import Login from "./containers/login";
import Main from "./containers/main";
import store from "./store";


class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route path="/app" component={Main}>
            </Route>
        </Router>
      </Provider>
    );
  }
};
export default App;