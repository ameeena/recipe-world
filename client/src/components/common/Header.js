import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#69495e"
  }
});

const Header = () => {
  // const activeStyle = { color : ""};
  const classes = useStyles();
  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <MenuItem component={NavLink} to="/" exact>
          Recipe World
        </MenuItem>
        <MenuItem component={NavLink} to="/recipe">
          Add Recipe
        </MenuItem>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
