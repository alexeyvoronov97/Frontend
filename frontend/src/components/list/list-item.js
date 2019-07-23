import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { compose } from 'redux';
import { PropTypes } from 'prop-types';
import { FaPencilAlt } from 'react-icons/fa';

const styles = theme => ({
  root: {
    height: "38px",
    zIndex: "15",
    position: "relative",
    listStyle: "none", 
  },
  body: {
    cursor: "pointer", 
    alignItems: "center",
    paddingRight: "8px",
    paddingLeft: "8px",
    display: "flex",
    webkitBoxAlign: "center",
    userSelect: "none",
    boxSizing: "border-box",
    height: "38px",
    color: "#1c1c1c",
  },
  title: {
    fontSize: "15px",
    fontWeight: "400",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: "#262626",
    webkitBoxFlex: "1",
    flex: "1",
    paddingLeft: "6px",
    paddingRight: "6px",
  }, 
  overdueCount: {
    fontSize: "12px",
    color: "#d74e48",
    fontWeight: "bold",
    background: "rgba(215,78,72,0.1)",
    padding: "2px 6px",
    marginLeft: "4px",
    marginRight: "4px",
    borderRadius: "12px",
  },
  count: {
    color: "#bdbcbb",
    fontSize: "12px",
    paddingLeft: "4px",
    paddingRight: "4px",
  },
  option:{
    opacity: ".6",
    height: "20px",
    width: "20px",
    paddingLeft: "4px",
    paddingRight: "4px",
  },
});

class ListItem extends Component {
  render() {
    const { classes, onClick, icon, text } = this.props;

    return (
      <li onClick={onClick} className={classes.root}>
        <div className={classes.body}>
          {icon}
          <span className={classes.title}> {text} </span>
          <span className={classes.overdueCount}>1</span>
          <span className={classes.count}>1</span>
          <FaPencilAlt className={classes.option}/>
        </div>
      </li>
    );
  }
}
ListItem.propTypes = {
  classes: PropTypes.object.isRequired, 
  onClick: PropTypes.func.isRequired, 
  icon: PropTypes.string.isRequired, 
  text: PropTypes.string.isRequired, 
}

export default compose(
  withStyles(styles), 
)(ListItem);