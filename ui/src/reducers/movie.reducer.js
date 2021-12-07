import { ACTION_TYPES } from "../actions/movie.action";

const initialState = { moviesByDirectorId: [], movieDetail: null };

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GETMOVIEBYID: {
      return {
        ...state,
        movieDetail: action.payload,
      };
    }

    case ACTION_TYPES.GET_MOVIE_BY_DIRECTOR_ID: {
      return {
        ...state,
        moviesByDirectorId: action.payload,
      };
    }

    default:
      return state;
  }
};
