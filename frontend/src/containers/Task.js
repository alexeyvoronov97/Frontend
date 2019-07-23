import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import { FaPlus } from 'react-icons/fa';

import TaskToolBar from "../components/task/task-tool-bar";
import TaskItemList from "../components/task/task-item-list";
import { addTask } from "../actions/task";

const styles = theme => ({
  root: {
    display: "flex", 
    flexDirection: "column", 
    height: "100vh", 
    padding: "0", 
    margin: "0", 
    background: "none", 
  }, 
  scroll: {
    overflowY: "auto",
    overflowX: "hidden",
    marginRight: "7px",
    marginLeft: "7px",
    paddingLeft: "7px",
    paddingRight: "7px",
    flex: "1",
  }, 
  addTask: {
    background: "rgba(102,137,100,0.75)",
    overflow: "hidden",
    position: "relative",
    margin: "14px 0",
    padding: "0 12px",
    borderRadius: "3px",
  }, 
  plusIconWrapper: {
    left: "10px",
    top: "14px",   
    width: "20px",
    height: "20px",
    position: "absolute",
    cursor: "pointer",
  },
  plusIcon: {
    fill: "#fff",
    width: "20px", 
    height: "20px", 
  }, 
  input: {
    color: "#fff",
    paddingLeft: "28px",
    fontSize: "16px",
    padding: "13px 60px 14px 0",
    border: "none",
    background: "none", 
  },
  
});


class Task extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputName: ""
    }
  }

  onChange = (event) => {
    this.setState({"inputName": event.target.value});
  }
  onEnter = (event, id) => {
    console.log(id);
    if(event.key === 'Enter' && id != 'inbox' && id != 'today' && id != 'week' && id != 'starred') {
      this.props.addTask({listId: id, taskName: this.state.inputName});
      this.setState({"inputName": ""});
    }
  }

  render() {

    const { inputName } = this.state;
    const { classes, task, list } = this.props;
    const { curList } = list;
    const { taskArray } = task;
    
    console.log("task::render()", taskArray.length);

    return (
      <div className={classes.root}>
        <TaskToolBar text={curList.name}/>
        <div className={classes.scroll}>
          <div className={classes.addTask}>
            <div className={classes.plusIconWrapper}>
              <FaPlus className={classes.plusIcon}/>
            </div>
            <input className={classes.input} placeholder="Add a to-do..." value={inputName} onChange={this.onChange}
                  onKeyPress={event => ( this.onEnter(event, curList._id) )}/>
          </div>
          <TaskItemList/>
        </div>
      </div>
    );
  }
};

Task.propTypes = {
  classes: PropTypes.object.isRequired, 
  list: PropTypes.object.isRequired, 
  task: PropTypes.object.isRequired, 
  addTask: PropTypes.func.isRequired, 
};

const mapStateToProps = state => ({
  list: state.list, 
  task: state.task, 
});

const mapDispatchToProps = dispatch => ({
  addTask: taskData => dispatch(addTask(taskData))
});

export default compose(
    withStyles(styles), 
    connect(
        mapStateToProps, 
        mapDispatchToProps
    )
)(Task);