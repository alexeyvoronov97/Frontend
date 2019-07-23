import { isEmpty } from "../utils/validator";

const initialState = {
    listArray: [],
    curList: {
        _id: "inbox", 
        name: "Inbox"
    }
};

export default (state = initialState, action) => {

    switch(action.type) {
        case "GET_LISTS_PENDING":
            console.log("GET_LISTS_PENDING")
            return state;
        case "GET_LISTS_FULFILLED":
            console.log("GET_LISTS_FULFILLED:", action.payload.data);
            return {
                ...state, 
                listArray: action.payload.data
            };
        case "GET_LISTS_REJECTED":
            console.log("GET_LISTS_REJECTED");
            return state;


        case "CREATE_LIST_PENDING":
            console.log("CREATE_LIST_PENDING");
            return state;
        case "CREATE_LIST_FULFILLED":
            console.log("CREATE_LIST_FULFILLED:", action.payload.data);
            if(isEmpty(action.payload.data))
                return state;
            let newListArray = state.listArray;
            newListArray.push(action.payload.data);
            return {
                ...state, 
                listArray: newListArray
            };
        case "CREATE_LIST_REJECTED":
            console.log("CREATE_LIST_REJECTED");
            return state;

            
        case "SET_CUR_LIST":
            console.log("SET_CUR_LIST");
            return {
                ...state, 
                curList: {
                    _id: action.payload._id, 
                    name: action.payload.name
                }
            };
        default:
            return state;
    }
}