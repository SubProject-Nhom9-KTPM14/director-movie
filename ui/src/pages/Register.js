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
    <Typography variant="h6" className={classes.title}>
      REGISTER
    </Typography>
  );

  return (
    <main className={classes.container}>
      {Title}
      <form className={classes.form}>
        <TextField id="first-name" label="FIRST NAME" variant="filled" />
        <TextField id="last-name" label="LAST NAME" variant="filled" />
        <TextField id="age" label="AGE" variant="filled" />
        <TextField id="address" label="ADDRESS" variant="filled" />

        <FormGroup>
          <FormControlLabel
            label="Nam"
            control={
              <Checkbox checked={checked.nam} onChange={onChange} name="nam" />
            }
          />
          <FormControlLabel
            label="Nu"
            control={
              <Checkbox checked={checked.nu} onChange={onChange} name="nu" />
            }
          />
        </FormGroup>

        <TextField id="username" label="USERNAME" variant="filled" />
        <TextField id="password" label="PASSWORD" variant="filled" />
        <TextField
          id="repeat-password"
          label=" REPEAT PASSWORD"
          variant="filled"
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
