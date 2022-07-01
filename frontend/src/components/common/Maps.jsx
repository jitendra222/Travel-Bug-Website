import React from 'react';
import imgback1 from '../../assets/img/img_back1.png'
import imgback2 from '../../assets/img/img_back1.png'
import map from '../../assets/img/map.png'
import video from '../../assets/video/video2.mp4'



const Maps = () => {
    return (
        <>
  <div className="maps">
    <img id="img1" src={imgback1} alt="image" />
    <div className="media">
      <h5>DISCOVER</h5>
      <h1>Watch Our Video Tour</h1>
      <iframe id="video" src="https://www.youtube.com/embed/NvVgTVpeAIs" title="Top 10 Places to Visit in USA 2022 - Travel Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      
    </div>
  </div>
  <div className="search-text">
    <img src={imgback2} alt="image" />
    <h2>Get 10% Off on Your Next Travel</h2>
    <p>Maximum discount 1000$ per person</p>
    <div className="email-box">
      <input type="text" placeholder="Enter your email" />
      <button>SUBSCRIBE</button>
    </div>
    <img src={map} alt="map" />
    <div className="shade" />
  </div>
</>
    );
}



export default Maps;