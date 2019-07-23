import axios from "axios";
import { apiURL } from "../config";

export const getLists = () => ( {
    type: "GET_LISTS", 
    payload: axios.get(apiURL("/list/"))
} );

export const createList = (listName) => ( { 
    type: "CREATE_LIST",
    payload: axios.post(apiURL("/list/new"), {listName: listName})
} );

export const setCurList = listData => ({
    type: "SET_CUR_LIST", 
    payload: listData
});