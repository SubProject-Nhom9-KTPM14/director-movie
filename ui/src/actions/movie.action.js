import apiService from "../services/api.service";
export const ACTION_TYPES = {
  GETMOVIEBYID: "GETMOVIEBYID",
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
