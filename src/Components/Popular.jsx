import React, { useEffect, useState } from "react";
/* Styled-Components - CSS-IN-JS 
  Popular libarary that is used to style React Applications.
  =>  build custom components by writing actual CSS 
  in your JS.
*/
// --------- USE THIS LIKE SASS => use tags inside it ...

import Wrapper from "./StyledComponents/Wrapper";
import Gradient from "./StyledComponents/Gradient";
import Card from "./StyledComponents/Card";

import { demoData } from "../util/DemoData";
import { createSpoonacularUrl } from "../util/constraints";

// Splide = lightweight, flexible and accessible slider / carousel written in TS.
// Splide = Carousel
// SplideSlide will be the individual image/ card in the carousel

import { Splide, SplideSlide } from "@splidejs/react-splide";
// The styling for the Splide Carousel
import "@splidejs/splide/dist/css/splide.min.css";

// --------- COMPONENTS ---------
// import RecipeCard from "./RecipeCard";

function Popular() {
  const [popularRecipes, setPopularRecipes] = useState(demoData.recipes);

  useEffect(() => {
    const getPopular = async () => {
      const SPOONACULAR_URL_POPULAR = createSpoonacularUrl("random", {
        number: 9,
      });

      // ---------- CHECK LOCAL STORAGE FOR CACHED DATA ----------
      const check = localStorage.getItem("popular"); // If something is cached get it
      // * => in localStorage data is saved as String
      // ! Up to 5MB of data / the data has no expiration time
      if (check) {
        // From string to JavaScript Array
        setPopularRecipes(JSON.parse(check));
      } else {
        const response = await fetch(SPOONACULAR_URL_POPULAR);
        const data = await response.json();

        // No Data was cached in the localStorage
        // From Array to JSON STRING
        localStorage.setItem("popular", JSON.stringify(data.recipes));
        setPopularRecipes(data.recipes);
      }
    };

    getPopular();
  }, []);

  const renderPopularRecipesCards = popularRecipes.map((recipe) => {
    return (
      // Individual Carousel Item
      <SplideSlide key={recipe.id}>
        <Card>
          <p>{recipe.title}</p>
          <img src={recipe.image} alt={recipe.title}></img>
          <Gradient />
        </Card>
      </SplideSlide>
    );
  });

  const splideOptions = {
    perPage: 4,
    arrows: false,
    // the dots on the bottom of the Splide
    pagination: false,
    // paginate through dragging
    drag: "free",
    gap: "5rem",
  };
  return (
    <div>
      <Wrapper>
        <h3>Popular Picks</h3>
        {/* Carousel */}
        <Splide options={splideOptions}>{renderPopularRecipesCards}</Splide>
      </Wrapper>
    </div>
  );
}

export default Popular;
