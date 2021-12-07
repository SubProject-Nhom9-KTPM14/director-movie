import { ACTION_TYPES } from "../actions/director.action";
const initialState = {
    register: null,
    allDirector: [],
    user: ''
};
export const directorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.REGISTER: {
            return {
                ...state,
                register: action.payload,
            };
        }
        case ACTION_TYPES.ALL_DIRECTOR: {
            return {
                ...state,
                allDirector: action.payload,
            };
        }
        case ACTION_TYPES.LOGIN: {
            return {
                ...state,
                user: action.payload,
            };
        }
        default:
            return state;
    }
};
