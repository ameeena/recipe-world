import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import RecipePage from "./recipes/RecipePage";
import ManageRecipes from "./recipes/ManageRecipes";
import RecipeDetails from "./recipes/RecipeDetails";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={RecipePage} />
        <Route path="/recipes" component={RecipePage} />
        <Route path="/recipe/:_key" component={ManageRecipes} />
        <Route path="/recipe" component={ManageRecipes} />
        <Route path="/recipeDetails/:_key" component={RecipeDetails} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
export default App;
