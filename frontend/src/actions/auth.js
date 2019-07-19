import axios from 'axios';
import { wrap } from "../utils/promise";
import { apiURL } from "../config";

export const registerUser = userData => dispatch => (
    wrap(dispatch)({
        type: "AUTH_REQ", 
        payload: axios.post(apiURL("/user/register"), userData)
    })
);

export const loginUser = userData => dispatch => {
    return (
        wrap(dispatch)({
            type: "AUTH_REQ", 
            payload: axios.post(apiURL("/user/login"), userData)
        })
    );
}

export const setCurrentUser = decoded => ({
    type: "SET_CUR_USER", 
    payload: decoded
});

export const logoutUser = () => dispatch => {
    dispatch({
        type: "LOGOUT_USER"
    });
};