import axios from "axios";
const baseApi = "http://localhost:9002/";
export default {
  movies(url = baseApi + "movies/") {
    return {
      getMovieById: (id) => axios.get(url + id),
    };
  },
  director(url = "http://localhost:9001/") {
    return {
      register: (director) => axios.post(url + "register", director),
      login: (director) => axios.post(url + "login", director),
      allDirec: () => axios.get("http://localhost:9001/directors/allDirector")
    }
  },
  address(url = "https://provinces.open-api.vn/api/") {
    return {
      getCity: () => axios.get(url)
    }
  }
};
