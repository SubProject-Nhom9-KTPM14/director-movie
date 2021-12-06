import React from "react";

import { Avatar, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import classes from "./MovieDetail.module.css";

const MovieDetail = () => {
  return (
    <main className={classes.container}>
      <div className={classes.flex}>
        <div className={classes["info-avatar"]}>
          <img
            src="https://cdn.pastemagazine.com/www/system/images/photo_albums/best-movie-posters-2016/large/moonlight-ver2-xlg.jpg?1384968217"
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
              Moonlight
            </Typography>
          </div>
          <div>
            <p className={classes.rated}>Rated 7+</p>
          </div>
          <div>
            <p className={classes.des}>Description:</p>
          </div>
          <div className={classes["des-contain"]}>
            <p className={classes["des-content"]}>
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
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
                Jacob Carter
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </main>
  );
};

export default MovieDetail;
