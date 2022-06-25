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
        {/* Only contains an logo to navigate back to home */}
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>delicioussss</Logo>
        </Nav>

        {/* Make the user able to Search for particular recipes such as "pasta" */}
        <Search />

        {/* Let the customer choose from different Cuisine categories: Italian, Chinese, Thai, American */}
        <Category />

        {/* Responsible for rendering Page based on the current Url */}
        <Pages />
      </BrowserRouter>
    </div>
  );
};

export default App;
