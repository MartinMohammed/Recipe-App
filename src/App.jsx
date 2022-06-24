import { BrowserRouter } from "react-router-dom";
import Category from "./Components/Category";
import Pages from "./Pages";
import Search from "./Components/Search";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
};

export default App;
