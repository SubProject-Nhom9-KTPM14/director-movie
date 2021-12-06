import { ACTION_TYPES } from "../actions/movie.action";
const initialState = { movieId: "1", movieById: null };
export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GETMOVIEBYID: {
      return {
        ...state,
        movieId: action.payload,
      };
    }
    default:
      return state;
  }
};
