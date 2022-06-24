import styled from "styled-components";

const FormStyle = styled.form`
  margin: 0rem auto;
  position: relative;
  width: 100%;
  input {
    border: none;
    width: 100%;
    background: linear-gradient(35deg, #494949, #313131);
    border: none;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    color: #ffffff;
  }

  svg {
    // Position total left within the input field
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(
      100%,
      -50%
    ); // to center the element within the input field
    color: #ffffff;
  }
`;

export default FormStyle;
