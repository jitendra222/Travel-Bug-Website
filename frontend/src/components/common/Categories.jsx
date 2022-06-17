import React from 'react'

export default function Categories() {
  return (
      <>
      <div className='natural-heading'><h2>Natural Wonders In USA</h2></div>
            <div className="scroll" onClick={()=>dispatch(push("/places?category="+category.id))}>
                <div>
                    <img id="img1" src={category.image} alt="img1"></img>
                    <h3>{category.name}</h3>
                </div>

            </div>

            </>      
  )
};
