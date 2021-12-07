import { combineReducers } from "redux";
import { userReducer } from "./user.reducer";
import { movieReducer } from "./movie.reducer";
import { directorReducer } from "./director.reducer";
export const rootReducer = combineReducers({
  user: userReducer,
  movie: movieReducer,
  director: directorReducer
});
