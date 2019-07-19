import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";


//this func is temporary

class Home extends Component {

  async componentDidMount() {
    if(!this.props.isAuthenticated) {
      return this.props.history.push("/login");
    }
  }

  componentDidUpdate() {
    if(!this.props.isAuthenticated) {
      return this.props.history.push("/login");
    }
  }
  render() {
    return (
          <div >
            <h1>
                This is homepage! Welcome!
            </h1>
            
            <br />
              <Link to="/register" >
                Register
              </Link>
              <br/>
              <Link to="/login">
                Log In
              </Link>
              <br/>
              <Link to="/main" >
                Main
              </Link>
              <br/>
              <a onClick={event => (localStorage.removeItem("jwtToken"))}>Log Out</a>
          
        </div>
    );
  }
}

Home.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps, 
  null
)(Home);