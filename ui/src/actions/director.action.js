import apiService from "../services/api.service";
import { useAlert } from 'react-alert'
import { useNavigate } from "react-router-dom";
export const ACTION_TYPES = {
    REGISTER: "REGISTER",
    LOGIN: "LOGIN",
    ALL_DIRECTOR: "ALL_DIRECTOR"
};
export const register = (director) => (dispatch) => {
    apiService
        .director()
        .register(director)
        .then((response) => {
            dispatch({
                type: ACTION_TYPES.REGISTER,
                payload: response.data,
            });
        })
        .catch((error) => {
            console.log("err", error);
        });
};
export const getAllDirec = () => (dispatch) => {
    apiService
        .director()
        .allDirec()
        .then((response) => {
            dispatch({
                type: ACTION_TYPES.ALL_DIRECTOR,
                payload: response.data,
            });
        })
        .catch((error) => {
            console.log("err", error);
        });
};
export const login = (director) => (dispatch) => {
    apiService
        .director()
        .login(director)
        .then((response) => {
            dispatch({
                type: ACTION_TYPES.LOGIN,
                payload: response.data,
            });
            if (response.data) {
                localStorage.setItem("user_authenticate", response.data)

                // navigate("/register")
            }

        })
        .catch((error) => {
            console.log(error)
        });
};

