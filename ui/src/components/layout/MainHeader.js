import React, { Fragment } from "react";
import { Outlet } from "react-router";

import { AccessAlarm, ThreeDRotation } from "@material-ui/icons";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  const Logo = (
    <Typography variant="h6" className={classes.title}>
      LOGO
    </Typography>
  );

  return (
    <div className={classes.container}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <div className={classes["home-menu"]}>
            {Logo}

            <div>
              <Button color="inherit" className={classes["menu-button"]}>
                Home
              </Button>
              <Button color="inherit" className={classes["menu-button"]}>
                Movies
              </Button>
            </div>
          </div>

          <div>
            <Button color="inherit" className={classes["menu-button"]}>
              Register
            </Button>
            <Button color="inherit" className={classes["menu-button"]}>
              Login
            </Button>
          </div>
        </Toolbar>
      </AppBar>

      <Outlet />
    </div>
  );
};

export default MainHeader;
