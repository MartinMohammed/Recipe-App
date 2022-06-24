import React from "react";

// Components that are specific for styling
import styled from "styled-components";

function RecipeCard(props) {
  const { title } = props;
  return (
    <Wrapper>
      <h3>Popular Picks</h3>
    </Wrapper>
  );
}

// create like these functions above
// and attach like an component that has styling attached to it
// replace div with this wrapper
const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

export default RecipeCard;
