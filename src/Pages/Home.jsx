import Veggie from "../Components/Veggie";
import Popular from "../Components/Popular";
import { motion } from "framer-motion";

// Will contain two components - Trending / Our Vegetarian Picks
const Home = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Veggie />
      <Popular />
    </motion.div>
  );
};

export default Home;
