import React from "react";

import { Avatar, Typography } from "@material-ui/core";
import classes from "./Information.module.css";

const Information = () => {
  return (
    <main className={classes.container}>
      <div className={classes["info-avatar"]}>
        <Avatar style={{ width: 200, height: 200 }} />
        <Typography variant="h4">Jacob Carter</Typography>
      </div>

      <div className={classes.info}>
        <div>
          <p className={classes.title}>First Name:</p>
          <p>Jacob</p>
        </div>
        <div>
          <p className={classes.title}>Last Name:</p>
          <p>Carter</p>
        </div>
        <div>
          <p className={classes.title}>Gender:</p>
          <p>Male</p>
        </div>
        <div>
          <p className={classes.title}>Age:</p>
          <p>40</p>
        </div>
        <div>
          <p className={classes.title}>Address:</p>
          <p>17 Nguyen Van Bao, Quan Go Vap, TP Ho Chi Minh</p>
        </div>
      </div>
    </main>
  );
};

export default Information;
