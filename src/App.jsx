import { BrowserRouter } from "react-router-dom";
import Category from "./Components/Category";
import Pages from "./Pages";
import Search from "./Components/Search";
import Nav from "./Components/StyledComponents/Nav";
import Logo from "./Components/StyledComponents/Logo";
import { GiKnifeFork } from "react-icons/gi";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>delicioussss</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
};

export default App;
