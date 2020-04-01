// Reducers specify how application changes happen!!
import { combineReducers } from "redux";

import recipes from "./recipesReducer";
import apiCallsInProgress from "./apiStatusReducer";

export default combineReducers({
  recipes,
  apiCallsInProgress
});
