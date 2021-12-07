import { CardActionArea } from "@material-ui/core";
import { ACTION_TYPES } from "../actions/user.action";

/**
 *  Users Initial State
 */
const initialState = { userId: "1", userprofile: null };

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_USER_BY_ID:
      return {
        ...state,
        userprofile: action.payload,
      };

    default:
      return state;
  }
};
