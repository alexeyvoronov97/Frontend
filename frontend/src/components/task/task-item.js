import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { FaRegCheckSquare, FaRegSquare, FaStar, FaRegStar } from 'react-icons/fa';

const styles = (theme) => ({
  root: {
    height: "47px", 
    listStyle: "none", 
  },
  body: {
    background: "#fff",
    height: "46px",
    borderRadius: "3px",
    display: "flex",
    paddingLeft: "4px",
    paddingRight: "4px",
    webkitBoxAlign: "center",
    alignItems: "center",
    position: "relative",
  }, 
  checkBox: {
    paddingLeft: "8px",
    paddingRight: "8px",
    height: "20px",
    cursor: "pointer", 
  },
  title: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: "15px",
    fontWeight: "500",
    color: "#262626",
    cursor: "default",
    position: "relative",
    top: "-1px",
    webkitBoxFlex: "1",
    flex: "1",
  }, 
  icon: {
    width: "20px", 
    height: "20px", 
    cursor: "pointer",
  }, 
});

class TaskItem extends Component {

    render() {
      const { classes, taskData, onCheck, onStar, onDoubleClick } = this.props;

      return (
        <li className={classes.root} onDoubleClick={ onDoubleClick }>
          <div className={classes.body}>
            <div className={classes.checkBox} onClick={ onCheck }>
              {(!taskData.isDone && <FaRegSquare className={classes.icon}/>)}
              {(taskData.isDone && <FaRegCheckSquare className={classes.icon}/>)}
            </div>
            <div className={classes.title}>
              {taskData.name}
            </div>
            <div onClick = { onStar }>
              {(!taskData.isStarred && <FaRegStar className={classes.icon}/>)}
              {(taskData.isStarred && <FaStar className={classes.icon}/>)}
            </div>
          </div>
        </li>
      );
    }
}
TaskItem.propsTypes = {
  classes: PropTypes.object.isRequired, 
  taskData: PropTypes.object.isRequired, 
  onCheck: PropTypes.func.isRequired, 
  onStar: PropTypes.func.isRequired, 
  onDoubleClick: PropTypes.func,
}

export default compose(
  withStyles(styles), 
)(TaskItem);