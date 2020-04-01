import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";

const Header = () => {
  // const activeStyle = { color : ""};
  return (
    <AppBar position="static">
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
