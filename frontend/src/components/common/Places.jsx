import React from 'react'
// import { push } from 'connected-react-router'
import { useEffect } from 'react';
import { getPlaces } from '../../redux/places/selectors';

const Places = (places) => {

  useEffect(() => {
    getPlaces();
  });
  
  return (
    <>
 
 
     
            
                <div>
                    <img id="img1" src={places.image} alt="img1"/>
                    <h3>{places.name}</h3>
                </div>
            
      
     
  </>

  )
}

export default Places;


