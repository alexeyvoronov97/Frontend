import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";

import { FaRegCheckSquare, FaRegSquare, FaStar, FaRegStar } from 'react-icons/fa';
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import { withStyles } from "@material-ui/core/styles";
import TaskItem from "../task/task-item";

const styles = theme => ({
  root: {
    position: "relative",
    background: "#fff",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  }, 
  top: {
  }, 
  checkBox: {
    position: "absolute",
    left: "18px",
    top: "18px",
  }, 
  body: {
    flexGrow: "3", 
  },
  bottom: {
    flexGrow: "0", 
  }
});

class TaskDetail extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.top}>
          {/* <TaskItem/> */}
        </div>
        <div className={classes.body}>
          <ListItem button>
            <ListItemText primary={"Due"} />
          </ListItem>
          <ListItem button>
            <ListItemText primary={"Remind"} />
          </ListItem>
          <ListItem button>
            <ListItemText primary={"Add Subtask"} />
          </ListItem>
          <ListItem button>
            <ListItemText primary={"Add a note"} />
          </ListItem>
          <ListItem button>
            <ListItemText primary={"Add a file"} />
          </ListItem>
        </div>
        <div className={classes.bottom}>
        <ListItem>
          <ListItemText primary={"Add a comment"} />
        </ListItem>
        <ListItem>
          <ListItemText primary={"Created on 2019/7/19"} />
        </ListItem>
        </div>
      </div>
    );
  }
};

TaskDetail.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({

});

export default compose(
    withStyles(styles), 
    connect(
        mapStateToProps, 
        null
    )
)(TaskDetail);