

import React from "react";
import { Route, Routes } from "react-router";
// import Favourites from "./containers/Favourites";
import Home from "./containers/Home";


const Router = () => {
  return (
    <>
      <Routes>
        <Route exact path={"/"} component={Home} />
        {/* <Route exact path={"/favourites/"} component={Favourites} />
        <Route exact path={"/places/"} component={Places} />
        <Route exact path={"/detail-page/"} component={DetailPage} /> */}
      </Routes>
    </>
  );
};
export default Router;