import React from "react";
import { Button, AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Link style={{ textDecoration: "none" }} to="/">
            <Typography className="nav-link-p" variant="h5">
              Home
            </Typography>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/students">
            <Typography className="nav-link-p" variant="h6">
              Students
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
