import React, { Component } from "react";
import { compose } from "redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom"
import { connect } from "react-redux";

import { withStyles } from "@material-ui/styles";

import List from "./List";
import Task from "./Task";
import TaskDetail from "./TaskDetail";


const styles = (theme => ({
  root: {
    display: "flex", 
    direction: "column",
    
  },
  list: {
    flex: "0", 
  }, 
  task: {
    flex: "4", 
    
  }, 
  detail: {
    flex: "1", 
  }

}));

class Main extends Component {

  constructor(props) {
      super(props);
      
  }

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
    const { classes } = this.props;

    return (
      <div className={classes.root}>
          <div className={classes.list} >
            <List/>
          </div>
          <div className={classes.task}>
            <Task/>
          </div>
          <div className={classes.detail}>
            <TaskDetail/>
          </div>
      </div>
    )
  }
};

Main.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired, 
    listExpanded: PropTypes.bool.isRequired, 
    detailExpanded: PropTypes.bool.isRequired, 
    classes:PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated, 
//    listExpanded: state.main.listExpanded, 
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