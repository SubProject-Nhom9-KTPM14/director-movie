import React, { useState } from "react";

import classes from "./Regsiter.module.css";
import {
  Typography,
  Button,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  FormLabel,
} from "@material-ui/core";

const Register = () => {
  const [checked, setChecked] = useState({ nam: true, nu: false });

  const onChange = (event) => {
    if (event.target.name === "nam") {
      setChecked({ nam: true, nu: false });
    } else if (event.target.name === "nu") {
      setChecked({ nam: false, nu: true });
    }
  };

  const Title = (
    <Typography variant="h5" className={classes.title}>
      REGISTER
    </Typography>
  );

  return (
    <main className={classes.container}>
      <form className={classes.form}>
        {Title}
        <TextField
          id="first-name"
          label="First Name"
          variant="outlined"
          helperText=" "
        />
        <TextField
          id="last-name"
          label="Last Name"
          variant="outlined"
          helperText=" "
        />
        <TextField id="age" label="Age" variant="outlined" helperText=" " />
        <TextField
          id="address"
          label="Address"
          variant="outlined"
          helperText=" "
        />

        <FormGroup>
          <div className={classes.gender}>
            <FormControlLabel
              label="Male"
              control={
                <Checkbox
                  color="primary"
                  checked={checked.nam}
                  onChange={onChange}
                  name="nam"
                />
              }
            />
            <FormControlLabel
              label="Female"
              control={
                <Checkbox
                  color="primary"
                  checked={checked.nu}
                  onChange={onChange}
                  name="nu"
                />
              }
            />
          </div>
        </FormGroup>

        <TextField
          id="username"
          label="Username"
          variant="outlined"
          helperText=" "
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          helperText=" "
        />
        <TextField
          id="repeat-password"
          label=" Repeat Password"
          variant="outlined"
          helperText=" "
        />

        <Button
          size="large"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Register
        </Button>
      </form>
    </main>
  );
};

export default Register;
