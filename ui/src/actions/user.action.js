import apiService from "../services/api.service";

export const ACTION_TYPES = {
  GET_USER_BY_ID: "GET USER BY ID",
};

export const getUserById = (id) => (dispatch) => {
  apiService
    .directors()
    .getDirectorById(id)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.GET_USER_BY_ID,
        payload: response.data,
      });
    })
    .then((error) => {
      console.log(error);
    });
};
