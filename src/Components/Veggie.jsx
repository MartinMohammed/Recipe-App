import React from "react";
import { SplideSlide, Splide } from "@splidejs/react-splide";
import { useState, useEffect } from "react";

// --------- USE THIS LIKE SASS => use tags inside it ...
import Wrapper from "./Custom/Wrapper";
import Gradient from "./Custom/Gradient";
import Card from "./Custom/Card";
import demoData from "../util/DemoData";
import { createSpoonacularUrl } from "../util/constraints";

const SPOONACULAR_URL_VEGGIE = createSpoonacularUrl(9, "veggie");

function Veggie() {
  const [veggieRecipes, setVeggieRecipes] = useState(demoData.recipes);

  const getPopular = async () => {
    // ---------- CHECK LOCAL STORAGE FOR CACHED DATA ----------
    const check = localStorage.getItem("veggie"); // If something is cached get it
    // * => in localStorage data is saved as String
    // ! Up to 5MB of data / the data has no expiration time
    if (check) {
      // From string to JavaScript Array
      setVeggieRecipes(JSON.parse(check));
    } else {
      const response = await fetch(SPOONACULAR_URL_VEGGIE);
      const data = await response.json();

      // No Data was cached in the localStorage
      // From Array to JSON STRING
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggieRecipes(data.recipes);
    }
  };

  useEffect(() => {
    getPopular();
  }, []);

  const renderPopularRecipesCards = veggieRecipes.map((recipe) => {
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
    perPage: 3,
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
        <h3>Our Vegetarian Picks</h3>
        {/* Carousel */}
        <Splide options={splideOptions}>{renderPopularRecipesCards}</Splide>
      </Wrapper>
    </div>
  );
}

export default Veggie;
