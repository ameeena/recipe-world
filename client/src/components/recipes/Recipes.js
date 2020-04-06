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
    height: 165
  },
  card: {
    width: 320,
    height: 400,
    margin: 20,
    border: "2px solid #A87496"
  },
  control: {
    padding: theme.spacing(2)
  },
  description: {
    maxHeight: 60
  },
  viewButtons: {
    border: "#90C978",
    // color: "#586B55",
    // boxShadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
    backgroundColor: "#90C978"
  },
  editButtons: {
    border: "#E6A240",
    // color: "#E6A240"
    backgroundColor: "#E6A240"
  },
  deleteButtons: {
    border: "#C33C23",
    backgroundColor: "#C33C23"
    // color: "#C33C23"
  }
}));

const Recipes = ({ recipes, onClick }) => {
  const classes = useStyles();
  console.log(process.env.PUBLIC_URL);
  const imagePath = process.env.PUBLIC_URL + "images/";
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
                image={imagePath + recipe.imageURL}
                // image={imagePath}
                alt="Mountain"
                title={recipe.name}
              ></CardMedia>
              <CardContent className={classes.description}>
                <Typography variant="body2">{recipe.description}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  className={classes.viewButtons}
                  key={recipe._key}
                  component={Link}
                  to={{
                    pathname: "/recipeDetails/" + recipe._key,
                    state: { recipe: recipe }
                  }}
                  variant="contained"
                >
                  View
                </Button>
                <Button
                  component={Link}
                  key={recipe.id}
                  to={"/recipe/" + recipe._key}
                  className={classes.editButtons}
                  variant="contained"
                >
                  Edit
                </Button>
                <Button
                  className={classes.deleteButtons}
                  onClick={() => onClick(recipe._key)}
                  variant="contained"
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
