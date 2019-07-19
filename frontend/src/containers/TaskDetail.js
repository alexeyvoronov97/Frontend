import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";

import TextField from '@material-ui/core/TextField';
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    display: "flex", 
    flexDirection: "column", 
    height: "100%"
  }, 
  top: {
    flexGrow: "0",
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
          <ListItem>
            <ListItemText primary={"TaskDetail"} />
          </ListItem>
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