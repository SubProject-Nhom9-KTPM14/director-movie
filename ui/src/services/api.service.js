import axios from "axios";
const baseApi = "http://localhost:9191/";
export default {

  movies(url = baseApi + "movies/") {
    return {
      getMovieById: (id) => axios.get(url + id),
      saveMovie: (movie) => axios.post(url + "saveMovie", movie),
    };
  },
};
