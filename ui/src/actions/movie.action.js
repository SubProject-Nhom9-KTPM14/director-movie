import apiService from "../services/api.service";

export const ACTION_TYPES = {
  GETMOVIEBYID: "GET MOVIE BY ID",
  GET_MOVIE_BY_DIRECTOR_ID: "GET MOVIE BY DIRECTOR ID",
};

export const getMovieById = (id) => (dispatch) => {
  apiService
    .movies()
    .getMovieById(id)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.GETMOVIEBYID,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log("err", error);
    });
};

export const getMovieByDirectorId = (id) => (dispatch) => {
  apiService
    .movies()
    .getMovieByDirectorId(id)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.GET_MOVIE_BY_DIRECTOR_ID,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
