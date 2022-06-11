import React from 'react';
import logo from "../../assets/img/TRAVEL-BUG-Logo.png"
import "../../assets/css/style.css"


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }



const Header = () => {
    return (
        <>
    <section className="nav">
    <div className = "logo">
        <a href="/"><img src={logo} alt="logo"></img></a>
    </div>
    <div className="topnav" id="myTopnav">
        <a href="/">Home</a>
        <a href="/">WONDERS IN USA</a>
        <a href="/">TOURIST ATTRACTION</a>
        <a href="/">FAVOURITE</a>
        <a href="#" className="icon" onClick= {myFunction()}>
            <i className="fa fa-bars"></i></a>
    </div>
</section>
</>

)};


export default Header;