import { ACTION_TYPES } from "../actions/director.action";

const initialState = {
    register: null,
    allDirector: [],
    user: "",
    userprofile: null,
    userId: "",
};

export const directorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_USER_BY_ID:
            return {
                ...state,
                userprofile: action.payload,
            };

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
                userId: action.id
            };
        }

        default:
            return state;
    }
};
