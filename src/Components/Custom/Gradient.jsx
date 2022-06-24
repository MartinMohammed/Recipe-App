import styled from "styled-components";

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  // Same size as the image - on top of the image
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
export default Gradient;
