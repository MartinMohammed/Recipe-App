import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Custom Styled Components
import Button from "../Components/StyledComponents/Button";
import { DetailWrapper } from "../Components/StyledComponents/Wrapper";
import Info from "../Components/StyledComponents/Info";

function Recipe() {
  let params = useParams();
  const [recipe, setRecipe] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  useEffect(() => {
    const fetchDetails = async () => {
      const SPOONACULAR_URL = `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`;
      const response = await fetch(SPOONACULAR_URL);
      const detailData = await response.json();
      setRecipe(detailData);
    };

    fetchDetails();
  }, [params.name]);

  const renderIngredients = recipe.extendedIngredients?.map((ingredient) => {
    return <li key={ingredient.id}>{ingredient.original}</li>;
  });

  return (
    <DetailWrapper>
      <div>
        <h2>{recipe.title}</h2>
        <img
          src={recipe.image}
          alt={recipe.title}
          style={{ maxWidth: "600px" }}
        ></img>
      </div>
      <Info>
        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <Button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => {
              setActiveTab("instructions");
            }}
          >
            Instructions
          </Button>
          <Button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => {
              setActiveTab("ingredients");
            }}
          >
            Ingredients
          </Button>
        </div>
        {activeTab === "instructions" && (
          <div style={{ width: "100%" }}>
            {/* render html inside of string */}
            <h3 dangerouslySetInnerHTML={{ __html: recipe.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: recipe.instructions }}></h3>
          </div>
        )}
        {activeTab === "ingredients" && <ul>{renderIngredients}</ul>}
      </Info>
    </DetailWrapper>
  );
}

export default Recipe;
