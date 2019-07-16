import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper purple lighten-2">
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s8 brand-logo center black-text"
            >
              <i className="material-icons">event_note</i>
              You can manage your to-dos.
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;