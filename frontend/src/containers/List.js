import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { fade, withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AlarmIcon from '@material-ui/icons/Alarm';
import ChatIcon from '@material-ui/icons/Chat';
import InboxIcon from '@material-ui/icons/Inbox';
import TodayIcon from '@material-ui/icons/Today';
import WeekIcon from '@material-ui/icons/DateRange';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PlusIcon from "@material-ui/icons/NoteAdd";

const styles = (theme => ({
  root: {
    display: "flex", 
    flexDirection: "column", 
    height: "100vh", 
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 150,
    },
  },
  toolbar: {
    minHeight: "50px", 
    height: "50px", 
    paddingLeft: "15px",
    paddingRight: "10px", 
  }, 
  avatar: {
    background: "lightslategrey", 
    width: "35px", 
    height: "35px", 
  }, 
  avatarButton: {
    cursor: "pointer", 
    background: "inherit", 
    fontSize: "x-large",
    border: "inherit", 
    outline: "none", 
    paddingLeft: "15px", 
    paddingRight: "70px", 
  }, 
  icon: {
    marginLeft: "20px",
    cursor: "pointer", 
  }, 
  head: {
    height: "100px", 
  }, 
  body: {
    overflow: "scroll", 
    flexGrow: 1,
  }, 
  addButton: {
    cursor: "pointer",
    fontSize: "x-large", 
    border: "inherit", 
    outline: "none", 
    width: "100%", 
    textAlign: "initial", 
  }, 
  plusIcon: {
    margin: "10px", 
    marginRight: "0", 
  }, 
  foot: {
    display: "flex", 

  }
}));

function SearchAppBar(props) {
  const { classes } = props;

  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Open drawer"
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'Search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

function UserToolBar(props) {

  const { classes } = props;

  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar className={classes.toolbar}>
          <Avatar className={classes.avatar}>A</Avatar>
          <button className={classes.avatarButton}>Frank</button>
          <AlarmIcon fontSize="large" className={classes.icon}/>
          <ChatIcon fontSize="large" className={classes.icon}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}

function ListFilterItem(props) {
  const { icon, text } = props;

  return (
    <>
      <ListItem button>
        {icon}
        <ListItemText primary={text} />
      </ListItem>
    </>
  );
}


function ListItems(props) {

  const { classes } = props;

  return (
      <>
        <ListFilterItem icon={<InboxIcon fontSize="large"/>} text="Inbox"/>
        <ListFilterItem icon={<TodayIcon fontSize="large"/>} text="Today"/>
        <ListFilterItem icon={<WeekIcon fontSize="large"/>} text="Week"/>
        <ListFilterItem icon={<WeekIcon fontSize="large"/>} text="Week"/>
        <ListFilterItem icon={<WeekIcon fontSize="large"/>} text="Week"/>
        <ListFilterItem icon={<WeekIcon fontSize="large"/>} text="Week"/>
        <ListFilterItem icon={<WeekIcon fontSize="large"/>} text="Week"/>
        <ListFilterItem icon={<WeekIcon fontSize="large"/>} text="Week"/>
        <ListFilterItem icon={<WeekIcon fontSize="large"/>} text="Week"/>
        <ListFilterItem icon={<WeekIcon fontSize="large"/>} text="Week"/>
        <ListFilterItem icon={<WeekIcon fontSize="large"/>} text="Week"/>
        <ListFilterItem icon={<WeekIcon fontSize="large"/>} text="Week"/>
        <ListFilterItem icon={<WeekIcon fontSize="large"/>} text="Week"/>
        <ListFilterItem icon={<WeekIcon fontSize="large"/>} text="Week"/>
        <ListFilterItem icon={<WeekIcon fontSize="large"/>} text="Week"/>
        <ListFilterItem icon={<WeekIcon fontSize="large"/>} text="Week"/>
        <ListFilterItem icon={<WeekIcon fontSize="large"/>} text="Week"/>
        <ListFilterItem icon={<WeekIcon fontSize="large"/>} text="Week"/>
        <ListFilterItem icon={<WeekIcon fontSize="large"/>} text="Week"/>
      </>
  )
}


class List extends Component {
    render() {

      const { classes } = this.props;

      return (
        <div className={classes.root}>
          <div className={classes.head}>
              <SearchAppBar classes={ classes }/>
              <UserToolBar classes={ classes }/>
          </div>
          <div className={ classes.body }>
            <ListItems/>
          </div>
          <div className={ classes.foot }>
            <PlusIcon className={ classes.plusIcon }/>
            <button className={ classes.addButton }>
              Create a list
            </button>
          </div>
        </div>
      );
    }
};

List.propTypes = {
  classes: PropTypes.object.isRequired, 
};

const mapStateToProps = state => ({

});

export default compose(
    withStyles(styles), 
    connect(
        mapStateToProps, 
        null
    )
)(List);