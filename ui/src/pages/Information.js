import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDirectorById } from "../actions/director.action";

import { Avatar, Typography } from "@material-ui/core";
import classes from "./Information.module.css";

const Information = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.director.userId);
  const userprofile = useSelector((state) => state.director.userprofile);

  useEffect(() => {
    dispatch(getDirectorById(userId));
  }, []);

  return (
    <main className={classes.container}>
      {userprofile && (
        <Fragment>
          <div className={classes["info-avatar"]}>
            <Avatar style={{ width: 200, height: 200 }} />
            <Typography variant="h4">{`${userprofile.firstName} ${userprofile.lastName}`}</Typography>
          </div>
          <div className={classes.info}>
            <div>
              <p className={classes.title}>First Name:</p>
              <p>{userprofile.firstName}</p>
            </div>
            <div>
              <p className={classes.title}>Last Name:</p>
              <p>{userprofile.lastName}</p>
            </div>
            <div>
              <p className={classes.title}>Gender:</p>
              <p>{userprofile.gender === true ? "Male" : "Female"}</p>
            </div>
            <div>
              <p className={classes.title}>Age:</p>
              <p>{userprofile.age}</p>
            </div>
            <div>
              <p className={classes.title}>Address:</p>
              <p>{userprofile.address}</p>
            </div>
          </div>
        </Fragment>
      )}
    </main>
  );
};

export default Information;
