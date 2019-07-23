import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { createList } from "../../actions/list";
import { withStyles } from "@material-ui/core";
import { FaShareAlt } from 'react-icons/fa';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  wrapper: {
    background: "#fafafa",
    boxShadow: "0 1px 25px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.08)",
    borderRadius: "3px",
    width: "392px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    maxHeight: "100%",
    position: "relative",
  }, 
  header: {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden", 
    padding: "14px 14px 0",
    background: "#fff",
    borderRadius: "4px 4px 0 0",
    borderBottom: "1px solid #ebebeb",
    flexShrink: "0",
  }, 
  title: {
    textAlign: "center", 
    padding: "0", 
    margin: "0", 
  }, 
  input: {
    margin: "14px 0",
    fontSize: "15px", 
    fontWeight: "500", 
    padding: "9px 10px 10px", 
    border: "none", 
    width: "100%", 
    boxSizing: "border-box",
    borderRadius: "3px",
    boxShadow: "inset 0 0 0 1px #d6d6d6",
    color: "#262626",
    background: "#fff",
  }, 
  inputWrapper: {
    position: "relative", 
  }, 
  inputIcon: {
    position: "absolute",
    top: "24px",
    left: "5px",
  },
  members: {
    maxHeight: "300px",
    overflow: "auto",
    backgroundColor: "transparent", 
    padding: "0", 
    margin: "0", 
  },
  membersInner:{
    borderRadius: "0",
    padding: "0 14px",
    overflow: "auto",
    margin: "0", 
  },
  membersUl: {
    listStyle: "none",
    padding: "6px 0 6px 0",
    margin: "0", 
  },
  membersLi: {
    border: "none", 
    position: "relative",
    padding: "6px 0",
    boxSizing: "border-box",
    height: "44px",
    display: "flex",
    alignItems: "center",
    pointerEvents: "none",
    margin: "0", 
  }, 
  avatarIcon: {
    width: "32px",
    height: "32px",
    position: "relative", 
  },
  avatarInfo: {
    paddingLeft: "10px",
    paddingRight: "10px",
    webkitBoxFlex: "1",
    flex: "1",
  }, 
  avatarName: {
    fontWeight: "bold",
    display: "flex",
    webkitBoxAlign: "center",
    alignItems: "center",
    lineHeight: "16px",
    cursor: "default",
  },
  avatarNameLabel: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }, 
  avatarNameBadge: {
    whiteSpace: "nowrap",
    margin: "0 5px",
    flexShrink: "0",
  }, 
  badge: {
    margin: "0",
    borderColor: "#328ad6",
    color: "#1f7bcc",
    display: "inline-block",
    borderRadius: "10px",
    padding: "2px 7px",
    fontSize: "8px",
    lineHeight: "8px",
    border: "1px solid transparent",
    textTransform: "uppercase",  
  }, 
  avatarEmail: {
    fontSize: "12px",
    color: "#737272",
    lineHeight: "16px",
    cursor: "default",
  }, 
  foot: {
    padding: "12px",
    borderTop: "1px solid #e0e0df"
  }, 
  footCols: {
    fontSize: "0",
    marginLeft: "-6px !important",
    marginRight: "-6px !important",
  }, 
  footCol: {
    verticalAlign: "middle",
    fontSize: "13px",
    display: "inline-block",
    boxSizing: "border-box",
    padding: "0 6px !important",
  }, 
  button: {
    boxSizing: "border-box",
    float: "none",
    textAlign: "center",
    width: "100%",
    display: "inline-block",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    margin: "0",
    position: "relative",
    cursor: "pointer",
    color: "#737272",
    fontWeight: "bold",
    fontSize: "13px",
    lineHeight: "13px",
    padding: "8px 12px",
    background: "#fafafa",
    boxShadow: "inset 0 0 0 1px #d6d6d6",
    border: "none",
    borderRadius: "3px",
    verticalAlign: "middle",
  },
  blue: {
    boxShadow: "inset 0 0 0 1px #328ad6",
    backgroundColor: "#328ad6",
    color: "#fff",
  }, 
  disabled: {
    opacity: ".5", 
  }, 
});

class CreateListPopup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listName: "", 
      disabled: true, 
    }
  }

  onChange = (event) => {
    let listName = event.target.value;
    this.setState({"listName": listName});
    this.setState({"disabled": listName === ""})
  }

  onSave = (close) => {
    if(!this.state.disabled) {
      this.props.createList(this.state.listName);
      close();
    }
  }
  render() {
    
    const { classes, close } = this.props;
    const { listName, disabled } = this.state;
    return (
      <div className={classes.wrapper}>

        <div className={classes.header}>
          <h3 className={classes.title}>Create New List</h3>
          <input className={classes.input} type="text" placeholder="List Name" maxLength="255" value={ listName } onChange={ this.onChange }/>
          <div className={classes.inputWrapper}>
            <FaShareAlt className={classes.inputIcon}/>
            <input className={classes.input} type="text" placeholder="Name or email address..." maxLength="255" style={{paddingLeft: "30px"}}/>
          </div>
        </div>

        <div className={classes.members}>
          <div className={classes.membersInner}>
            <ul className={classes.membersUl}>
              <li className={classes.membersLi}>
                <Avatar className={classes.avatarIcon}>T</Avatar>
                <div className={classes.avatarInfo}>
                  <div className={classes.avatarName}>
                    <span className={classes.avatarNameLabel}>Tony</span>
                    <div className={classes.avatarNameBadge}>
                      <span className={classes.badge}>owner</span>
                    </div>
                  </div>
                  <span className={classes.avatarEmail}>TonyYou1015@gmail.com</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className={classes.foot}>
          <div className={classes.footCols}>
            <div className={classes.footCol} style={{width:"40%"}}/>
            <div className={classes.footCol} style={{width:"30%"}}>
              <button className={classes.button} onClick={ close }>Cancel</button>
            </div>
            <div className={classes.footCol} style={{width:"30%"}}>
              <button className={`${classes.button} ${classes.blue} ${disabled && classes.disabled}`} 
                      onClick={ this.onSave.bind(this, close) }>Save</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
CreateListPopup.propTypes = {
  classes: PropTypes.object.isRequired, 
  createList: PropTypes.func.isRequired, 
}

const mapDispatchToProps = dispatch => ({
  createList: (listName) => dispatch(createList(listName))
});

export default compose(
  withStyles(styles), 
  connect(
    null, 
    mapDispatchToProps
  )
)(CreateListPopup);