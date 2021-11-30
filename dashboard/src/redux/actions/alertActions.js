import { toast } from "react-toastify";

import { 
    ALERT_SUCCESS,
    ALERT_ERROR 
} from "./actionTypes";


// Display Success Alert;

export const returnSuccess = (message) => (dispatch) => {
    dispatch({
        type:ALERT_SUCCESS,
        payload:message
    })
    toast.success(message);
}

export const returnError = (message) => (dispatch) => {
    dispatch({
        type:ALERT_ERROR,
        payload:message
    })
    toast.error(message);
}