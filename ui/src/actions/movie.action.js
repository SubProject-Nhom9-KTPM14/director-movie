import apiService from "../services/api.service";

export const ACTION_TYPES = {
  GETMOVIEBYID: "GETMOVIEBYID",
  ADDMOVIE: "ADDMOVIE",
  GET_MOVIES_BY_DIRECTOR_ID: "GET_MOVIES_BY_DIRECTOR_ID",
};

export const getMoviesByDirectorId = (id) => (dispatch) => {
  apiService
    .movies()
    .getMoviesByDirectorId(id)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.GET_MOVIES_BY_DIRECTOR_ID,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
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

export const addMovie = (movie) => (dispatch) => {
  apiService
    .movies()
    .saveMovie(movie)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.ADDMOVIE,
        payload: response.data,
      });
    })
    .catch((err) => console.log("err-addmovie", err));
};

export const uploadFile = (formData) => {
  return apiService.upload().image(formData);
};
