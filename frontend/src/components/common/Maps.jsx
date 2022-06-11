import React from 'react';
import imgback1 from '../../assets/img/img_back1.png'



const Maps = () => {
    return (
        <>
  <div className="maps">
    <img id="img1" src={imgback1} alt="image" />
    <div className="media">
      <h5>DISCOVER</h5>
      <h1>Watch Our Video Tour</h1>
      <video width={700} height={400} controls="" autoPlay="">
        <source src="/src/video/video.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
  <div className="search-text">
    <img src="/src/img/img_back2.png" alt="image" />
    <h2>Get 10% Off on Your Next Travel</h2>
    <p>Maximum discount 1000$ per person</p>
    <div className="email-box">
      <input type="text" placeholder="Enter your email" />
      <button>SUBSCRIBE</button>
    </div>
    <img src="/src/img/map.png" alt="map" />
    <div className="shade" />
  </div>
</>
    );
}



export default Maps;