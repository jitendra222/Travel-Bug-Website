import React, { useEffect } from "react";
import Footer from "../components/common/Footer";
import Categories from "../components/common/Categories";
import Header from "../components/common/Header";
import { getPlaces } from "../redux/places/selectors";
import { getCategories } from "../redux/categories/selectors";
import { fetchPlaces } from "../redux/places/operations";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories } from "../redux/categories/operations";



const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const places = getPlaces(selector);
  useEffect(() => {
    dispatch(fetchPlaces());
  }, []);
  const categories = getCategories(selector);
  console.log(categories);
  console.log(places);
  useEffect(() => {
    dispatch(fetchCategories());
    
  }, []);

  // console.log(categories);

  return (
    <>
      <Header />
      <div className='natural-heading'><h2>Natural Wonders In USA</h2></div>
            <div className="scroll">
                <div>
                { categories.results &&
           categories.results.map((category) => (
           <Categories key={category.id} category={category} />
           ))} 
                </div>
            </div>
        <Footer />    
    </>
  );
};

export default Home;