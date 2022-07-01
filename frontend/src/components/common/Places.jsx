import React from 'react'
// import { push } from 'connected-react-router'
// import like from "../../assets/img/like_button.png"



const Places = ({place}) => {
 

//   useEffect(() => {
//     getPlaces();
//   });
  
  return (
    <>
 
 
     
                
                <div className='col-1'>

             

                    <img id="img1" src={place.image} alt="img1"/>
                    <h3>{place.name}</h3>
                    <p>{place.description}</p>
                </div>
            
      
     
  </>

  )
}

export default Places;


