import Veggie from "../Components/Veggie";
import Popular from "../Components/Popular";

// Will contain two components - Trending / Our Vegetarian Picks
const Home = () => {
  return (
    <div>
      <Veggie />
      <Popular />
    </div>
  );
};

export default Home;
