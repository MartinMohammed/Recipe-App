import styled from "styled-components";

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.5s ease-out;

  &:hover {
    box-shadow: 2px 2px 4px #313131;
  }
`;

export default Button;
