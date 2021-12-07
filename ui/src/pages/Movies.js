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

import classes from "./Movies.module.css";

const Movies = () => {
  // const dispatch = useDispatch();
  // const [movieId, setMovieId] = useState(1);
  // const movie = useSelector((state) => state.movie.movieId);
  // useEffect(() => {
  //   dispatch(actions.getMovieById(1));
  // }, []);

  const navigate = useNavigate();
  // console.log("movies", movie);

  return (
    <main className={classes.container}>
      <div className={classes.top}>
        <Button onClick={() => navigate("/AddMovie")}> ADD Movie</Button>
      </div>
      <div className={classes.grid}>
        <Card className={classes.card}>
          <CardActionArea onClick={() => navigate("/MovieDetail")}>
            <CardMedia
              className={classes.media}
              image="https://cdn.shopify.com/s/files/1/0548/8404/0870/products/TheFrontLine-WarMoviePoster_821048c5-929c-44af-97ea-75dc51073889_5000x.jpg?v=1617381737"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={{ overflow: "hidden", textOverflow: "ellipsis" }}
              >
                The Front Line
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://cdn.pastemagazine.com/www/system/images/photo_albums/best-movie-posters-2016/large/moonlight-ver2-xlg.jpg?1384968217"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={{ overflow: "hidden", textOverflow: "ellipsis" }}
              >
                Moonlight
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://cdn.shopify.com/s/files/1/0548/8404/0870/products/TheFrontLine-WarMoviePoster_821048c5-929c-44af-97ea-75dc51073889_5000x.jpg?v=1617381737"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={{ overflow: "hidden", textOverflow: "ellipsis" }}
              >
                The Front Line
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://cdn.pastemagazine.com/www/system/images/photo_albums/best-movie-posters-2016/large/moonlight-ver2-xlg.jpg?1384968217"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={{ overflow: "hidden", textOverflow: "ellipsis" }}
              >
                Moonlight
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://cdn.shopify.com/s/files/1/0548/8404/0870/products/TheFrontLine-WarMoviePoster_821048c5-929c-44af-97ea-75dc51073889_5000x.jpg?v=1617381737"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={{ overflow: "hidden", textOverflow: "ellipsis" }}
              >
                The Front Line
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://cdn.pastemagazine.com/www/system/images/photo_albums/best-movie-posters-2016/large/moonlight-ver2-xlg.jpg?1384968217"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={{ overflow: "hidden", textOverflow: "ellipsis" }}
              >
                Moonlight
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </main >
  );
};

export default Movies;
