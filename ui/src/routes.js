import { Children } from "react";
import { useRoutes, Navigate, Link } from "react-router-dom";

import MainHeader from "./components/layout/MainHeader";
import Information from "./pages/Information";
import Login from "./pages/Login";
import Movies from "./pages/Movies";
import Register from "./pages/Register";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <MainHeader />,
      children: [
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "information", element: <Information /> },
        { path: "movies", element: <Movies /> },
        { path: "/", element: <Navigate to="/login" /> },
      ],
    },
  ]);
};

export default Router;