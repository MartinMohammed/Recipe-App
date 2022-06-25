import styled from "styled-components";

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

export default Wrapper;

export const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  justify-content: space-evenly;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
    transition: 0.5s ease-out;
  }
  .active:hover {
    box-shadow: 2px 2px 4px #313131;
  }
  h3 {
    margin: 0;
    margin-top: 5rem;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;
