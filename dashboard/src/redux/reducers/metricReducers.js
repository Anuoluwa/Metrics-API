/* eslint-disable import/no-anonymous-default-export */
import { 
    ADD_METRIC_FAIL,
    ADD_METRIC_SUCCESS,
    LOADING_METRIC_START,  
    LOAD_METRIC_FAIL, 
    LOAD_METRIC_SUCCESS, 
    LOADING_AVERAGE_METRIC_START,
    LOAD_AVERAGE_METRIC_SUCCESS,
    LOAD_AVERAGE_METRIC_FAIL
} from "../actions/actionTypes";


const initial_state = {
    metrics:[],
    average_metrics: [],
    isLoading:false
}
export default function(state=initial_state, action){
    switch (action.type) {
        case LOADING_METRIC_START:
        case LOADING_AVERAGE_METRIC_START:
            return{
                ...state,
                isLoading:true,
            }
        case LOAD_METRIC_SUCCESS:
            return{
                ...state,
                isLoading:false,
                metrics:action.payload.body,
            }
        case LOAD_AVERAGE_METRIC_SUCCESS:
            return{
                    ...state,
                    isLoading:false,
                    average_metrics:action.payload.body,
            }
        case LOAD_METRIC_FAIL:
        case ADD_METRIC_SUCCESS:
        case ADD_METRIC_FAIL:
        case LOAD_AVERAGE_METRIC_FAIL:
            return{
                ...state,
                isLoading:false
            }
        default:
            return state
    }
}