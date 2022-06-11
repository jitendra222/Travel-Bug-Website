import React from 'react'
import { push } from 'connected-react-router'
import { useEffect } from 'react';

import API from "../../API";
import { fetchPlacesAction} from "../../actions";

const api = new API();

export const getPlaces = () => {
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

export default function Places(places) {

  // const getPlaces =async () => {
  //   const response = await fetch('http://127.0.0.1:8000/places/');
  //   console.log(response);
  // }

  useEffect(() => {
    getPlaces();
  });
  
  return (
    <>
  <h2 style={{ textAlign: "center", marginTop: 25, fontSize: "2.5vw" }}>
    Tourist Attractions In USA
  </h2>
  <div className="places-grid">
    <div className="places">
      <div className="col-1">
        <img src={places.image} alt="img1" />
        <div className="info">
          <h2>{places.name}</h2>
          <p>
            {places.description}
          </p>
        </div>
      </div>
    </div>
  </div>
</>

  )
}
