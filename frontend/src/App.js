import React, { Component } from 'react';
import Login from './component/login/Login';
//import logo from './logo.svg';
//import './App.css';


class App extends Component {
  render() {
    return (
      <div className = "App">
        <Login />
      </div>
    );
  }
}

/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button type="button" className="btn btn-primary">Primary</button>
        </header>
      </div>
    );
  }
}
*/
export default App;