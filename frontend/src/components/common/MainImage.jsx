import React from 'react';
import image from "../../assets/img/header-wall.png"
import searchImg from "../../assets/img/search-icon.png"



const MainImage = () => {
    return (
<>
    <div className="header">
    <div className="main">
        <img src={image} alt="header-img"></img>
        <div id="header" className="shade"></div>
        <div className="search">
            <h1>The United place on Earth</h1>
            <input type="text" placeholder="Search your destination"></input>
            <img src={searchImg} alt="search"></img>
        
        </div>
    </div>
    </div>
    </> 
    )
};


export default MainImage;