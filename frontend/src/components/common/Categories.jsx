import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux';
import React from 'react'

const Categories = ({category}) => {
    const dispatch = useDispatch();
  return (
    
      <>
      
            <div className="scroll" onClick={()=>dispatch(push("/places?category="+category.id))}>
                <div>
                    <img id="img1" src={category.image} alt="img1"></img>
                    <h3>{category.name}</h3>
                </div>

            </div>

            </>      
  )
};

export default Categories



