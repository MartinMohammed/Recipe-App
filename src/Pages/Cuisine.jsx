import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"; // extract the dynamic param from the url
import { createSpoonacularUrl } from "../util/constraints";

// Custom Styled Components
import Grid from "../Components/StyledComponents/Grid";
import { Card2 } from "../Components/StyledComponents/Card";

// Cuisine = Kitchen => For specific city or country

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams(); // {object format - key values}

  useEffect(() => {
    const SPOONACULAR_URL_CUISINE = createSpoonacularUrl("complexSearch", {
      number: 9,
      cuisine: params.type,
    });
    const getCuisine = async () => {
      const check = localStorage.getItem(params.type);
      if (check) {
        setCuisine(JSON.parse(check)); // from json string to javascript object
      } else {
        const response = await fetch(SPOONACULAR_URL_CUISINE);
        const data = await response.json();
        localStorage.setItem(params.type, JSON.stringify(data.results));
        setCuisine(data.results);
        console.log(data);
      }
    };

    getCuisine(params.type);
  }, [params.type]);

  const renderCusineList = cuisine.map((recipe) => {
    return (
      <Card2 key={recipe.id}>
        <Link to={`/recipe/${recipe.id}`}>
          <img src={recipe.image} alt={recipe.title}></img>
          <h4>{recipe.title}</h4>
        </Link>
      </Card2>
    );
  });

  return (
    <div>
      <Grid
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {renderCusineList}
      </Grid>
    </div>
  );
}

export default Cuisine;
