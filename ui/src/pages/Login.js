import React from "react";
import { useSelector } from "react-redux";

import { Typography, Button, TextField } from "@material-ui/core";
import classes from "./Login.module.css";

const Login = () => {
  const userId = useSelector((state) => state.user.userId);
  const Title = (
    <Typography variant="h5" className={classes.title}>
      LOGIN
    </Typography>
  );

  return (
    <main className={classes.container}>
      <form className={classes.form}>
        {Title}
        <TextField
          id="username"
          label="Username"
          variant="standard"
          helperText=" "
        />
        <TextField
          id="password"
          label="Password"
          variant="standard"
          helperText=" "
        />
        <Button
          size="large"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Login
        </Button>
      </form>
    </main>
  );
};

export default Login;
