import { ACTION_TYPES } from "../actions/movie.action";

const initialState = {
  movieDetail: null,
  moviesByDirectorId: [],
  movie: null,
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_MOVIES_BY_DIRECTOR_ID: {
      return {
        ...state,
        moviesByDirectorId: action.payload,
      };
    }

    case ACTION_TYPES.GETMOVIEBYID: {
      return {
        ...state,
        movieDetail: action.payload,
      };
    }

    case ACTION_TYPES.ADDMOVIE: {
      return {
        ...state,
        movie: action.payload,
      };
    }
    default:
      return state;
  }
};
