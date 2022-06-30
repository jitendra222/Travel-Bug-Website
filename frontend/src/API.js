import axios from "axios";

var baseURL;

baseURL = "http://127.0.0.1:8000/";

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});
export default class API {
  getPlaces = async () => {
    let url = "/places/";
    

    const places = await api
      .get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return places;
  };

  getCategories = async () => {
    const categories = await api
      .get("/categories/")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return categories;
  };
}