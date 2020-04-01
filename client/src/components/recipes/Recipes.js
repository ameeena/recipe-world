import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Grid,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    direction: "row",
    alignContent: "space-between"
  },
  media: {
    height: 100
  },
  card: {
    width: 320,
    height: 320,
    margin: 20
  },
  control: {
    padding: theme.spacing(2)
  },
  description: {
    maxHeight: 50
  }
}));

const Recipes = ({ recipes, onClick }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      {recipes.map(recipe => {
        return (
          <Grid xs={12} sm={6} md={3} key={recipe._key} item>
            <Card className={classes.card} variant="outlined" key={recipe._key}>
              <CardHeader
                title={recipe.name}
                subheader={recipe.dateTime}
              ></CardHeader>
              {console.log(recipe.imageURL)}
              <CardMedia
                component="div"
                className={classes.media}
                image={recipe.imageURL}
                alt="Mountain"
                title={recipe.name}
              ></CardMedia>
              <CardContent className={classes.description}>
                <Typography variant="body2">{recipe.description}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  key={recipe._key}
                  component={Link}
                  to={{
                    pathname: "/recipeDetails/" + recipe._key,
                    state: { recipe: recipe }
                  }}
                  color="primary"
                  variant="outlined"
                >
                  View
                </Button>
                <Button color="primary" variant="outlined">
                  Edit
                </Button>
                <Button
                  onClick={() => onClick(recipe._key)}
                  color="secondary"
                  variant="outlined"
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

Recipes.propTypes = {
  recipes: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Recipes;
