import React, { Component } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";
import Modal from "react-modal";
import { withRouter, Route } from "react-router-dom"

import { withStyles } from '@material-ui/core/styles';

import { FaInbox, FaCalendarDay, FaCalendarWeek, FaList, FaPlus, FaRegStar } from 'react-icons/fa';

import { getLists, setCurList } from "../actions/list";
import { getTasks  } from "../actions/task";
import SearchToolBar from "../components/list/search-tool-bar";
import UserToolBar from "../components/list/user-tool-bar";
import ListItem from "../components/list/list-item";
import CreateListPopup from "../components/list/create-list-popup";



const styles = (theme => ({
  listRoot: {
    display: "flex", 
    flexDirection: "column",
    height: "100vh",
  },
  listsScroll: {
    overflow: "scroll",
    flex: "1",
    display: "flex",
    flexDirection: "column",
    webkitBoxFlex: "1",
    webkitBoxOrient: "vertical",
  }, 
  foot: {
    display: "flex", 
    borderTop: "1px solid rgba(0,0,0,0.1)",
    background: "#f7f7f7",
    height: "42px",
    webkitBoxAlign: "center",
    alignItems: "center",
    fontSize: "15px",
    color: "#328ad6",
    fill: "#328ad6",
    cursor: "pointer",
  }, 
  button: {
    cursor: "pointer",
    fontSize: "x-large", 
    border: "inherit", 
    outline: "none", 
    width: "100%", 
    textAlign: "initial", 
  }, 
  icon: {
    height: "20px",
    width: "20px",
    paddingLeft: "3px",
    paddingRight: "3px",
    textAlign: "center",
  }, 
  createIcon: {
    height: "20px",
    paddingLeft: "10px",
    paddingRight: "10px",
    cursor: "pointer", 
  },
  popup: {
    display: "flex",
    paddingTop: "80px",
    paddingBottom: "80px",
    top:"80px",
  },
  popupInner: {
    margin: "auto",
  }
}));

class List extends Component {

    constructor(props) {
      super(props);
      this.state={
        modalOpen: false, 
      }
    }

    componentDidMount() {
      this.props.getLists();
      Modal.setAppElement('body');
    }

    onClickListItem = (value) => {
      this.props.setCurList({
        _id: value._id, 
        name: value.name,
      });
      this.props.getTasks(value._id);
      this.props.history.push(`/app/list/${value._id}`);
      
    };

    onClickFilterItem = (filter) => {
      let filterUpper = filter;
      filterUpper = filterUpper[0].toUpperCase() + filterUpper.substr(1);
      this.props.setCurList( {
        _id: filter, 
        name: filterUpper, 
      });
      this.props.getTasks(filter);
      this.props.history.push(`/app/list/${filter}`);
    }

    onOpenModal = () => {
      this.setState({"modalOpen": true});
    }
    onCloseModal = () => {
      this.setState({"modalOpen": false});
    }

    render() {

      const { classes, list } = this.props;
      const { listArray } = list;


      return (
        <div className={ classes.listRoot } id="ListDiv">
              <SearchToolBar/>
              <UserToolBar/>
          <div className={ classes.listsScroll }>
            <ListItem icon={<FaInbox className={classes.icon} color="#2b8dec"/>} text="Inbox"/>
            <ListItem icon={<FaRegStar className={classes.icon} color="#db4c3f"/>} text="Starred" onClick={this.onClickFilterItem.bind(this, 'starred')}/>
            <ListItem icon={<FaCalendarDay className={classes.icon} color="#5fa004"/>} text="Today" onClick={this.onClickFilterItem.bind(this, 'today')}/>
            <ListItem icon={<FaCalendarWeek className={classes.icon} color="#e29600"/>} text="Week" onClick={this.onClickFilterItem.bind(this, 'week')}/>
            {
              listArray.map((value, index) => <ListItem icon={<FaList className={classes.icon} color="#1c1c1c"/>} text={value.name} key={`list_my_item_${index}`} onClick={this.onClickListItem.bind(this, value) }/> )
            }
          </div>
          
          <div className={ classes.foot }>
            <FaPlus className={ classes.createIcon }/>
            <span onClick={this.onOpenModal}> Create a list </span>
          </div>

          <Modal isOpen={this.state.modalOpen} onRequestClose={this.onCloseModal} className={classes.popup}>
            <div className={classes.popupInner}>
              <CreateListPopup close={this.onCloseModal}/>
            </div>
          </Modal>

        </div>
      );
    }
};
List.propTypes = {
  classes: PropTypes.object.isRequired, 
  list: PropTypes.object.isRequired, 
  getLists: PropTypes.func.isRequired, 
  setCurList: PropTypes.func.isRequired, 
  getTasks: PropTypes.func.isRequired, 
};
// List.displayName = 'List Component';

const mapStateToProps = state => ({
  list: state.list, 
});

const mapDispatchToProps = dispatch => ({
  getLists: () => dispatch(getLists()), 
  setCurList: listData => dispatch(setCurList(listData)), 
  getTasks: listId => dispatch(getTasks(listId)),
});

export default compose(
    withStyles(styles), 
    withRouter,
    connect(
        mapStateToProps, 
        mapDispatchToProps
    )
)(List);