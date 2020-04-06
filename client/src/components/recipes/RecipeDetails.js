import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Typography,
  Paper,
  makeStyles,
  List,
  ListItem,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    margin: 20
  },
  images: {
    height: 200,
    width: 350
  },
  descriptionGrid: {
    border: "1px solid black"
  },
  tableHeader: {
    backgroundColor: "#69495e",
    color: "White"
  }
});
const RecipeDetails = props => {
  const recipe = props.location.state.recipe;
  const classes = useStyles();
  const imagePath = process.env.PUBLIC_URL + "images/";

  console.log(process.env.PUBLIC_URL);
  return (
    <div className={classes.root}>
      <Typography variant="h2" align="center">
        {recipe.name}
      </Typography>
      <Grid container spacing={2}>
        <Grid align="center" className={classes.grid} item xs={12}>
          <img
            className={classes.images}
            src={imagePath + recipe.imageURL}
            alt="Food"
          />
        </Grid>
        <Grid align="center" className={`${classes.grid}`} item xs={12}>
          <Typography variant="h5"> Description</Typography>
          <Typography variant="body1">
            <em>{recipe.description}</em>
          </Typography>
        </Grid>
        <Grid className={`${classes.grid}`} item xs={6}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableHeader}>
                    Ingredients
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {recipe.ingredients.split("\n").map((item, key) => {
                  return (
                    <TableRow key={key}>
                      <TableCell>{item}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          {/* <Typography variant="h5"> Ingredients</Typography>
          {recipe.ingredients.split("\n").map((item, key) => {
            return (
              <List>
                <ListItem key={key}>{item}</ListItem>
              </List>
            );
          })} */}
          {/* <Typography variant="body1">{recipe.ingredients}</Typography> */}
        </Grid>
        <Grid className={classes.grid} item xs={6}>
          {/* <Typography variant="h5"> Steps</Typography>
          <Typography variant="body1">{recipe.steps}</Typography> */}

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableHeader}>Steps</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {recipe.steps.split("\n").map((item, key) => {
                  return (
                    <TableRow key={key}>
                      <TableCell>{item}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
};

RecipeDetails.prototypes = {
  recipe: PropTypes.object.isRequired
};
export default RecipeDetails;
