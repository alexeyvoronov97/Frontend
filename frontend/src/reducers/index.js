import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import authReducer from "./auth";
import errorReducer from "./error";
import listReducer from "./list";
import taskReducer from "./task";

export default combineReducers( {
    
    auth: authReducer,
    error: errorReducer,
    list: listReducer, 
    task: taskReducer, 
    form: reduxFormReducer          // this reducer is for updating fields by reduxForm() in 'reducers/auth.js'

} );