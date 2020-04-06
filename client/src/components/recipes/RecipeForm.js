import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Button,
  Container,
  Grid
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 20
  },
  grid: {},
  button: {
    marginBottom: 20,
    border: "#90C978",
    backgroundColor: "#90C978"
  },
  formValue: {
    margin: theme.spacing(1)
  }
}));

const RecipeForm = ({ recipe, onSave, onChange, saving }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h2" align="center">
        {recipe._key ? "Edit" : "Add"} Recipe{" "}
      </Typography>
      <form onSubmit={onSave}>
        <Grid item xs={12}>
          <Button
            className={classes.button}
            variant="contained"
            type="submit"
            disabled={saving}
          >
            {saving ? "Saving....." : "Save Recipe"}
          </Button>
        </Grid>
        <Grid className={classes.grid} container spacing={3}>
          <Grid item xs={4}>
            <TextField
              fullWidth
              name="name"
              label="Name"
              variant="outlined"
              required
              value={recipe.name}
              onChange={onChange}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              fullWidth
              name="imageURL"
              label="Image URL"
              variant="outlined"
              value={recipe.imageURL}
              onChange={onChange}
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              fullWidth
              name="serves"
              label="Serves"
              type="number"
              variant="outlined"
              value={recipe.serves}
              onChange={onChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="description"
              multiline
              label="Description"
              rows="3"
              variant="outlined"
              value={recipe.description}
              onChange={onChange}
            />
          </Grid>

          <Grid item xs={4}>
            <FormControl
              fullWidth
              variant="outlined"
              className={classes.formValue}
            >
              <InputLabel id="recipeCategory">Category</InputLabel>
              <Select
                labelId="recipeCategory"
                name="category"
                value={recipe.category}
                onChange={onChange}
                label="Category"
              >
                <MenuItem value={"Breakfast"}>Breakfast</MenuItem>
                <MenuItem value={"Lunch"}>Lunch</MenuItem>
                <MenuItem value={"Snacks"}>Snacks</MenuItem>
                <MenuItem value={"Dinner"}>Dinner</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <TextField
              required
              name="ingredients"
              id="ingredients"
              label="Ingredients"
              multiline
              rows="15"
              variant="outlined"
              fullWidth
              onChange={onChange}
              value={recipe.ingredients}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              required
              fullWidth
              name="steps"
              id="steps"
              label="Steps"
              multiline
              rows="15"
              variant="outlined"
              onChange={onChange}
              value={recipe.steps}
            />
          </Grid>
        </Grid>
      </form>
    </div>
  );
};
RecipeForm.propTypes = {
  recipe: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool.isRequired
};
export default RecipeForm;
