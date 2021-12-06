import React, { Fragment } from "react";
import { Outlet } from "react-router";

import { AccessAlarm, ThreeDRotation } from "@material-ui/icons";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import classes from "./MainHeader.module.css";
import logo from "../../assets/logo_purple.png";

const MainHeader = () => {
  const Logo = <img src={logo} className={classes.logo} />;

  return (
    <div className={classes.container}>
      <AppBar position="static">
        <Toolbar
          className={classes.toolbar}
          style={{ paddingLeft: 100, paddingRight: 100 }}
        >
          {Logo}
          <div className={classes.buttons}>
            <Button color="default" className={classes["menu-button"]}>
              Home
            </Button>
            <Button color="default" className={classes["menu-button"]}>
              Movies
            </Button>
            <Button color="default" className={classes["menu-button"]}>
              Register
            </Button>
            <Button color="default" className={classes["menu-button"]}>
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
