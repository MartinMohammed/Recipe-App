import styled from "styled-components";
import { NavLink } from "react-router-dom";

// Style the NavLink
// Removes the mapping between components and styles
// Our styled are attached to the specific component
const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8); /* scale horizontally and vertically */

  h4 {
    color: white;
    font-size: 0.8rem;
  }
  svg {
    font-size: 1.5rem;
    color: white;
  }
  /* svg:active{} => the same - & shows that we want to apply
    style for the component before */

  /* This class is added by react-router-dom when the current Link was clicked */
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
      color: white;
    }

    h4 {
      color: white;
    }
  }
`;

export default SLink;
