import React from "react";
import RecipeForm from "./RecipeForm";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import * as recipeActions from "../../actions/recipeActions";

class ManageRecipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saving: false,
      recipe: props.recipe
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    console.log(event.target.name);
    const { name, value } = event.target;
    this.setState(state => ({
      recipe: { ...state.recipe, [name]: value }
    }));
    console.log(event.target.value);
    console.log(event.target.name);
  }

  handleSave(event) {
    this.setState({
      saving: true
    });
    event.preventDefault();
    let recipe = { ...this.state.recipe, dateTime: new Date() };
    this.props.bindActions
      .saveRecipe(recipe)
      .then(() => {
        this.props.history.push("/recipes");
      })
      .catch(err => {
        this.setState({
          saving: false
        });
      });
  }
  render() {
    return (
      <RecipeForm
        recipe={this.state.recipe}
        onSave={this.handleSave}
        onChange={this.handleChange}
        saving={this.state.saving}
      ></RecipeForm>
    );
  }
}

ManageRecipes.propTypes = {
  recipe: PropTypes.object.isRequired,
  recipes: PropTypes.array.isRequired,
  bindActions: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

function getRecipeByKey(recipes, key) {
  console.log(recipes);
  console.log(key);
  return recipes.find(elem => elem._key === key) || null;
}

function mapStateToProps(state, ownProps) {
  const key = ownProps.match.params._key;
  const recipe =
    key && state.recipes.length > 0 ? getRecipeByKey(state.recipes, key) : {};

  return {
    recipes: state.recipes,
    recipe
  };
}

function mapDispatchToProps(dispatch) {
  return {
    bindActions: bindActionCreators(recipeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageRecipes);
