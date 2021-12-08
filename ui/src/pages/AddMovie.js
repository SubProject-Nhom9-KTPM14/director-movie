import React, { useState } from "react";

import classes from "./AddMovie.module.css";
import {
  Typography,
  Button,
  TextField,
  TextareaAutosize,
  Box,
  Input,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import * as action from ".././actions/movie.action";
import jwt_decode from "jwt-decode";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const AddMovie = () => {
  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);
  const [nameMovie, setNameMovie] = useState(null);
  const [description, setDesciption] = useState(null);
  const [poster, setPoster] = useState("");
  const director = jwt_decode(localStorage.getItem("user_authenticate")).User
    .userId;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Title = (
    <Typography variant="h5" className={classes.title}>
      ADD MOVIE
    </Typography>
  );

  const getFile = (event) => {
    setPoster(event.target.files[0]);
  };

  const addMovie = () => {
    const formData = new FormData();
    formData.append("File", poster);

    action
      .uploadFile(formData)
      .then((response) => {
        const movie = {
          name: nameMovie,
          description,
          poster: response.data.fileUrl,
          rated: value,
          directorId: director,
        };

        dispatch(action.addMovie(movie));
        console.log("Movie --", movie);
        __moveToMovies();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const __moveToMovies = () => {
    navigate("/movies");
  };

  return (
    <main className={classes.container}>
      <form className={classes.form}>
        {Title}
        <TextField
          id="full-name"
          label="Full Name"
          variant="outlined"
          helperText=""
          onChange={(e) => {
            setNameMovie(e.target.value);
          }}
          style={{ marginBottom: 10 }}
        />
        <TextareaAutosize
          maxRows={8}
          minRows={5}
          aria-label="maximum height"
          placeholder="Description"
          defaultValue=""
          onChange={(e) => {
            setDesciption(e.target.value);
          }}
          style={{ padding: 10, marginTop: 10, marginBottom: 20 }}
        />
        <div style={{ marginBottom: 20 }}>
          <Typography style={{ float: "left", marginRight: 50 }}>
            Add Poster
          </Typography>
          <Input
            type="file"
            accept=".jpg, .jpeg, .png, .gif"
            required
            onChange={getFile}
          />
        </div>

        <div className={classes.root}>
          <Rating
            name="hover-feedback"
            value={value}
            precision={0.5}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            size="large"
            style={{ marginTop: 20 }}
          />
          {value !== null && (
            <Box ml={0}>{labels[hover !== -1 ? hover : value]}</Box>
          )}
        </div>

        <Button
          size="large"
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={addMovie}
          style={{ marginTop: 50 }}
        >
          ADD MOVIE
        </Button>
      </form>
    </main>
  );
};

export default AddMovie;
