import {
    ALERT_SUCCESS,
    ALERT_ERROR
 } from '../actions/actionTypes'
 

 const initialState = {
    successAlert:null,
    errorAlert:null
}

export default function(state = initialState, action){
    switch(action.type){
        case ALERT_SUCCESS:
            return {
                ...state,
                successAlert:action.payload
            }
        case ALERT_ERROR:
            return {
                ...state,
                errorAlert:action.payload.error,
                
            }
           
        default:
            return state;
    }
}