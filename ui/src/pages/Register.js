
import Formsy from 'formsy-react';
import useForm from "./Form/useForm";
import classes from "./Regsiter.module.css";
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../actions/director.action';
import { useNavigate } from "react-router-dom";
import { useAlert } from 'react-alert'
import {
  Typography,
  Button,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  FormLabel,
} from "@material-ui/core";
const initialFieldValues = {
  address: '',
  password: '',
  lastName: '',
  firstName: '',
  username: '',
  age: '',
  gender: true,
  passwordconfirm: ''
}
const Register = ({ ...props }) => {
  const [checked, setChecked] = useState({ nam: true, nu: false });
  const dispatch = useDispatch()
  const navigate = useNavigate();
  let allDirect = useSelector(state => state.director.allDirector);
  const [user, setUser] = useState([])
  const alert = useAlert()
  //Get All Director
  useEffect(() => {
    dispatch(actions.getAllDirec())
  }, []);
  console.log(allDirect)
  useEffect(() => {
    if (allDirect) (
      setUser(allDirect)
    )
  }, [allDirect])

  const onChange = (event) => {
    if (event.target.name === "nam") {
      setChecked({ nam: true, nu: false });
    } else if (event.target.name === "nu") {
      setChecked({ nam: false, nu: true });
    }
  };
  console.log(user)
  //Validate
  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('username' in fieldValues) {
      let err = 0;
      user.map((user) => {
        if (user.username.toLowerCase() === fieldValues.username.toLowerCase()) {
          err = err + 1
        }
      })
      if (fieldValues.username === '') {
        temp.username = fieldValues.username ? "" : "Username is required."
      } if (fieldValues.username !== '') {
        temp.username = (/^[A-Za-z1-9]\w{5,14}$/).test(fieldValues.username) ? "" : "Username must be at least 6 and at most 15 characters without any special characters"
      }
      if (err >= 1) {
        err < 1 ? temp.username = "" : temp.username = "Username is existed"
      }
    }
    if ('lastName' in fieldValues) {
      if (fieldValues.lastName === '') {
        temp.lastName = fieldValues.lastName ? "" : "lastName is required."
      } if (fieldValues.lastName !== '') {
        temp.lastName = (/^[a-zA-ZàáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹýÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ]{1,15}(?: [a-zA-ZàáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹýÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ]+){0,6}$/).test(fieldValues.lastName) ? "" : "lastName is not valid."
      }
    }
    if ('firstName' in fieldValues) {
      if (fieldValues.firstName === '') {
        temp.firstName = fieldValues.firstName ? "" : "First is required."
      } if (fieldValues.firstName !== '') {
        temp.firstName = (/^[a-zA-ZàáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹýÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ]{1,15}(?: [a-zA-ZàáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹýÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ]+){0,6}$/).test(fieldValues.firstName) ? "" : "firstName is not valid."
      }
    }
    if ('address' in fieldValues) {
      temp.address = fieldValues.address ? "" : "First is required."
    }
    if ('age' in fieldValues) {
      temp.age = fieldValues.age ? "" : "Age is required"
    }
    if ('password' in fieldValues)
      if (fieldValues.password === '') {
        temp.password = fieldValues.password ? "" : "Password is required."
      } if (fieldValues.password !== '') {
        temp.password = (/^[A-Za-z0-9!@#$%^&*]{6,20}$/).test(fieldValues.password) ? "" : "Password must be at least 6 and at most 15 characters"
      }
    if ('passwordconfirm' in fieldValues) {
      fieldValues.passwordconfirm == values.password ? temp.passwordconfirm = "" : temp.passwordconfirm = "Confirmation password does not match"
    }

    setErrors({
      ...temp
    })

    if (fieldValues == values)
      return Object.values(temp).every(x => x == "")
  }
  const Title = (
    <Typography variant="h5" className={classes.title}>
      REGISTER
    </Typography>
  );

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
  } = useForm(initialFieldValues, validate, props.setCurrentId)
  console.log(values)
  const handleSubmit = e => {
    if (validate()) {
      dispatch(actions.register(values))
      alert.success('Register Successfull !!! Login now !')
      navigate("/login")
    }

  }
  return (
    <main className={classes.container}>
      <Formsy className={classes.form}
        onSubmit={handleSubmit}
      >
        {Title}
        <TextField
          id="first-name"
          label="First Name"
          name="firstName"
          variant="outlined"
          helperText=" "
          value={values.firstName}
          onChange={handleInputChange}
          {...(errors.firstName && { error: true, helperText: errors.firstName })}
        />
        <TextField
          id="last-name"
          label="Last Name"
          name="lastName"
          variant="outlined"
          helperText=" "
          value={values.lastName}
          onChange={handleInputChange}
          {...(errors.lastName && { error: true, helperText: errors.lastName })}
        />
        <TextField
          id="age"
          label="Age"
          variant="outlined"
          helperText=" "
          name="age"
          type="number"
          InputProps={{
            inputProps: {
              max: 100, min: 18
            }
          }}
          value={values.age}
          onChange={handleInputChange}
          {...(errors.age && { error: true, helperText: errors.age })}
        />
        <TextField
          id="address"
          label="Address"
          name="address"
          variant="outlined"
          helperText=" "
          value={values.address}
          onChange={handleInputChange}
          {...(errors.address && { error: true, helperText: errors.address })}
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
          name="username"
          value={values.username}

          onChange={handleInputChange}
          {...(errors.username && { error: true, helperText: errors.username })}
        />
        <TextField
          id="password"
          label="Password"
          name="password"
          value={values.password}
          onChange={handleInputChange}
          variant="outlined"
          helperText=" "
          {...(errors.password && { error: true, helperText: errors.password })}
        />
        <TextField
          id="repeat-password"
          label=" Repeat Password"
          variant="outlined"
          name="passwordconfirm"
          helperText=" "
          value={values.passwordconfirm}
          onChange={handleInputChange}
          {...(errors.passwordconfirm && { error: true, helperText: errors.passwordconfirm })}
        />

        <Button
          size="large"
          variant="contained"
          color="primary"
          className={classes.button}
          type="submit"
        >
          Register
        </Button>
      </Formsy>
    </main>
  );
};

export default Register;
