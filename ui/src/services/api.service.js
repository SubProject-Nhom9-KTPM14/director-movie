import axios from "axios";

const baseApi = "http://localhost:9191/";

export default {
  movies(url = baseApi + "movies/") {
    return {
      getMovieById: (id) => axios.get(url + id),
      getMovieByDirectorId: (id) => axios.get(url + "movies-by-director/" + id),
    };
  },
  directors(url = baseApi + "directors/") {
    return {
      getDirectorById: (id) => axios.get(url + id),
    };
  },
};
