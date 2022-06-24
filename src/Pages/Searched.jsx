import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createSpoonacularUrl } from "../util/constraints";

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const params = useParams();
  const searchTerm = params.searchTerm;

  useEffect(() => {
    const doSearch = async () => {
      const SPOONACULAR_URL_SEARCH = createSpoonacularUrl("complexSearch", {
        query: searchTerm,
      });

      const oldQueries = JSON.parse(
        localStorage.getItem("SearchQueries") || "{}"
      ); // if no oldQueries we're svaed
      const recipes = oldQueries?.[searchTerm];
      console.log(recipes);

      if (recipes) {
        // we know the customer had once searched for that particular searchterm
        console.log(recipes, "from local storage");
      } else {
        console.log("api request");
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
  }, []);
  return <div>{searchTerm}</div>;
}

export default Searched;
