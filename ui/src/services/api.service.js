import axios from "axios";
const baseApi = "http://localhost:9002/";
export default {
  movies(url = baseApi + "movies/") {
    return {
      getMovieById: (id) => axios.get(url + id),
    };
  },
};
