import React, { Component } from "react";
import { compose } from "redux";
import PropTypes from "prop-types";
import { withRouter, Route } from "react-router-dom"
import { connect } from "react-redux";

import { withStyles } from "@material-ui/styles";

import List from "./list";
import Task from "./task";
import TaskDetail from "../components/task/task-detail";
import backgroundImage from "../components/06.jpg";


const styles = (theme => ({
  root: {
    display: "flex", 
    direction: "column",
    overflow: "hidden", 
    height: "100vh", 
    willChange: "width", 
    padding: "0", 
    margin: "0", 
    textDecoration: "none",
    userSelect: "none", 
    textRendering: "optimizeLegibility", 
    color: "#262626", 
    fontSize: "14px", 
    fontWeight: "500", 
  },
  reminder: {
    background: "none",
    overflow: "visible",
    paddingTop: "20px",
    paddingBottom: "20px",
    pointerEvents: "none",
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: "1099",
  }, 
  list: {
    overflow: "hidden", 
    width: "280px",
    backgroundColor: "#f7f7f7",
    zIndex: "3",
  }, 
  task: {
    flex: "4", 
    backgroundImage: `url(${backgroundImage})`, 
    backgroundSize: "cover", 
  }, 
  detail: {
    width: "367px", 
    overflow: "hidden",
  }

}));

class Main extends Component {

  componentDidMount() {
      if(!this.props.isAuthenticated) {
          this.props.history.push('/login');
      }

  }

  componentDidUpdate() {
      if(!this.props.isAuthenticated) {
          this.props.history.push('/login');
      }
  }

  render() {
    const { classes, match } = this.props;

    return (
      <div className={classes.root} id="mainComponent">
          <div className={classes.list} >
            <List history={this.props.history} />
          </div>
          <div className={classes.task}>
            <Route path={`${match.url}/list/:listId`} component={ Task }/>
          </div>
          {/* <div className={classes.detail}> */}
            {/* <TaskDetail/> */}
          {/* </div> */}

      </div>
    )
  }
};

Main.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired, 
//    detailExpanded: PropTypes.bool.isRequired, 
    classes:PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated, 
//    detailExpanded: state.main.detailExpanded
});

export default compose(
    withStyles(styles), 
    withRouter, 
    connect(
         mapStateToProps, 
         null
    )
)(Main);