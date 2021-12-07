import React, { Fragment } from "react";
import { Outlet } from "react-router";

import { AccessAlarm, ThreeDRotation } from "@material-ui/icons";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import classes from "./MainHeader.module.css";
import logo from "../../assets/logo_purple.png";

import { Link as RouterLink, useNavigate } from "react-router-dom";

const MainHeader = () => {
  const navigate = useNavigate();
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
            {
              localStorage.getItem('user_authenticate') ?
                <div>
                  <Button
                    color="default"
                    className={classes["menu-button"]}
                    onClick={() => navigate("/")}
                  >
                    Home
                  </Button>
                  <Button
                    color="default"
                    className={classes["menu-button"]}
                    onClick={() => navigate("/movies")}
                  >
                    Movies
                  </Button>
                  <Button
                    color="default"
                    className={classes["menu-button"]}
                    onClick={() => {
                      localStorage.setItem('user_authenticate', '')
                      navigate("/login")
                    }
                    }
                  >
                    Logout
                  </Button>
                </div> : <div>
                  <Button
                    color="default"
                    className={classes["menu-button"]}
                    onClick={() => navigate("/register")}
                  >
                    Register
                  </Button>
                  <Button
                    color="default"
                    className={classes["menu-button"]}
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </Button>
                </div>
            }
          </div>
        </Toolbar>
      </AppBar>

      <Outlet />
    </div>
  );
};

export default MainHeader;
