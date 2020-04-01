import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import * as recipeActions from "../../actions/recipeActions";
import Recipes from "./Recipes";
import { Typography, Button } from "@material-ui/core";

const buttonStyles = {
  marginLeft: 20
};
class RecipePage extends React.Component {
  componentDidMount() {
    const { bindActions } = this.props;
    bindActions.getRecipes();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(recipeKey) {
    this.props.bindActions.deleteRecipe(recipeKey);
  }

  render() {
    return (
      <div>
        <Typography variant="h2" align="center">
          Recipe World
        </Typography>
        {/* <Button
          color="primary"
          style={buttonStyles}
          component={Link}
          to={"/recipe"}
          variant="contained"
        >
          Add Recipe
        </Button> */}
        <Recipes
          recipes={this.props.recipes}
          onClick={this.handleClick}
        ></Recipes>
        ;
      </div>
    );
  }
}

RecipePage.propTypes = {
  recipes: PropTypes.array.isRequired,
  bindActions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  };
}
function mapDispatchToProps(dispatch) {
  return {
    bindActions: bindActionCreators(recipeActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(RecipePage);
