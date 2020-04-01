import { ActionTypes as types } from "../constants/actionTypes";
import initialState from "./initialState";

function actionTypeEndsInsucess(actionType) {
    return actionType.substring(actionType.length - 8) === "_SUCCESS";
}


function apiStatusReducer(state = initialState.apiCallsInProgress, action) {
    if(action.type === types.BEGIN_API_CALL) {
        return state + 1;
    } else if(action.type === types.API_CALL_ERROR || actionTypeEndsInsucess(action.type)){
        return state - 1;
    } 
    return state;
}

export default apiStatusReducer;