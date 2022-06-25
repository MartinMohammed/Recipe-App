import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createSpoonacularUrl } from "../util/constraints";
import { Link } from "react-router-dom";

// Custom Styled Components
import Grid from "../Components/StyledComponents/Grid";
import { Card2 } from "../Components/StyledComponents/Card";

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const params = useParams();
  const searchTerm = params.searchTerm;

  useEffect(() => {
    const doSearch = async () => {
      const SPOONACULAR_URL_SEARCH = createSpoonacularUrl("complexSearch", {
        query: searchTerm,
      });

      // ---------- CHECK LOCAL STORAGE FOR CACHED DATA ----------
      const oldQueries = JSON.parse(
        localStorage.getItem("SearchQueries") || "{}"
      ); // if no oldQueries we're svaed
      const recipes = oldQueries?.[searchTerm];

      if (recipes) {
        // we know the customer had once searched for that particular searchterm
      } else {
        // make api request no recipe
        const response = await fetch(SPOONACULAR_URL_SEARCH);
        const recipes = await response.json();
        // we dont want to store something where we have no results
        if (recipes.results.length !== 0) {
          setSearchedRecipes(recipes.results);
          const newData = { ...oldQueries, [searchTerm]: recipes };
          localStorage.setItem("SearchQueries", JSON.stringify(newData));
        }
      }
    };
    doSearch();
  }, [searchTerm]);

  const renderSearchedRecipes = searchedRecipes.map((searchedRecipe) => {
    const { title, id, image } = searchedRecipe;
    return (
      <Card2 key={id}>
        <Link to={`/recipe/${searchedRecipe.id}`}>
          <img src={image} alt={title}></img>
          <h4>{title}</h4>
        </Link>
      </Card2>
    );
  });
  return <Grid>{renderSearchedRecipes}</Grid>;
}

export default Searched;
