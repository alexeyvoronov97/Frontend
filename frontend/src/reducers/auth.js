import jwt_decode from "jwt-decode";
import { isEmpty } from "../utils/validator";

const initialState = {
    isFetching: false, 
    isAuthenticated: false, 
    user: {}
};

export default (state = initialState, action) => {
    switch(action.type) {
        case "AUTH_REQ_PENDING":
            console.log("PENDING", action);
            return {
                ...state, 
                isFetching: true, 
                isAuthenticated: false, 
                user: {}
            };
        case "AUTH_REQ_FULFILLED":
            console.log("FULLFILLED", action);
            const { token } = action.payload.data;
            let user;

            if(!isEmpty(token)) {
                localStorage.setItem("jwtToken", token);
                user = jwt_decode(token);
            }

            return {
                ...state, 
                isFetching: false,
                isAuthenticated: !isEmpty(user), 
                user
            };
        case "AUTH_REQ_REJECTED":
            console.log("REJECTED", action);
            alert(action.payload);
            return {
                ...state, 
                isFetching: false, 
                isAuthenticated: false, 
                user: {}
            };
        case "SET_CUR_USER":
            return {
                ...state,
                isFetching: false,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        case "LOGOUT_USER":
            localStorage.removeItem("jwtToken");
            return {
                ...state, 
                isFetching: false, 
                isAuthenticated: false, 
                user: {}
            };

        default:
            return state;
    }
}