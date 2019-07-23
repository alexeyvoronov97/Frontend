import axios from 'axios';
import { apiURL } from '../config';

export const getTasks = listId => ({
    type: "GET_TASKS", 
    payload: axios.get(apiURL(`/list/${listId}`))
});

export const addTask = taskData => ({
    type: "ADD_TASK",
    payload: axios.post(apiURL('/task/new'), taskData)
})

export const updateTask = (taskId, updateData) => ({
    type: "UPDATE_TASK", 
    payload: axios.put(apiURL(`/task/${taskId}`), updateData)
})

export const setCurTaskId = taskId => ({
    type: "SET_CUR_TASK_ID", 
    payload: taskId
})