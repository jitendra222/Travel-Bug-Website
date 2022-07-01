import API from "../../API";
import { fetchPlacesAction} from "./actions";


const api = new API();

export const fetchPlaces = () => {
  return async (dispatch) => {
    return api
      .getPlaces()
      .then((places) => {
        dispatch(fetchPlacesAction(places));
      })
      .catch((error) => {
        alert("Failed to connect API: /places/");
      });
  };
};