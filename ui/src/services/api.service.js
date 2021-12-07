import axios from "axios";

const baseApi = "http://localhost:9191/";

export default {
  movies(url = baseApi + "movies/") {
    return {
      getMovieById: (id) => axios.get(url + id),
      saveMovie: (movie) => axios.post(url + "saveMovie", movie),
      getMoviesByDirectorId: (id) =>
        axios.get(url + "movies-by-director/" + id),
    };
  },
  director(url = baseApi + "directors/") {
    return {
      register: (director) => axios.post(url + "register", director),
      login: (director) => axios.post(url + "login", director),
      allDirec: () => axios.get(url + "/allDirector"),
      getDirectorById: (id) => axios.get(url + id, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Token ${localStorage.getItem('user_authenticate')}`
        }
      }),
    };
  },
  address(url = "https://provinces.open-api.vn/api/") {
    return {
      getCity: () => axios.get(url),
    };
  },

  upload(url = baseApi + "storage/") {
    return {
      image: (formData) =>
        axios.post(url + "uploadFile/", formData, {
          headers: {
            "content-type": "multipart/form-data",
          },
        }),
    };
  },
};
