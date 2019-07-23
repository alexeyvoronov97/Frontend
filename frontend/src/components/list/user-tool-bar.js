import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  root: {
    height: "45px", 
    display: "flex",
    boxAlign: "center",
    alignItems: "center",
    paddingTop: "2px",
    paddingBottom: "4px",
  }, 
  user: {
    height: "45px",
    display: "flex",
    webkitBoxAlign: "center",
    webkitBoxFlex: "1",
    flex: "1",
    overflow: "hidden",
    alignItems: "center",
  }, 
  userAvatar: {
    paddingLeft: "5px",
    paddingRight: "5px",
  }, 
  avatarIcon: {
    width: "32px",
    height: "32px",
    background: "indianred", 
    fontSize: "15px", 
  }, 
  userName: {
    paddingLeft: "5px",
    paddingRight: "5px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    fontSize: "15px",
    lineHeight: "32px",
    color: "#262626",
  }, 
  userArrow: {
    height: "20px",
    width: "20px",
  }, 
  icon: {
    marginLeft: "20px",
  }, 
  streamCounts: {
    display: "flex",
    marginTop: "3px",
    flexShrink: "0",
  }, 
  count: {
    position: "relative",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  svg: {
    fill: "#737272", 
  },
  countHidden: {
    position: "absolute",
    top: "-8px",
    right: "6px",
    background: "#d74e48",
    color: "#fff",
    fontSize: "10px",
    lineHeight: "10px",
    borderRadius: "20px",
    padding: "2px 2px 3px 2px",
    textAlign: "center",
    minWidth: "11px",
    //display: "none !important", 
  }, 
}));

export default (props) => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <a className={classes.user} role="button">
        <span className={classes.userAvatar}>
          <Avatar className={classes.avatarIcon}>T</Avatar>
        </span>
        <span className={classes.userName}>Tony</span>
        <span className={classes.useArrow}><svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" style={{fillRule: "evenodd"}, {clipRule: "evenodd"}, {strokeLinejoin: "round"}, {strokeMiterlimit:"1.41421"}}> <g> <path d="M10.502,13c-0.132,0 -0.26,-0.053 -0.354,-0.146l-4.002,-4c-0.195,-0.195 -0.195,-0.512 0,-0.708c0.195,-0.195 0.512,-0.195 0.707,0l3.649,3.647l3.644,-3.647c0.195,-0.195 0.512,-0.195 0.707,0c0.195,0.195 0.195,0.512 0,0.708l-3.997,4c-0.094,0.093 -0.221,0.146 -0.354,0.146"/></g> </svg> </span>
      </a>
      <div className={classes.streamCounts}>
        <a className={classes.count} title="Activities">
          <svg className={classes.svg} width="20px" height="20px" viewBox="0 0 20 20"> <g stroke="none" strokeWidth="1" fillRule="evenodd"> <g id="bell"> <path d="M15.2,10.14 C14.74,9.6 14.46,8.92 14.4,8.2 L14.28,6.94 C14.14,5.08 12.76,3.54 11,3.12 L11,3 C11,2.44 10.56,2 10,2 C9.44,2 9,2.44 9,3 L9,3.12 C7.24,3.54 5.86,5.08 5.72,6.94 L5.6,8.2 C5.54,8.92 5.28,9.6 4.8,10.16 L4.04,11.06 C3.38,11.88 3,12.9 3,13.94 L3,14.5 C3,14.78 3.22,15 3.5,15 L16.5,15 C16.78,15 17,14.78 17,14.5 L17,13.94 C17,12.9 16.62,11.88 15.96,11.06 L15.2,10.14 Z M16,14 L4,14 L4,13.94 C4,13.14 4.28,12.34 4.82,11.7 L5.58,10.8 C6.18,10.08 6.52,9.2 6.6,8.28 L6.7,7.02 C6.84,5.34 8.3,4 10,4 C11.7,4 13.16,5.34 13.3,7.02 L13.4,8.28 C13.48,9.2 13.84,10.08 14.42,10.8 L15.18,11.7 C15.72,12.34 16,13.14 16,13.94 L16,14 Z M12.3,16.1 C12.08,15.94 11.76,15.98 11.58,16.2 C10.82,17.22 9.18,17.22 8.4,16.2 C8.24,15.98 7.92,15.94 7.7,16.1 C7.48,16.26 7.44,16.58 7.62,16.8 C8.18,17.56 9.06,18 10,18 C10.94,18 11.82,17.56 12.38,16.8 C12.56,16.58 12.52,16.26 12.3,16.1 L12.3,16.1 Z" id="m"></path> </g> </g> </svg> 
          <span className={classes.countHidden}>0</span> </a>
          {/* From here You have to develop */}
        <a className={classes.count} title="Conversations" >
          <svg className={classes.svg} width="20px" height="20px" viewBox="0 0 20 20"> <g stroke="none" strokeWidth="1" fillRule="evenodd"> <g id="conversations"> <path d="M3.46,18 C3.28,17.98 3.1,17.86 3.04,17.68 C2.96,17.5 3,17.3 3.12,17.16 C4.1,16.08 4.3,14.12 3.54,13.12 C3.18,12.64 2.72,12 2.42,11.26 C2.14,10.52 2,9.76 2,9 C2,5.14 5.58,2 10,2 C14.42,2 18,5.14 18,9 C18,12.82 14.46,15.96 10.08,16 L10,16 C8.7,16 7.42,15.72 6.28,15.2 C6.02,15.08 5.92,14.78 6.04,14.54 C6.14,14.28 6.44,14.18 6.7,14.28 C7.68,14.74 8.8,14.98 9.92,15 L10,15 C13.86,15 17,12.3 17,9 C17,5.68 13.86,3 10,3 C6.14,3 3,5.68 3,9 C3,9.64 3.12,10.28 3.36,10.88 C3.6,11.52 4,12.08 4.34,12.52 C5.2,13.64 5.22,15.52 4.48,16.96 C5.2,16.84 5.92,16.56 6.52,16.1 C6.74,15.94 7.06,15.98 7.22,16.2 C7.38,16.42 7.34,16.74 7.12,16.9 C6.16,17.62 5,18 3.82,18 L3.46,18 Z" id="I"></path> </g> </g> </svg> 
          <span className={classes.countHidden}>0</span> 
        </a>
      </div>
    </div>
  );
};