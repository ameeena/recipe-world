const recipeController = require("../controllers/recipe-controller");

module.exports = function(app) {
  app.get("/api/recipes", recipeController.getRecipes);
  app.get("/api/recipes/:id", recipeController.getRecipesById);
  app.post("/api/recipes", recipeController.addRecipe);
  app.put("/api/recipes/:id", recipeController.updateRecipe);
  app.delete("/api/recipes/:id", recipeController.deleteRecipe);
};
