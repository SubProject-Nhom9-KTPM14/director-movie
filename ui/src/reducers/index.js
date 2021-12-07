import { combineReducers } from "redux";
import { movieReducer } from "./movie.reducer";
import { directorReducer } from "./director.reducer";
export const rootReducer = combineReducers({
  movie: movieReducer,
  director: directorReducer,
});
