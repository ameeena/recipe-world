import axios from "axios";

import { handleResponse, handleError } from "./apiUtils";
// TODO:Put the URL in a config file
const baseUrl = "http://localhost:4500/api/recipes/";

// API call to get all the list of professions
export function getRecipes() {
  return axios
    .get(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

// API call to get all the list of professions
export function deleteRecipe(recipeID) {
  return axios
    .delete(baseUrl + recipeID, { key: recipeID })
    .then(handleResponse)
    .catch(handleError);
}

// API call to post/put professions list
export function saveRecipes(recipe) {
  // check if key exists .. if key exists then put else post
  if (recipe._key) {
    return axios
      .put(baseUrl + recipe._key, recipe)
      .then(handleResponse)
      .catch(handleError);
  } else {
    return axios
      .post(baseUrl, recipe)
      .then(handleResponse)
      .catch(handleError);
  }
}
