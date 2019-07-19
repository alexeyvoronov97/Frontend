import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import { withStyles } from "@material-ui/core/styles";
import PlusIcon from "@material-ui/icons/NoteAdd";

const styles = theme => ({
  root: {
    display: "flex", 
    flexDirection: "column", 
  }, 
  toolbar: {
    minHeight: "50px", 
    
  }, 
  bar: {
    
  }, 
  add: {
    display: "flex", 
  }, 
  icon: {
    margin: "13px", 
    marginRight: "0px", 
    width: "40px", 
    height: "40px", 
    cursor: "pointer", 
    background: "cadetblue", 
  }, 
  input: {
    margin: "13px", 
    marginLeft: "0px", 
    outline: "none", 
    fontSize: "x-large",
    width: "-webkit-fill-available", 
    background: "inherit", 
    border: "inherit", 
    background: "cadetblue", 
  },
  list: {

  }
});
function TaskAppBar(props) {
  
  const { classes } = props;

  return (
    <div>
    
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
        {props.text}
        </Toolbar>
      </AppBar>
    </div>
  );
}

class Task extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.task}>
          <TaskAppBar text="List Name" classes={classes}/>
        </div>
        <div className={classes.add}>
          <PlusIcon className={classes.icon}/>
          <input className={classes.input}>
          </input>
        </div>
        <div className={classes.list}>
          <ListItem button>
            <ListItemText primary={"task"} />
          </ListItem>
        </div>
      </div>
    );
  }
};

Task.propTypes = {
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
)(Task);