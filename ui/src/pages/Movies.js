import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import * as actions from "../actions/movie.action";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import classes from "./Movies.module.css";

const Movies = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector((state) => state.user.userId);
  const moviesByDirectorId = useSelector(
    (state) => state.movie.moviesByDirectorId
  );

  useEffect(() => {
    dispatch(actions.getMovieByDirectorId(userId));
  }, []);

  const toMovieDetail = (id) => {
    navigate(`/movies/${id}`);
  };

  return (
    <main className={classes.container}>
      {moviesByDirectorId && moviesByDirectorId.length > 0 && (
        <div className={classes.grid}>
          {moviesByDirectorId.map((movie, i) => (
            <Card
              className={classes.card}
              key={i}
              onClick={toMovieDetail.bind(null, movie.id)}
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
          ))}
        </div>
      )}
    </main>
  );
};

export default Movies;
