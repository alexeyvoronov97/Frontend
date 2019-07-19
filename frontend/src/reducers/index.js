import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import authReducer from "./auth";
import errorReducer from "./error";

export default combineReducers( {
    auth: authReducer,
    error: errorReducer,
    form: reduxFormReducer
} );