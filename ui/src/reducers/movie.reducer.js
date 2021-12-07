import { ACTION_TYPES } from "../actions/movie.action";

const initialState = {
  movieId: "1",
  movieById: null,
  movie: null,
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GETMOVIEBYID: {
      return {
        ...state,
        movieId: action.payload,
      };
    }
    case ACTION_TYPES.ADDMOVIE: {
      return {
        ...state,
        movie: action.payload
      }
    }
    default:
      return state;
  }
};
