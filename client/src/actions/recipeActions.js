// Action Creators create a export function that will return state and action
// API calls are also handled from here
import { ActionTypes as actions } from "../constants/actionTypes";
import * as recipeApi from "../api/recipeApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

//Action Creators
export function addRecipeSuccess(savedRecipe) {
  return { type: actions.ADD_RECIPE_SUCCESS, recipe: savedRecipe };
}

export function updateRecipeSuccess(savedRecipe) {
  return { type: actions.UPDATE_RECIPE_SUCESS, recipe: savedRecipe };
}

export function getRecipesSuccess(result) {
  return { type: actions.REQUEST_RECIPES_SUCCESS, recipes: result.data };
}

export function deleteRecipeSuccess(result, recipeId) {
  return { type: actions.DELETE_RECIPE_SUCCESS, data: recipeId };
}
//--

// API calls

export function getRecipes() {
  return async dispath => {
    try {
      dispath(beginApiCall());
      const result = await recipeApi.getRecipes();
      dispath(getRecipesSuccess(result));
    } catch (error) {
      dispath(apiCallError);
      throw error;
    }
  };
}

export function saveRecipe(recipe) {
  return async dispatch => {
    try {
      dispatch(beginApiCall());
      const savedRecipe = await recipeApi.saveRecipes(recipe);
      savedRecipe._key
        ? dispatch(updateRecipeSuccess(savedRecipe))
        : dispatch(addRecipeSuccess(savedRecipe));
    } catch (error) {
      dispatch(apiCallError());
      throw error;
    }
  };
}

export function deleteRecipe(recipeId) {
  return async dispatch => {
    try {
      dispatch(beginApiCall());
      const result = await recipeApi.deleteRecipe(recipeId);
      dispatch(deleteRecipeSuccess(result, recipeId));
    } catch (error) {
      dispatch(apiCallError());
      throw error;
    }
  };
}

//--
