import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions/director.action';
import { Typography, Button, TextField } from "@material-ui/core";
import classes from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { useAlert } from 'react-alert'
const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.director.user);
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [userLogin, setUserLogin] = useState(null)
  const Title = (
    <Typography variant="h5" className={classes.title}>
      LOGIN
    </Typography>
  );
  const alert = useAlert()
  useEffect(() => {
    if (localStorage.getItem('user_authenticate')) {
      navigate("/movies")
      alert.success("Login successfull !!!")
    }
  }, [user])
  const onLogin = () => {
    const userLogin = {
      username: userName,
      password: password
    }
    dispatch(actions.login(userLogin))
  }

  return (
    <main className={classes.container}>
      <form className={classes.form}>
        {Title}
        <TextField
          id="username"
          label="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          variant="standard"
        />
        <TextField
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          variant="standard"
        />
        <Button
          size="large"
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={onLogin}
        >
          Login
        </Button>
      </form>
    </main>
  );
};

export default Login;
