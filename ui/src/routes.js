import { Children } from "react";
import { useRoutes, Navigate, Link } from "react-router-dom";

import MainHeader from "./components/layout/MainHeader";
import AddMovie from "./pages/AddMovie";
import Information from "./pages/Information";
import Login from "./pages/Login";
import MovieDetail from "./pages/MovieDetail";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
// import AddMovie from "./pages/AddMovie";

const Router = () => {
  return useRoutes([
    localStorage.getItem("user_authenticate")
      ? {
          path: "/",
          element: <MainHeader />,
          children: [
            { path: "information", element: <Information /> },
            { path: "movies", element: <Movies /> },
            { path: "movies/:movieId", element: <MovieDetail /> },
            { path: "addmovie", element: <AddMovie /> },
            { path: "/", element: <Navigate to="/login" /> },
            { path: "*", element: <Navigate to="/404" /> },
          ],
        }
      : {
          path: "/",
          element: <MainHeader />,
          children: [
            { path: "login", element: <Login /> },
            { path: "404", element: <NotFound /> },
            { path: "register", element: <Register /> },
            { path: "/", element: <Navigate to="/login" /> },
            { path: "*", element: <Navigate to="/404" /> },
          ],
        },
  ]);
};

export default Router;
