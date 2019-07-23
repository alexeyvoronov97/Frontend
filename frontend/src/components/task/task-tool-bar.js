import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FaShareAlt, FaSortAlphaDown, FaEllipsisH } from 'react-icons/fa';

const useStyles = makeStyles( theme => ({
    root: {
      background: "#668964", 
      position: "relative",
      height: "45px",
      minHeight: "45px",
      display: "flex",
    }, 
    title: {
      flex: "1",
      fontSize: "20px",
      color: "#fff",
      padding: "10px 14px",
      fontWeight: 200,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      margin: "0", 
    },
    actionBar: {
      padding: "0", 
      filter: "none", 
      boxSizing: "border-box",
    },
    actionBarBottom: {
      textAlign: "center",
      fontSize: "0",
      paddingTop: "0",
      height: "45px",
    }, 
    actionTab: {
      cursor: "pointer",
      display: "inline-block",
      minWidth: "40px",
      padding: "6px",
    },
    actionIcon: {
      fill: "#fff",
      width: "20px",
      height: "20px",
    }, 
    tabText: {
      fontSize: "10px",
      color: "#fff",
      display: "block",
      textAlign: "center",
    },
}));

export default (props) => {
  
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <h1 className={classes.title}>
          {props.text}
        </h1>
        <div className={classes.actionBar}>
          <div className={classes.actionBarBottom}>
            <div className={classes.actionTab}>
              <FaShareAlt className={classes.actionIcon}/>
              <span className={classes.tabText}>
                Share
              </span>
            </div>
            <div className={classes.actionTab}>
              <FaSortAlphaDown className={classes.actionIcon}/>
              <span className={classes.tabText}>
                Share
              </span>
            </div>
            <div className={classes.actionTab}>
              <FaEllipsisH className={classes.actionIcon}/>
              <span className={classes.tabText}>
                Share
              </span>
            </div>
          </div>
        </div>
      </div>
    );
}