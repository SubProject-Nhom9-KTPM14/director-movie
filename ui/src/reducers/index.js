import { combineReducers } from "redux";
import { userReducer } from "./user.reducer";
import { movieReducer } from "./movie.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  movie: movieReducer,
});
