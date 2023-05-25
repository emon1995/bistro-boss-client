import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import { Helmet } from "react-helmet-async";
import Featured from "../Featured/Featured";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <Featured></Featured>
    </div>
  );
};

export default Home;
