import { combineReducers } from "redux";
import metricReducers from "./metricReducers";



export default combineReducers({
   // supplier:supplierReducers,
   // auth:authReducers,
   metric:metricReducers,
})