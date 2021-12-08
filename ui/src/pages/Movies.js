import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions/movie.action";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import jwt_decode from "jwt-decode";
import classes from "./Movies.module.css";

const Movies = () => {
  const dispatch = useDispatch();
  const userId = jwt_decode(localStorage.getItem("user_authenticate")).User
    .userId;
  const moviesByDirectorId = useSelector(
    (state) => state.movie.moviesByDirectorId
  );
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(actions.getMoviesByDirectorId(userId));
  }, []);

  return (
    <main className={classes.container}>
      <div className={classes.top}>
        <Button onClick={() => navigate("/AddMovie")}> ADD Movie</Button>
      </div>

      {moviesByDirectorId && moviesByDirectorId.length > 0 && (
        <div className={classes.grid}>
          {moviesByDirectorId.map((movie, i) => {
            return (
              <Card
                className={classes.card}
                key={i}
                onClick={() => navigate(`/movies/${movie.id}`)}
              >
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={movie.poster}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      style={{ overflow: "hidden", textOverflow: "ellipsis" }}
                    >
                      {movie.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })}
        </div>
      )}
    </main>
  );
};

export default Movies;
