import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Typography,
  Paper,
  makeStyles,
  List,
  ListItem
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    margin: 20
  },
  grid: {
    margin: 20
  },
  images: {
    height: 200,
    width: 350
  }
});
const RecipeDetails = props => {
  const recipe = props.location.state.recipe;
  const classes = useStyles();

  console.log(recipe.imageURL);
  return (
    <div className={classes.root}>
      <Typography variant="h2" align="center">
        {recipe.name}
      </Typography>
      <Grid item xs={12}>
        <Grid align="center" className={classes.grid} item xs={12}>
          <img className={classes.images} src={recipe.imageURL} alt="Food" />
        </Grid>
        <Grid className={classes.grid} item xs={12}>
          <Typography variant="h5"> Description</Typography>
          <Typography variant="body1">{recipe.description}</Typography>
        </Grid>
        <Grid className={classes.grid} item xs={12}>
          <Typography variant="h5"> Ingredients</Typography>
          <Typography variant="body1">{recipe.ingredients}</Typography>
        </Grid>
        <Grid className={classes.grid} item xs={12}>
          <Typography variant="h5"> Steps</Typography>
          <Typography variant="body1">{recipe.steps}</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

RecipeDetails.prototypes = {
  recipe: PropTypes.object.isRequired
};
export default RecipeDetails;
