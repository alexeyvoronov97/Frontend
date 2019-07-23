import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { PropTypes } from 'prop-types';

import TaskItem from '../task/task-item';
import { updateTask, getTasks, setCurTaskId } from '../../actions/task';

const styles = theme => ({
    root: {
        color: "#262626",
        fontSize: "14px",
        fontWeight: "500",
    }, 
});

class TaskItemList extends Component{
    
    onCheck = async index => {
        const { taskArray } = this.props.task;
        const { _id, isDone } = taskArray[index];
        const { updateTask, getTasks } = this.props;
        
        await updateTask(_id, { isDone: !isDone });
        await getTasks(this.props.list.curList._id);
    }

    onStar = async index => {
        const { taskArray } = this.props.task;
        const { _id, isStarred } = taskArray[index];
        const { updateTask, getTasks } = this.props;

        await updateTask(_id, { isStarred: !isStarred });
        await getTasks(this.props.list.curList._id);
    }

    onDoubleClick = index => {
        this.props.setCurTaskId(index);
    }

    render() {
        const { task, classes } = this.props;
        const { taskArray } = task;

        return (
            <div className="root">
            {
                taskArray.map((value, index) => (!value.isDone && <TaskItem taskData={value} key={`task_item_${index}`} 
                                onCheck={this.onCheck.bind(this, index)} onStar={this.onStar.bind(this, index)} 
                                onDoubleClick={this.onDoubleClick.bind(this, index)} />))
            }
            </div>
        );
    }
}
TaskItemList.propTypes = {
    classes: PropTypes.object.isRequired, 
    task: PropTypes.object.isRequired, 
    list: PropTypes.object.isRequired, 
    updateTask: PropTypes.func.isRequired, 
    getTasks: PropTypes.func.isRequired, 
    setCurTaskId: PropTypes.func.isRequired, 
}

const mapStateToProps = state => ({
    task: state.task, 
    list: state.list, 
});

const mapDispatchToProps = dispatch => ({
    updateTask: (taskId, updateData) => (dispatch(updateTask(taskId, updateData))), 
    getTasks: (listId) => (dispatch(getTasks(listId))), 
    setCurTaskId: taskId => (dispatch(setCurTaskId(taskId))),
});

export default compose(
    withStyles(styles), 
    connect(
        mapStateToProps, 
        mapDispatchToProps
    ), 
)(TaskItemList);