import apiService from "../services/api.service";
export const ACTION_TYPES = {
  GETMOVIEBYID: "GETMOVIEBYID",
  ADDMOVIE: "ADDMOVIE",
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
      })
    })
    .catch((err) => console.log("err-addmovie", err));
}