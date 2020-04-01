import keyMirror from "keymirror";

export var ActionTypes = keyMirror({
  // API requests actions
  REQUEST_RECIPES: null,
  REQUEST_RECIPES_SUCCESS: null,
  ADD_RECIPE: null,
  ADD_RECIPE_SUCCESS: null,
  UPDATE_RECIPE: null,
  UPDATE_RECIPE_SUCESS: null,
  DELETE_RECIPE_SUCCESS: null,
  BEGIN_API_CALL: null,
  API_CALL_ERROR: null
});

console.log("ActionTypes", ActionTypes);
