import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux';
import React from 'react'

const Categories = ({category}) => {
    const dispatch = useDispatch();
  return (
    
      <>

        
                <div onClick={()=>dispatch(push("/places?category="+category.id))}>
                    <img id="img1" src={category.image} alt="img1"></img>
                    <h3>{category.name}</h3>
                </div>

            
        
        

            </>      
  )
};

export default Categories



