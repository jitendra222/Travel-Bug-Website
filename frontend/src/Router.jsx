

import React from "react";
import { Route, Switch } from "react-router";
// import Favourites from "./containers/Favourites";
import Home from "./containers/Home";
import "./assets/css/style.css";



const Router = () => {
  
  return (
    <>
      <Switch>
      <Route exact path={"/"} component={Home} />

      </Switch>  
      
       
      
    </>
  );
};
export default Router;