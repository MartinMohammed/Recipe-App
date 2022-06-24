import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import {
  GiNoodles,
  GiChopsticks,
  GiFlexibleLamp,
  GiFlexibleStar,
} from "react-icons/gi";
import List from "./StyledComponents/List";
import SLink from "./StyledComponents/StyledNavLink";

// WILL SHOW UP ON EVERY PAGE WE VISIT
function Category() {
  return (
    <List>
      <SLink to={`/cuisine/Italian`}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={`/cuisine/American`}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={`/cuisine/Thai`}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={`/cuisine/Japanese`}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </SLink>
    </List>
  );
}

export default Category;
