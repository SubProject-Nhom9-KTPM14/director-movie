import React from "react";
import { useSelector } from "react-redux";

import { Typography, Button, TextField } from "@material-ui/core";
import classes from "./Login.module.css";

const Login = () => {
  const userId = useSelector((state) => state.user.userId);
  const Title = (
    <Typography variant="h6" className={classes.title}>
      LOGIN
    </Typography>
  );

  return (
    <main className={classes.container}>
      {Title}
      <form className={classes.form}>
        <TextField id="username" label="USERNAME" variant="filled" />
        <TextField id="password" label="PASSWORD" variant="filled" />
        <Button
          size="large"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Login
        </Button>
      </form>
      <p></p>
    </main>
  );
};

export default Login;
