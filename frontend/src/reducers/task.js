
import { isEmpty } from "../utils/validator";

const initialState = {
    taskArray: [], 
    curTaskId: undefined, 
}

export default (state = initialState, action) => {

    switch(action.type) {

        case "GET_TASKS_PENDING":
            console.log("GET_TASKS_PENDING");
            return state;
        case "GET_TASKS_FULFILLED":
            console.log("GET_TASKS_FULFILLED:", action.payload.data);
            return {
                ...state, 
                taskArray: action.payload.data
            };
        case "GET_TASKS_REJECTED":
            console.log("GET_TASKS_REJECTED");
            return {
                ...state, 
                taskArray: []
            };

        case "ADD_TASK_PENDING":
            console.log("ADD_TASK_PENDING");
            return state;
        case "ADD_TASK_FULFILLED":
            console.log("ADD_TASK_FULFILLED:", action.payload.data);
            if(isEmpty(action.payload.data))
                return state;
            let newState = { ...state };
            newState.taskArray.push(action.payload.data);
            return {
                ...newState, 
            }
        case "ADD_TASK_REJECTED":
            console.log("ADD_TASK_REJECTED");
            return state;

        case "UPDATE_TASK_PENDING":
            console.log("UPDATE_TASK_PENDING");
            return state;
        case "UPDATE_TASK_FULFILLED":
            console.log("UPDATE_TASK_FULFILLED:", action.payload.data);
            return state;
        case "UPDATE_TASK_REJECTED":
            console.log("UPDATE_TASK_REJECTED", action.payload.data);
            return state;

        case "SET_CUR_TASK_ID":
            console.log("SET_CUR_TASK_ID", action.payload);
            return {
                ...state, 
                curTaskId: action.payload
            };

        default:
            return state;
    }
}