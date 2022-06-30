import React, { useEffect } from "react";
import Footer from "../components/common/Footer";
import Categories from "../components/common/Categories";
import Header from "../components/common/Header";
import MainImage from "../components/common/MainImage"
import Places from "../components/common/Places"
import Subscribe from "../components/common/Subscribe"
import Maps from "../components/common/Maps"
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

  console.log(places);

  const categories = getCategories(selector);
  useEffect(() => {
    dispatch(fetchCategories());
    
  }, []);

  console.log(categories);

  return (
    <>
      <Header />
      <MainImage />
      <div className='natural-heading'><h2>Natural Wonders In USA</h2></div>
      <div className="scroll">
        <div>
          { categories.results &&
          categories.results.map((category) => (
          <Categories key={category.id} category={category} />
           ))} 
        </div>
      </div> 
      <h2 className='natural-heading'>Tourist Attractions In USA</h2>
      <div className="places-grid">
        <div className="places">
          <div className="col-1">
            { places.results && places.results.map((place) => 
            (<Places key ={places.id} place={place} />))}
          </div>
        </div>  
      </div>
      <Maps />
      


      <Footer />
      
    </> 
    
            
  
  );
};

export default Home;