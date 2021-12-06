import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions/movie.action";

const Movies = () => {
  const dispatch = useDispatch();
  const [movieId, setMovieId] = useState(1);
  const movie = useSelector((state) => state.movie.movieId);
  useEffect(() => {
    dispatch(actions.getMovieById(1));
  }, []);
  console.log("movies", movie);

  return <div>Movie Page</div>;
};

export default Movies;
