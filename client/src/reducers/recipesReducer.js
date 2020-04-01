// Reducers take action and state and return result

import initialState from "./initialState";
import { ActionTypes as types } from "../constants/actionTypes";

function recipesReducer(state = initialState.recipes, action) {
  switch (action.type) {
    case types.REQUEST_RECIPES_SUCCESS:
      return action.recipes;
    case types.ADD_RECIPE_SUCCESS:
      return [...state, action.recipe];
    case types.UPDATE_RECIPE_SUCESS:
      return state.map(recipe =>
        recipe._key === action.recipe._key ? action.recipe : recipe
      );
    case types.DELETE_RECIPE_SUCCESS:
      return state.filter(recipe => recipe._key != action.data);
    case types.API_CALL_ERROR:
      return state;
    case types.BEGIN_API_CALL:
      return state;
    default:
      return state;
  }
}

export default recipesReducer;
