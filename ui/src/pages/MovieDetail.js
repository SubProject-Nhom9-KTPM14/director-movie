import React, { useEffect, useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";

import { getMovieById } from "../actions/movie.action";
import { Avatar, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import classes from "./MovieDetail.module.css";

const MovieDetail = (props) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.director.userId);
  const movieDetail = useSelector((state) => state.movie.movieDetail);
  const { movieId } = useParams();

  useEffect(() => {
    dispatch(getMovieById(movieId));
  }, []);

  return (
    <main className={classes.container}>
      {movieDetail ? (
        <Fragment>
          <div className={classes.flex}>
            <div className={classes["info-avatar"]}>
              <img
                src={movieDetail.movie.poster}
                width="270px"
                height="370px"
              />
            </div>
            <div className={classes.info}>
              <div>
                <Typography
                  variant="h4"
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    fontWeight: 700,
                  }}
                >
                  {movieDetail.movie.name}
                </Typography>
              </div>
              <div>
                <p
                  className={classes.rated}
                >{`Rating ${movieDetail.movie.rated}`}</p>
              </div>
              <div>
                <p className={classes.des}>Description:</p>
              </div>
              <div className={classes["des-contain"]}>
                <p className={classes["des-content"]}>
                  {movieDetail.movie.description}
                </p>
              </div>
            </div>
          </div>
          <div>
            <Typography variant="h5" className={classes.director}>
              Director
            </Typography>

            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="body1"
                    component="h2"
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      fontWeight: 500,
                    }}
                  >
                    {`${movieDetail.director.firstName}  ${movieDetail.director.lastName}`}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </Fragment>
      ) : (
        <div className={classes["not-found"]}>
          <Typography variant="h2">"NOT FOUND"</Typography>
        </div>
      )}
    </main>
  );
};

export default MovieDetail;
